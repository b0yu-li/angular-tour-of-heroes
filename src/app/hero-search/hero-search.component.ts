import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [NgFor, RouterModule, AsyncPipe],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.sass'
})
export class HeroSearchComponent {
  heroes$!: Observable<Hero[]>;

  search(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
