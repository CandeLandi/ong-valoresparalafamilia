import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective implements OnInit {
  @Input() threshold = 0.1;
  @Input() rootMargin = '0px';

  private observer: IntersectionObserver | null = null;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.element.nativeElement.style.opacity = '1';
          this.element.nativeElement.style.transform = 'none';
          this.observer?.unobserve(this.element.nativeElement);
        }
      },
      {
        threshold: this.threshold,
        rootMargin: this.rootMargin
      }
    );

    // Establecer estado inicial
    this.element.nativeElement.style.opacity = '0';
    this.element.nativeElement.style.transform = 'translateY(20px)';
    this.element.nativeElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
