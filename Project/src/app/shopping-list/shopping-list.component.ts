import { Component, OnInit } from '@angular/core';
import { ShoppingServiceService } from '../shopping-service.service';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient:Ingredient[] =[];
  
  constructor(private shoppingService:ShoppingServiceService) { 
    this.ingredient = this.shoppingService.ingredient 
  }

  ngOnInit(){
    //this will subscribe the ingredient array from shopping service
    this.shoppingService.ingrediedntAdd.subscribe((ingredient:Ingredient[]) =>{
      this.ingredient = ingredient;
    });
  }

  // onAddIngredient(ingredient:Ingredient){
  //   // this.ingredient.push(ingredient);
  //   // this.shoppingService.addIngredeent(ingredient);
  // }
}
