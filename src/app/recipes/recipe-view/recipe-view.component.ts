import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeserviceService } from '../recipeService/recipeservice.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  recipeList: any = [];
  recipeName: string = '';
  likeStatus: { [key: number]: boolean } = {}; // Object to store like status for each recipe

  constructor(private router: Router, private route: ActivatedRoute, private rs: RecipeserviceService) { }

  ngOnInit(): void {
    this.getRecipe();
    const savedLikeStatus = JSON.parse(localStorage.getItem('recipeLikeStatus') || '{}');
    Object.assign(this.likeStatus, savedLikeStatus);
  }

  toggleLike(recipeId: number) {
    // Toggle like status
    this.likeStatus[recipeId] = !this.likeStatus[recipeId];
    // Save like status to local storage
    localStorage.setItem('recipeLikeStatus', JSON.stringify(this.likeStatus));
}
  getRecipe() {
    this.rs.getRecipe().subscribe((data: any) => {
      this.recipeList = data.map((recipe: any) => {
        const id = recipe.id;
        this.likeStatus[id] = recipe.isLikedByCurrentUser || false; // Initialize like status for each recipe
        return {
          id: id,
          name: recipe.name,
          ingredients: recipe.ingredients.split(','), 
          preparation: recipe.preparation.split(','),
          image:recipe.image
        };
      });
    });
  }

  loadLikeStatus() {
    const savedLikeStatus = JSON.parse(localStorage.getItem('recipeLikeStatus') || '{}');
    Object.assign(this.likeStatus, savedLikeStatus);
  }

  saveLikeStatus() {
    localStorage.setItem('recipeLikeStatus', JSON.stringify(this.likeStatus));
  }

  logout() {
    localStorage.removeItem("Username");
    // Clear like status from local storage on logout
    localStorage.removeItem("recipeLikeStatus");
    this.router.navigateByUrl("");
  }
}
