import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { fadeInSide } from '../../animations/fade-in-side.animation';

@Component({
  selector: 'app-events-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './events-section.component.html',
  styleUrls: [],
  animations: [fadeInSide]
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
    { src: 'assets/images/talleres/campana2.jpeg', alt: 'Campaña de prevención 2' },
    { src: 'assets/images/talleres/conferencia.jpeg', alt: 'Conferencia' },
    { src: 'assets/images/talleres/ninos.jpeg', alt: 'Taller con niños' },
    { src: 'assets/images/talleres/reunion.jpeg', alt: 'Reunión de equipo' },
    { src: 'assets/images/talleres/taller-aire.jpeg', alt: 'Taller al aire libre' },
    { src: 'assets/images/talleres/taller.jpeg', alt: 'Taller educativo' },
    { src: 'assets/images/talleres/brochure.jpeg', alt: 'Brochure institucional' },
    { src: 'assets/images/talleres/childs.jpeg', alt: 'Niños participando' },
    { src: 'assets/images/talleres/sign.jpeg', alt: 'Cartel de prevención' },
    { src: 'assets/images/talleres/work.jpeg', alt: 'Trabajo en equipo' }
  ];

  campaignCards = [
    {
      icon: 'heart',
      title: 'DISFRUTA',
      description: 'Actividades lúdicas y educativas'
    },
    {
      icon: 'message-square',
      title: 'CONVERSA',
      description: 'Diálogo abierto y confianza'
    },
    {
      icon: 'book-open',
      title: 'APRENDE',
      description: 'Herramientas de autoprotección'
    },
    {
      icon: 'users',
      title: 'COMPARTE',
      description: 'Difunde el mensaje de prevención'
    }
  ];

  currentImage = 0;
  intervalId: any;

  visibleCount = 3;
  partialVisible = 1;

  get visibleImages() {
    const total = this.galleryImages.length;
    const result = [];
    for (let i = -this.partialVisible; i < this.visibleCount + this.partialVisible; i++) {
      let idx = (this.currentImage + i + total) % total;
      result.push({ ...this.galleryImages[idx], partial: i < 0 || i >= this.visibleCount });
    }
    return result;
  }

  get carouselIndicators() {
    return Array(Math.ceil(this.galleryImages.length / 4));
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 2000);
  }

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.galleryImages.length;
  }

  prevImage() {
    this.currentImage = (this.currentImage - 1 + this.galleryImages.length) % this.galleryImages.length;
  }

  goToImage(index: number) {
    this.currentImage = index;
  }
}
