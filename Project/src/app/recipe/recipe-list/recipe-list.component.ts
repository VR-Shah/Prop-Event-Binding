import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeServiceService } from 'src/app/recipe-service.service';
import { Ingredient } from 'src/app/shopping-list/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[]  = [
    // new Recipe('Burger','../assets/Images/download.png','Burger is my faviourite',
    // [
    //   new Ingredient('Meat',1),
    //   new Ingredient('potatoes',2)
    // ]),

    // new Recipe('Potato','../assets/Images/download.png','Burger is my faviourite',
    // [
    //   new Ingredient('Meat',1),
    //   new Ingredient('potatoes',2)
    // ])
  ];

  constructor(private recipeService:RecipeServiceService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  // selectedRecipe(recipe:Recipe){
  //   this.recipeSelected.emit(recipe);
  // }
}
