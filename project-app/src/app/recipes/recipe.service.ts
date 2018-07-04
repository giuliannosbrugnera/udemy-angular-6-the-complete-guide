import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
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

  // Return a new array which is an exact copy of this array
  // This prevents changes made outside from affecting the array instantiated here
  get recipes(): Recipe[] {
    return this._recipes.slice();
  }
}
