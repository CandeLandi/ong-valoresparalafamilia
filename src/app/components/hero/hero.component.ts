import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInSide } from '../../animations/fade-in-side.animation';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styles: [`
    .hero-bg {
      position: relative;
      min-height: 90vh;
      background: url('/assets/images/home/hero-child.jpg') center/cover no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: rgba(10, 10, 20, 0.65);
      backdrop-filter: blur(2px);
      z-index: 1;
      pointer-events: none;
    }
    .hero-content {
      position: relative;
      z-index: 2;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .hero-content img[alt="Logo ONG"]:not(:first-child) {
      opacity: 0.03 !important;
    }
  `],
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
