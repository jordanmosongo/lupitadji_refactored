import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  image_maternite = "assets/images-appli/maternite.jpg";
  services : Service[] = [
    new Service('assets/images-appli/maternite-congo.jpg', 'Maternité'),
    new Service('assets/images-appli/maternite-congo.jpg', 'Radiologie'),
    new Service('assets/images-appli/maternite-congo.jpg', 'Ophtalmologie')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
