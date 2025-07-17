import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button
      *ngIf="showScrollButton"
      (click)="scrollToTop()"
      class="fixed bottom-4 right-4 z-40 bg-[#EEA542] hover:bg-[#d8943a] text-white p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      [class.opacity-0]="!showScrollButton"
      [class.opacity-100]="showScrollButton"
    >
      <i-lucide name="arrow-up" class="w-5 h-5"></i-lucide>
    </button>
  `,
  styles: []
})
export class ScrollToTopComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
