import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInSide } from '../../animations/fade-in-side.animation';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-history-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './history-section.component.html',
  styleUrls: ['./history-section.component.scss'],
  animations: [fadeInSide]
})
export class HistorySectionComponent {}
