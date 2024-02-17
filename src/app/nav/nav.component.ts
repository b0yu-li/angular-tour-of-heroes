import { NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, NgFor, HeroSearchComponent, UpperCasePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
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

  constructor(
    private router: Router
  ) { }

  getClass(link: any): string {
    const url = this.router.url;
    if (link.link === url) {
      return "text-gray-100 bg-indigo-600"
    }
    return "text-gray-600 bg-indigo-100"
  }
}
