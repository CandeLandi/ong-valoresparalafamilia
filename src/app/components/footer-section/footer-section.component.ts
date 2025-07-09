import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer-section.component.html'
})
export class FooterSectionComponent {
  year = new Date().getFullYear();
}
