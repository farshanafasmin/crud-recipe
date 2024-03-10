import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { RecipeserviceService } from '../recipes/recipeService/recipeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  constructor(private fb:FormBuilder, private rs:RecipeserviceService, private route:Router){}
  ngOnInit(): void {
    
  }
  userModel = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
    mobile: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]]
  });

  addUser() {
    if (this.userModel.valid) {
      var path = this.userModel.value;
      var name = path.name;
      var email = path.email;
      var mobile = path.mobile;

      this.rs.addUser({ id: "", name: name, email: email, mobile: mobile })
        .subscribe((response: any) => {
          alert(`${response.name} details added`);
          this.route.navigateByUrl("/recipes");
          this.userModel.reset();
        });
    } else {
      alert('Invalid form');
    }
  }
}
