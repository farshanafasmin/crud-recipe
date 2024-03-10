import { Component, OnInit } from '@angular/core';
import { RecipeserviceService } from '../recipeService/recipeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id: any;
  recipeData:any={}
  fileData:any=""

  recipeImage:any="https://i.postimg.cc/rmctTYmM/2919906.png"

  editClicked:any=false

  constructor(private ar: ActivatedRoute, private rs: RecipeserviceService, private route: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.id = data.id;
      this.rs.getRecipeData(this.id).subscribe((response: any) => {
        this.recipeData = response;
        if(this.recipeData.image){

                  this.recipeImage=this.recipeData.image
                 }
      });
    });
  }

 

  updateRecipe() {
    this.rs.updateRecipe(this.id, this.recipeData).subscribe((response: any) => {
      alert(`${response.name} updated successfully`)
      this.route.navigateByUrl("/recipes");
    });
  
  }

  getFile(event:any){

    let file=event.target.files[0]
  
    // url conversion
  
    let fr=new FileReader()
  
    // covert
  
    fr.readAsDataURL(file)
  
    // store the coverted url(onload)
  
    fr.onload=(event:any)=>{
      console.log(event.target.result);
  
      // preview
      this.recipeImage=event.target.result
      this.recipeData.image=this.recipeImage
      console.log(this.recipeData);
      
      
    }
  
  }
  editClick(){
    this.editClicked=true
  }
  
}
