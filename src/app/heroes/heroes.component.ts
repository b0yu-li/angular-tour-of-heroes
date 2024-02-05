import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HEROES } from '../mock-heroes';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgFor, NgIf, NgClass, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.sass'
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  renderSelectBtn(hero: Hero): string {
    if (this.selectedHero === hero) {
      return "selected".toUpperCase()
    }
    return "select".toUpperCase()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
