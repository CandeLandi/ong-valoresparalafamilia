import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { fadeInSide } from '../../animations/fade-in-side.animation';

@Component({
  selector: 'app-values-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './values-section.component.html',
  animations: [fadeInSide]
})
export class ValuesSectionComponent {
  values = [
    {
      title: 'FOMENTAR RELACIONES SALUDABLES',
      description: 'Promover relaciones basadas en el respeto mutuo, la comunicación abierta y la igualdad puede ayudar a prevenir el abuso en todas sus formas, ya sea en relaciones de pareja, amistades, familiares o laborales.',
      icon: 'message-square'
    },
    {
      title: 'PROMOVER EL RESPETO Y LA EMPATÍA',
      description: 'Fomentar el respeto mutuo y la empatía hacia los demás puede reducir la probabilidad de comportamientos abusivos. Enseñamos a valorar y comprender las experiencias y sentimientos de los otros.',
      icon: 'heart'
    },
    {
      title: 'ESTABLECER LÍMITES CLAROS',
      description: 'Tener límites claros en las relaciones interpersonales y establecer expectativas de comportamiento puede ayudar a prevenir el abuso. Esto incluye establecer límites personales y respetar los límites de los demás.',
      icon: 'shield'
    },
    {
      title: 'EDUCACIÓN Y CONCIENCIACIÓN',
      description: 'Proporcionar educación para que conozcan el abuso, cómo reconocerlo y cómo responder puede empoderar a las personas a identificar situaciones de riesgo y actuar de manera preventiva ante señales de alerta.',
      icon: 'book-open'
    },
    {
      title: 'DENUNCIAR EL ABUSO',
      description: 'Promover la importancia de denunciar situaciones de abuso y proporcionar información sobre los recursos disponibles para hacerlo. Trabajamos para eliminar el estigma y el miedo asociados con la denuncia.',
      icon: 'alert-triangle'
    },
    {
      title: 'APOYAR A LAS VÍCTIMAS',
      description: 'Proporcionar apoyo y recursos a las víctimas de abuso es crucial para ayudarles a recuperarse y reconstruir sus vidas. Esto puede incluir acceso a servicios de asesoramiento, refugios seguros, atención médica y asistencia legal.',
      icon: 'hand-heart'
    }
  ];
}
