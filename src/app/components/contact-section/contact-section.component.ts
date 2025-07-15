import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { fadeInSide } from '../../animations/fade-in-side.animation';
import { fadeInUp } from '../../animations/fade-in-up.animation';
import { scaleIn } from '../../animations/scale-in.animation';
import { InViewDirective } from '../../shared/directives/in-view.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, InViewDirective],
  templateUrl: './contact-section.component.html',
  animations: [fadeInSide, fadeInUp, scaleIn]
})
export class ContactSectionComponent {}
