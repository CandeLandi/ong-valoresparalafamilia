import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface NavigationItem {
  id: string;
  text: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  mobileMenuOpen = false;

  navigationItems: NavigationItem[] = [
    { id: 'inicio', text: 'Inicio' },
    { id: 'prevention', text: 'Prevención' },
    { id: 'principles', text: 'Claves' },
    { id: 'talleres', text: 'Talleres' },
    { id: 'values', text: 'Valores' },
    { id: 'contact', text: 'Contacto' },
    { id: 'donate', text: 'Donar' },
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMobileMenu();
  }
}
