import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RecipeserviceService } from '../recipeService/recipeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(private fb:FormBuilder, private rs:RecipeserviceService,private route:Router){}
  
  ngOnInit(): void {
    
  }
  
  image:any=""

  recipeModel = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    ingredients: ['', [Validators.required, Validators.pattern('^[A-Za-z, ]+$')]],
    preparation: ['', [Validators.required, Validators.pattern('^[A-Za-z, ]+$')]],
    image:['',[Validators.required]]
  });

  getImage(event:any){

    let image=event.target.files[0]
    let fr=new FileReader()
    fr.readAsDataURL(image)

    fr.onload=(event:any)=>{
      this.image=event.target.result
      console.log(this.image);
      
    }

  }



  addRecipe() {
    if (this.recipeModel.valid) {
      var path = this.recipeModel.value;
      var name = path.name;
      var ingredients = path.ingredients;
      var preparation = path.preparation;
      var image=this.image;

      this.rs.addRecipe({ id: "", name: name, ingredients: ingredients, preparation: preparation, image:image})
        .subscribe((response: any) => {
          alert(`${response.name} details added`);
          this.route.navigateByUrl("/recipes");
          this.recipeModel.reset();
        });
    } else {
      alert('Invalid form');
    }
  }
}
