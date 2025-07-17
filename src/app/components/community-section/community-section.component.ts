import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-community-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  templateUrl: './community-section.component.html',
  styleUrls: []
})
export class CommunitySectionComponent {
  campaignCards = [
    {
      icon: 'heart',
      title: 'DISFRUTA',
      description: 'Actividades lúdicas y educativas'
    },
    {
      icon: 'message-square',
      title: 'CONVERSA',
      description: 'Diálogo abierto y confianza'
    },
    {
      icon: 'book-open',
      title: 'APRENDE',
      description: 'Herramientas de autoprotección'
    },
    {
      icon: 'users',
      title: 'COMPARTE',
      description: 'Difunde el mensaje de prevención'
    }
  ];
}
