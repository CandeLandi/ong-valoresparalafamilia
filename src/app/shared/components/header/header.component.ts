import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface NavigationItem {
  id: string;
  text: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styles: [`
    :host ::ng-deep a {
      color: white;
    }
  `]
})
export class HeaderComponent {
  mobileMenuOpen = false;

  navigationItems: NavigationItem[] = [
    { id: 'inicio', text: 'Inicio' },

    { id: 'prevencion', text: 'Prevención' },
    { id: 'principios', text: 'Claves' },
    { id: 'talleres', text: 'Talleres' },
    { id: 'valores', text: 'Valores' },
    { id: 'contacto', text: 'Contacto' },
    { id: 'donar', text: 'Donar' },
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.updateBodyScroll();
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.updateBodyScroll();
  }

  updateBodyScroll(): void {
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
