import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe:Recipe|any;
  
  constructor(private recipeService:RecipeServiceService) { }

  ngOnInit(): void {
    this.recipeService.onSelectedRecipe.subscribe(
      (recipe:Recipe) =>{
        this.selectedRecipe = recipe;
      }
    )
  }
  
}
