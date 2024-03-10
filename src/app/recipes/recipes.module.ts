import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { SearchPipe } from './recipepipe/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { SingleviewComponent } from './singleview/singleview.component';


@NgModule({
  declarations: [
    RecipesComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    ViewRecipeComponent,
    SearchPipe,
    RecipeViewComponent,
    SingleviewComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecipesModule { }
