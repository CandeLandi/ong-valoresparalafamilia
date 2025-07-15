import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HistorySectionComponent } from './components/history-section/history-section.component';
import { ValuesSectionComponent } from './components/values-section/values-section.component';
import { EventsSectionComponent } from './components/events-section/events-section.component';
import { CommunitySectionComponent } from './components/community-section/community-section.component';
import { PrinciplesSectionComponent } from './components/principles-section/principles-section.component';
import { DonationSectionComponent } from './components/donation-section/donation-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { PreventionSectionComponent } from './components/prevention-section/prevention-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    HistorySectionComponent,
    ValuesSectionComponent,
    EventsSectionComponent,
    CommunitySectionComponent,
    PrinciplesSectionComponent,
    DonationSectionComponent,
    ContactSectionComponent,
    PreventionSectionComponent,
    FooterSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'ONG Valores para la Familia - Prevención de Abuso Sexual Infantil';
}
