import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public selectedFeature: string;

    /**
     * onFeatureSelected
     */
    public onFeatureSelected(feature: string) {
        this.selectedFeature = feature;
    }
}
