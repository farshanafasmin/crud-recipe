import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { SingleviewComponent } from './singleview/singleview.component';

const routes: Routes = [
  { path: '', component: ViewRecipeComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'edit-recipe/:id', component: EditRecipeComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'view-recipe', component: RecipeViewComponent },
  { path: 'view-recipe/single/:id', component: SingleviewComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
