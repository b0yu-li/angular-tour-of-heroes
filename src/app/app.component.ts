import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent, MessagesComponent, RouterOutlet, RouterModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Tour of Heroes';

  navLinks = [
    {
      linkName: 'Dashboard',
      link: '/dashboard'
    },
    {
      linkName: 'Heroes',
      link: '/heroes'
    }
  ]
}
