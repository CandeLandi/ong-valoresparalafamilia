import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-events-section',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './events-section.component.html'
})
export class EventsSectionComponent implements OnInit, OnDestroy {
  cities = [
    'Dorrego',
    'Necochea',
    'Cipolletti',
    'Villa Pehuenia',
    'Daireaux',
    'Villalonga',
    'Mar del Plata',
    'Neuquén Capital',
    'Azul',
    'Bonifacio'
  ];

  galleryImages = [
    { src: 'assets/images/talleres/campana.jpeg', alt: 'Campaña de prevención' },
    { src: 'assets/images/talleres/conferencia.jpeg', alt: 'Conferencia' },
    { src: 'assets/images/talleres/ninos.jpeg', alt: 'Taller con niños' },
    { src: 'assets/images/talleres/reunion.jpeg', alt: 'Reunión de equipo' },
    { src: 'assets/images/talleres/taller-aire.jpeg', alt: 'Taller al aire libre' },
    { src: 'assets/images/talleres/brochure.jpeg', alt: 'Folletos institucionales' },

  ];

  showAllImages = false;
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  toggleShowAllImages() {
    this.showAllImages = !this.showAllImages;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.galleryImages.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.next();
    }, 1000);
  }
}
