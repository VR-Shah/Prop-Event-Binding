import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponentComponent } from './recipe/recipe-start-component/recipe-start-component.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path:'',redirectTo:'/recipe',pathMatch:'full'},
  { path:'recipe',component:RecipeComponent,children:[
    { path:'',component:RecipeStartComponentComponent},
    { path:':id',component:RecipeDetailComponent},
    { path:':id/edit',component:RecipeEditComponent},
    { path:'new',component:RecipeEditComponent},
  ]},
  { path:'shopping',component:ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
