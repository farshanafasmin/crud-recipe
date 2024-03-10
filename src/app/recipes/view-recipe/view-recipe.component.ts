import { Component, OnInit } from '@angular/core';
import { RecipeserviceService } from '../recipeService/recipeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit{

  recipeList: any = []
  recipeName: string = '';

  constructor(private rs:RecipeserviceService, private route:Router){}

  ngOnInit(): void {
    this.getRecipe()
    
  }

  getRecipe() {
    this.rs.getRecipe().subscribe((data: any) => {
      this.recipeList = data.map((recipe: any) => {
        return {
          id: recipe.id,
          name: recipe.name,
          ingredients: recipe.ingredients.split(','), // Splitting ingredients string into an array
          preparation: recipe.preparation.split(','),
          image:recipe.image
        };
      });
      console.log(this.recipeList);
    });
  }

  removeRecipe(id:any){
   
    this.rs.deleteRecipe(id).subscribe((result:any)=>{
      console.log(result);
      
      alert(`deleted successfully`)
      this.getRecipe()
      
    })
  }

  logout(){
    localStorage.removeItem("Username")
    this.route.navigateByUrl("")
  }

}