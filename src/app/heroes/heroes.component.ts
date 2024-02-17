import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgFor, NgIf, NgClass, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.sass'
})
export class HeroesComponent {
  heroes: Hero[] = [];
  private hoverId: number | null = null;

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

  mouseHover($event: MouseEvent, id: number) {
    this.messageService.add(`HeroesComponent: mouse event=${$event}, hero id=${id}`);
    this.hoverId = id;
  }

  leaveHover() {
    this.messageService.add(`HeroesComponent: leave hover`);
    this.hoverId = null;
  }

  getDeleteBtnClass(id: number): string {
    if (id === this.hoverId) {
      return "opacity-100";
    }
    return "";
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.router.navigate(['/', 'detail', hero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
