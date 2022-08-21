import { Component, Input, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/recipe-service.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe |any;
  @Input() index:number |any;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService:RecipeServiceService) { }

  ngOnInit(): void {
  }

  onRecipeSelected(){
    this.recipeService.onSelectedRecipe.emit(this.recipe);
    // this.recipeSelected.emit();
  }
}
