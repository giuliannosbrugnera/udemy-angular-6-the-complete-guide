import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    @Output()
    private featureSelected: EventEmitter<string> = new EventEmitter<string>();

    public onSelect(feature: string): void {
        this.featureSelected.emit(feature);
    }
}
