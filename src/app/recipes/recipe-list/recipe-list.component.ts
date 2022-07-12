import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Receita Teste',
      'Descrição da receita teste',
      'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg'
    ),
    new Recipe(
      '123',
      '456',
      'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
