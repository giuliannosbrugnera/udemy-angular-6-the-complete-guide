import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    public ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10)
    ];

    constructor() {}

    ngOnInit() {}

    /**
     * onIngredientAdded()
     */
    public onIngredientAdded(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
    }
}
