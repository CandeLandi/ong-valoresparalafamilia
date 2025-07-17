import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-history-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ScrollAnimationDirective],
  templateUrl: './history-section.component.html',
  styleUrls: ['./history-section.component.scss']
})
export class HistorySectionComponent {}
