import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {
  latitude : any;
  longitude : any;
  marker : any;
  constructor() { }

  ngOnInit(): void {
    if(!navigator.geolocation) {
      alert("Désolé, votre navigateur ne nous permet pas de détecter votre position");
    }
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      const myMap = L.map('mapid').setView([this.latitude, this.longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(myMap);

     this.marker = L.marker([this.latitude, this.longitude]).addTo(myMap);
     this.marker.bindPopup("<strong class = 'modal-pop'>Votre position</strong>").openPopup();
    });    
    
  }
 
}
