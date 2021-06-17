import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http : HttpClient) { }

  saveCompte(compte : any) {
    return this.http.post('http://localhost:3000/compte/save', compte);
  }
  
}
