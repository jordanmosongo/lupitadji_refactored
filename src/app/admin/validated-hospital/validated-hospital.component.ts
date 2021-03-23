import { Component, OnInit } from '@angular/core';
import { Hopital } from 'src/app/models/hopital';

@Component({
  selector: 'app-validated-hospital',
  templateUrl: './validated-hospital.component.html',
  styleUrls: ['./validated-hospital.component.css']
})
export class ValidatedHospitalComponent implements OnInit {

  hopitaux : Hopital[] = [
    new Hopital('Akram', 'OO1/AB'),
    new Hopital('Mutombo dikembe', 'OO1/AB'),
    new Hopital('monkole', 'OO1/AB'),
    new Hopital('Hj Hospital', 'OO1/AB'),
    new Hopital('Cinquantenaire', 'OO1/AB')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
