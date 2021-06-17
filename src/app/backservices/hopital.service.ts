import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  constructor(private http : HttpClient) { }

  saveHospital(hopital : any) {
    return this.http.post('http://localhost:3000/hopital/save', hopital);
  }
}
