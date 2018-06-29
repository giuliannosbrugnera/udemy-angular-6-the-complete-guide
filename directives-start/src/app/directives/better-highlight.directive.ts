import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  // Arguments will bind to a private property, assigning its value
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
  }

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
    this.backgroundColor = 'orange';
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
