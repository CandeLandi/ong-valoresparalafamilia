import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact-section.component.html',
  styleUrls: []
})
export class ContactSectionComponent {}
