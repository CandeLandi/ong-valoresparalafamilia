import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './scroll-to-top.component.html',
  styles: [`
    :host {
      overflow: hidden !important;
      max-width: 100vw !important;
      position: fixed !important;
      right: 1rem !important;
      bottom: 1rem !important;
      z-index: 40 !important;
    }

    button {
      overflow: hidden !important;
      max-width: 100vw !important;
      contain: layout style paint !important;
    }

    button:hover {
      overflow: hidden !important;
      max-width: 100vw !important;
      transform: scale(1.05) !important;
    }
  `]
})
export class ScrollToTopComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 300;
    // Prevenir scroll horizontal
    if (window.scrollX !== 0) {
      window.scrollTo(0, window.scrollY);
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
