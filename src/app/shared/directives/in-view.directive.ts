import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInView]'
})
export class InViewDirective implements OnInit, OnDestroy {
  @Input() fadeDirection: 'left' | 'right' = 'left';
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setInitialStyle();
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'in-view');
          // Trigger animation by adding a data attribute
          this.renderer.setAttribute(this.el.nativeElement, 'data-animate', 'true');
          this.observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    this.observer.observe(this.el.nativeElement);
  }

  setInitialStyle() {
    const x = this.fadeDirection === 'left' ? '-20px' : '20px';
    this.renderer.setStyle(this.el.nativeElement, '--fade-x', x);
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'max-width', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
