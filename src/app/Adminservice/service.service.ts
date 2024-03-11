import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  base_url='https://recipe-server-tc12.onrender.com'

  constructor(private http:HttpClient) { }

  loginApi(){
    return this.http.get(`${this.base_url}/admins`)
  }


 userLogin(email: string, password: string) {
    const options = {
        params: {
            email: email,
            password: password // Here 'password' is the mobile number
        }
    };

    return this.http.get(`${this.base_url}/users`, options);
}

}
