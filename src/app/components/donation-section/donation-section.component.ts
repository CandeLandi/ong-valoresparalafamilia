import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-donation-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './donation-section.component.html',
  styleUrls: []
})
export class DonationSectionComponent {
  donationTypes = [
    {
      icon: 'dollar-sign',
      title: 'Donación Mensual',
      description: 'Tu aporte mensual nos permite planificar a largo plazo y mantener nuestros programas activos.',
      button: 'Donar Mensualmente',
      highlight: false
    },
    {
      icon: 'heart',
      title: 'Donación Única',
      description: 'Cada donación, sin importar el monto, nos ayuda a llegar a más niños y familias con nuestros talleres.',
      button: 'Donar Ahora',
      highlight: true
    },
    {
      icon: 'users',
      title: 'Donación Corporativa',
      description: 'Involucra a tu empresa en nuestra causa y ayúdanos a expandir nuestro impacto.',
      button: 'Contactar',
      highlight: false
    }
  ];
  donationDestinations = [
    {
      icon: 'book-open',
      title: 'Materiales Educativos',
      description: 'Creación y distribución de materiales para talleres y campañas de concientización.'
    },
    {
      icon: 'map-pin',
      title: 'Expansión Geográfica',
      description: 'Llevar nuestros talleres a más ciudades y comunidades en todo el país.'
    },
    {
      icon: 'school',
      title: 'Capacitación',
      description: 'Formación de más educadores y facilitadores para nuestros programas.'
    }
  ];
}
