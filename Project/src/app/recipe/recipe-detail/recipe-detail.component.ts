import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeServiceService } from 'src/app/recipe-service.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipes:Recipe |any;
  id:number |any;

  constructor(private recipeService:RecipeServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) =>{
        this.id = +params['id'];
        this.recipes=this.recipeService.getRecipeById(this.id);
      }
    );
  }

}
