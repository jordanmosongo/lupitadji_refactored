import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(authData : any) {
    return this.http.post('http://localhost:3000/auth/login', authData, {
      headers : {
        'Content-Type' : 'application/json' 
      }
    })
  }
}
