import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
}
