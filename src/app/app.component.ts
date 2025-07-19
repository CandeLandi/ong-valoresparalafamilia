import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HistorySectionComponent } from './components/history-section/history-section.component';
import { PreventionSectionComponent } from './components/prevention-section/prevention-section.component';
import { CommunitySectionComponent } from './components/community-section/community-section.component';
import { PrinciplesSectionComponent } from './components/principles-section/principles-section.component';
import { EventsSectionComponent } from './components/events-section/events-section.component';
import { ValuesSectionComponent } from './components/values-section/values-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { DonationSectionComponent } from './components/donation-section/donation-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { ScrollToTopComponent } from './shared/components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    HistorySectionComponent,
    PreventionSectionComponent,
    CommunitySectionComponent,
    PrinciplesSectionComponent,
    EventsSectionComponent,
    ValuesSectionComponent,
    ContactSectionComponent,
    DonationSectionComponent,
    FooterSectionComponent,
    ScrollToTopComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'valoresparalafamilia-ong';

  ngOnInit() {
    this.preventHorizontalScroll();

    // Prevenir scroll horizontal inmediatamente
    setTimeout(() => {
      this.preventHorizontalScroll();
    }, 0);

    setTimeout(() => {
      this.preventHorizontalScroll();
    }, 100);

    setTimeout(() => {
      this.preventHorizontalScroll();
    }, 500);
  }

  @HostListener('window:resize')
  onResize() {
    this.preventHorizontalScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.preventHorizontalScroll();
  }

  @HostListener('window:load')
  onLoad() {
    this.preventHorizontalScroll();
  }

  private preventHorizontalScroll() {
    // Asegurar que no haya scroll horizontal
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.width = '100%';
    document.body.style.width = '100%';

    // Si hay scroll horizontal, resetear la posición
    if (window.scrollX !== 0) {
      window.scrollTo(0, window.scrollY);
    }
  }
}
