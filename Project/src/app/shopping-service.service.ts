import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './shopping-list/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {
  ingrediedntAdd = new EventEmitter<Ingredient[]>();

  ingredient:Ingredient[] =[
    new Ingredient('Tomato',20),
    new Ingredient('Potatoes',30)
  ]
  constructor() { }

  getIngredient(ingredient:Ingredient){
    return this.ingredient.slice();
  }

  addIngredeent(ingredient:Ingredient){
    this.ingredient.push(ingredient);
    this.ingrediedntAdd.emit(this.ingredient.slice());
  }
}
