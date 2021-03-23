import { Component, OnInit } from '@angular/core';
import { Hopital } from 'src/app/models/hopital';

@Component({
  selector: 'app-non-validated-hospital',
  templateUrl: './non-validated-hospital.component.html',
  styleUrls: ['./non-validated-hospital.component.css']
})
export class NonValidatedHospitalComponent implements OnInit {
  hopitaux : Hopital[] = [
    new Hopital('Mutombo dikembe', 'OO1/AB'),
    new Hopital('Hj Hospital', 'OO1/AB'),
    new Hopital('Cinquantenaire', 'OO1/AB')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
