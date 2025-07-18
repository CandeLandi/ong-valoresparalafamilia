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
    { src: 'assets/images/talleres/conferencia.jpeg', alt: 'Conferencia' },
    { src: 'assets/images/talleres/ninos.jpeg', alt: 'Taller con niños' },
    { src: 'assets/images/talleres/reunion.jpeg', alt: 'Reunión de equipo' },
    { src: 'assets/images/talleres/taller-aire.jpeg', alt: 'Taller al aire libre' },
    { src: 'assets/images/talleres/taller.jpeg', alt: 'Taller educativo' },
    { src: 'assets/images/talleres/brochure.jpeg', alt: 'Folletos institucionales' },
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
  isTransitioning = false;

  visibleCount = 5; // Cambié de 3 a 5 para mostrar todas las imágenes claras
  partialVisible = 0; // Cambié de 1 a 0 para no mostrar imágenes borrosas

  get visibleImages() {
    const total = this.galleryImages.length;
    const result = [];
    for (let i = 0; i < this.visibleCount; i++) {
      let idx = (this.currentImage + i) % total;
      result.push({ ...this.galleryImages[idx], partial: false }); // Todas las imágenes se muestran claras
    }
    return result;
  }

  get carouselIndicators() {
    return Array(Math.ceil(this.galleryImages.length / this.visibleCount));
  }

  // Método para trackear imágenes y optimizar rendimiento
  trackByImage(index: number, item: any): string {
    return item.src;
  }

  // Método para obtener clases CSS de las imágenes
  getImageClasses(index: number): string {
    return 'opacity-100 scale-100'; // Todas las imágenes se muestran claras
  }

  // Método para obtener transformaciones de las imágenes
  getImageTransform(index: number): string {
    return 'scale(1)'; // Todas las imágenes en escala normal
  }

  // Método para obtener z-index de las imágenes
  getImageZIndex(index: number): number {
    return 10; // Todas las imágenes con el mismo z-index
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      if (!this.isTransitioning) {
        this.nextImage();
      }
    }, 4000); // Aumenté el tiempo entre transiciones
  }

  nextImage() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentImage = (this.currentImage + 1) % this.galleryImages.length;

    // Resetear el estado de transición después de la animación
    setTimeout(() => {
      this.isTransitioning = false;
    }, 700);
  }

  prevImage() {
    if (this.isTransitioning || this.currentImage === 0) return;

    this.isTransitioning = true;
    this.currentImage = (this.currentImage - 1 + this.galleryImages.length) % this.galleryImages.length;

    // Resetear el estado de transición después de la animación
    setTimeout(() => {
      this.isTransitioning = false;
    }, 700);
  }

  goToImage(index: number) {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentImage = index;

    // Resetear el estado de transición después de la animación
    setTimeout(() => {
      this.isTransitioning = false;
    }, 700);
  }
}
