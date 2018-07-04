import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    public recipes: Recipe[];

    @Output()
    private recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipeService) {}

    ngOnInit() {
        this.recipes = this.recipeService.recipes;
    }

    /**
     * onSelect
     */
    public onSelect(recipeElement: Recipe): void {
        this.recipeSelected.emit(recipeElement);
    }
}
