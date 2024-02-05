import { NgClass, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe, NgIf, NgClass, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.sass'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
