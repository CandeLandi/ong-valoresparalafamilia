import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationType: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' = 'fadeUp';
  @Input() delay: number = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setInitialStyle();

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.animateIn();
          }, this.delay);
          this.observer.disconnect();
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.observer.observe(this.el.nativeElement);
  }

  private setInitialStyle() {
    const transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    this.renderer.setStyle(this.el.nativeElement, 'transition', transition);
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');

    switch (this.animationType) {
      case 'fadeUp':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(30px)');
        break;
      case 'fadeLeft':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-50px)');
        break;
      case 'fadeRight':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(50px)');
        break;
      case 'scale':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(0.8)');
        break;
    }
  }

  private animateIn() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');

    switch (this.animationType) {
      case 'fadeUp':
      case 'fadeLeft':
      case 'fadeRight':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0, 0)');
        break;
      case 'scale':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
        break;
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
