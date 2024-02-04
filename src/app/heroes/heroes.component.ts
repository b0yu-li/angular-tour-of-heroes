import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgFor, NgIf, NgClass],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.sass'
})
export class HeroesComponent {
  heroes = HEROES
  selectedHero?: Hero;

  renderSelectBtn(hero: Hero): string {
    if (this.selectedHero === hero) {
      return "selected".toUpperCase()
    }
    return "select".toUpperCase()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
