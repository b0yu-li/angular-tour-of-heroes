import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgFor, NgIf, NgClass, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.sass'
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.router.navigate(['/', 'detail', hero.id]);
  }
}
