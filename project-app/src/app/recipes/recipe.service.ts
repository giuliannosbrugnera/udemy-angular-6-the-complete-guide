import { Recipe } from './recipe.model';

export class RecipeService {
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
