import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInSide } from '../../animations/fade-in-side.animation';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  animations: [fadeInSide]
})
export class HeroComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
