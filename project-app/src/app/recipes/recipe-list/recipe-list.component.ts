import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    public recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://edge.alluremedia.com.au/m/k/2016/08/passintotheiris.jpg'
        ),
        new Recipe(
            'Another Test Recipe',
            'This is simply the second test',
            'https://gamegator.net/thumbnails/blog-overwatch-brigitte-big.jpg'
        )
    ];

    @Output()
    private recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    constructor() {}

    ngOnInit() {}

    /**
     * onSelect
     */
    public onSelect(recipeElement: Recipe): void {
        this.recipeSelected.emit(recipeElement);
    }
}
