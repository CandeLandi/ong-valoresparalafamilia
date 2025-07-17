import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  templateUrl: './contact-section.component.html',
  styleUrls: []
})
export class ContactSectionComponent {}
