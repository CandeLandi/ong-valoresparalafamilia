import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { fadeInSide } from '../../animations/fade-in-side.animation';

@Component({
  selector: 'app-principles-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './principles-section.component.html',
  styleUrls: [],
  animations: [fadeInSide]
})
export class PrinciplesSectionComponent {
  principles = [
    {
      title: 'No a los pactos de silencio',
      description: 'Promovemos la comunicación abierta y eliminamos el miedo a hablar',
      icon: 'message-square'
    },
    {
      title: 'Tipos de secretos',
      description: 'Enseñamos a distinguir entre secretos buenos y secretos que pueden hacer daño',
      icon: 'alert-triangle'
    },
    {
      title: 'Aprender a identificar emociones',
      description: 'Desarrollamos la inteligencia emocional para reconocer sentimientos propios y ajenos',
      icon: 'heart'
    },
    {
      title: 'Conocer el propio cuerpo',
      description: 'Educación sobre anatomía y límites corporales apropiados para cada edad',
      icon: 'shield'
    },
    {
      title: 'Respetar el cuerpo de los demás',
      description: 'Inculcamos el respeto por los límites y la autonomía corporal de otros',
      icon: 'users'
    },
    {
      title: 'Brindar confianza absoluta',
      description: 'Creamos espacios seguros donde los niños se sientan escuchados y protegidos',
      icon: 'hand-heart'
    },
    {
      title: 'Aprender a decir NO',
      description: 'Empoderamos a los niños para que puedan rechazar situaciones incómodas',
      icon: 'check-circle-2'
    },
    {
      title: 'Cuidado con las redes e internet',
      description: 'Educación sobre seguridad digital y prevención de riesgos online',
      icon: 'book-open'
    }
  ];
}
