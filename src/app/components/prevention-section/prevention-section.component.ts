import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-prevention-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './prevention-section.component.html'
})
export class PreventionSectionComponent {
  campaignCards = [
    {
      icon: 'message-square',
      title: 'No a los pactos de silencio',
      description: ''
    },
    {
      icon: 'alert-triangle',
      title: 'Tipos de secretos',
      description: ''
    },
    {
      icon: 'heart',
      title: 'Aprender a identificar emociones',
      description: ''
    },
    {
      icon: 'shield',
      title: 'Conocer el propio cuerpo',
      description: ''
    },
    {
      icon: 'users',
      title: 'Respetar el cuerpo de los demás',
      description: ''
    },
    {
      icon: 'hand-heart',
      title: 'Brindar confianza absoluta',
      description: ''
    },
    {
      icon: 'check-circle',
      title: 'Aprender a decir NO',
      description: ''
    },
    {
      icon: 'book-open',
      title: 'Cuidado con las redes e internet',
      description: ''
    }
  ];
}
