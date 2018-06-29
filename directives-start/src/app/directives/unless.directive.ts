import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    // Setter of the property. A method that gets executed whenever this property changes
    @Input() set appUnless(condition: boolean) {
        if (condition) {
            // Do not display anything
            this.viewContainerRef.clear();
        } else {
            // Display it
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}
}
