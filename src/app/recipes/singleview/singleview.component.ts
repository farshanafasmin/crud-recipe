import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeserviceService } from '../recipeService/recipeservice.service';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {
  singleRecipe: any= []; // Change type to array
  recipeName: string = '';
  id:any='';
  likeStatus: { [key: number]: boolean } = {};

  constructor(private route: ActivatedRoute, private rs: RecipeserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:any) => {
      this.id = data.id;
      this.rs.getRecipe().subscribe((response: any) => {
        this.singleRecipe = response.filter((item: any) => item.id == this.id); // Use filter instead of find
      });
    });
  }
}
