import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeserviceService {

  base_url='https://recipe-server-tc12.onrender.com'

  constructor(private http:HttpClient) { }

  // add user api

  addRecipe(bodyData:any){

    return this.http.post(`${this.base_url}/recipes`,bodyData)

  }

  
  addUser(bodyData:any){

    return this.http.post(`${this.base_url}/users`,bodyData)

  }

  getRecipe(){
    return this.http.get(`${this.base_url}/recipes`)
   
   }

   deleteRecipe(id: any){
    return this.http.delete(`${this.base_url}/recipes/${id}`);
  }
  
  getRecipeData(rid:any){
    return this.http.get(`${this.base_url}/recipes/${rid}`)
  }


  updateRecipe(id:any,bodyData:any){
    return this.http.put(`${this.base_url}/recipes/${id}`,bodyData)
  }
  
 
}
