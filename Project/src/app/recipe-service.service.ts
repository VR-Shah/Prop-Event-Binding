import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { Ingredient } from './shopping-list/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor() { }
  
  onSelectedRecipe = new EventEmitter<Recipe>();
  
  recipes: Recipe[]  = [
  //   new Recipe('Burger',
  //   '../assets/Images/download.png',
  //   'Burger is my faviourite',
  //   [ 
  //   new Ingredient('Meat',1),
  //     new Ingredient('potato',2)
  // ])
  new Recipe('Burger','../assets/Images/download.png','Burger is my faviourite',
    [
      new Ingredient('Meat',1),
      new Ingredient('potatoes',2)
    ]),

    new Recipe('Potato','../assets/Images/download.png','Burger is my faviourite',
    [
      new Ingredient('Meat',1),
      new Ingredient('potatoes',2)
    ])
  ];
  

  getRecipe(){
    return this.recipes.slice();
  }

  getRecipeById(id:any){
    console.log(">>"+this.recipes[id]);
    return this.recipes[id];
  }
}
