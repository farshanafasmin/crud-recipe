import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../Adminservice/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any = ""
  users:any=[]

  constructor(private fb: FormBuilder, private route: Router, private as: ServiceService) { }


  loginFormModel = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })



  ngOnInit(): void {

  }
  login() {
    var path = this.loginFormModel.value
    var email = path.email
    var pswd = path.pswd
    this.email = email

    if (this.loginFormModel.valid) {

      this.as.loginApi().subscribe((data: any) => {
        var adminPassword = data[0].password
        var adminEmail = data[0].email
        console.log(adminEmail);
        console.log(adminPassword);
        if (email == adminEmail) {
          if (pswd == adminPassword) {
            var index = this.email.indexOf('@')
            localStorage.setItem("Username", this.email.slice(0, index))
            this.route.navigateByUrl('recipes')
          }
          else {
            alert('Incorrect password for admin')
          }
        }
        else {
          alert('Incorrect email for admin')
        }
      }
      
      )
    }
    else {
      alert('invalid form')
    }
  }


  loginUser() {
    const { email, pswd } = this.loginFormModel.value;
  
    if (email && pswd) { // Check if email and password are not null or undefined
      if (this.loginFormModel.valid) {
        this.as.userLogin(email, pswd).subscribe((data: any) => {
          if (data.length>0) {
            const user = data.find((user: any) => user.email === email && user.mobile === pswd);
            this.route.navigateByUrl('recipes/view-recipe');
            
          } else {
            alert('User not found');
          }
        }, (error) => {
          console.error('Error:', error);
          alert('An error occurred while logging in');
        });
      } else {
        alert('Invalid form');
      }
    } else {
      alert('Email or password is empty');
    }
  }
  
  
}








