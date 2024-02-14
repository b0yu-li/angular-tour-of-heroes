import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, NgFor],
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
      return "text-gray-100 bg-indigo-500"
    }
    return "text-gray-500 bg-indigo-100"
  }
}
