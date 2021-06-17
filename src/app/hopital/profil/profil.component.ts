import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  identiteForm : any;
  adresseForm : any;
  contactForm: any;
  latitude = 4.1888;
  longitude = -15.1999990009;
  marker : any;
  constructor() { }

  ngOnInit(): void {
    this.identiteForm = new FormGroup({
      'nom' : new FormControl("Akram", Validators.required),
      'matricule' : new FormControl("001/AB", Validators.required),  
      'description' : new FormControl(null, Validators.required),  
      'logo' : new FormControl(null)  
    });
    this.adresseForm = new FormGroup({
      'avenue' : new FormControl("Basoko", Validators.required),
      'numero' : new FormControl(15, Validators.required),
      'commune' : new FormControl("Matete", Validators.required),
      'quartier' : new FormControl("keke", Validators.required)
    });
    this.contactForm = new FormGroup({
      'phone' : new FormControl("089 454 33 453"),
      'email' : new FormControl("hopital@hmail.com"),
      'whatsapp' : new FormControl('089 67 89 009'),
      'facebook' : new FormControl("lien facebook"),
      'siteWeb' : new FormControl('Lien linkedIn')
    });
  }

  localisation(){
    if(!navigator.geolocation) {
      alert("Désolé, votre navigateur ne nous permet pas de détecter votre position");
    }
    const myMap = L.map('mapid').setView([this.latitude, this.longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(myMap);

     this.marker = L.marker([this.latitude, this.longitude]).addTo(myMap);
     this.marker.bindPopup("<strong class = 'modal-pop'>Votre position</strong>").openPopup();
  }

}
