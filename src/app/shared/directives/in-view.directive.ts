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
          this.observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    this.observer.observe(this.el.nativeElement);
  }

  setInitialStyle() {
    const x = this.fadeDirection === 'left' ? '-48px' : '48px';
    this.renderer.setStyle(this.el.nativeElement, '--fade-x', x);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
