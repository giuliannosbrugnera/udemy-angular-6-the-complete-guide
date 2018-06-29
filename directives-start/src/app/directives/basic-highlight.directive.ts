import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]' // Shortcut so it doesn´t have to use square brackets on the element
})
export class BasicHighlightDirective implements OnInit {
    // Reference to the element the directive was placed on
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
