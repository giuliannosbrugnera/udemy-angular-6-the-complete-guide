import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private _recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://edge.alluremedia.com.au/m/k/2016/08/passintotheiris.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://edge.alluremedia.com.au/m/k/2016/08/passintotheiris.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}

  public get recipes(): Recipe[] {
    return this._recipes;
  }
}
