import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, of, switchMap, tap } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [NgFor, RouterModule, AsyncPipe, NgIf],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.sass'
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]> = of();
  showResults = false;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.asObservable()
      .pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => {
          console.log(`1st switchMap term: ${term}`);
          return this.heroService.searchHeroes(term)
        }),
      );

    this.heroes$ = this.heroes$.pipe(
      tap(it => {
        this.showResults = it.length > 0;
        console.log(`tap called, and showResults: ${this.showResults}`);
      })
    );
  }
}