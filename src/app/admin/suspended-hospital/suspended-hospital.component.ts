import { Component, OnInit } from '@angular/core';
import { Hopital } from 'src/app/models/hopital';

@Component({
  selector: 'app-suspended-hospital',
  templateUrl: './suspended-hospital.component.html',
  styleUrls: ['./suspended-hospital.component.css']
})
export class SuspendedHospitalComponent implements OnInit {

  hopitaux : Hopital[] = [
    new Hopital('monkole', 'OO1/AB'),
    new Hopital('Hj Hospital', 'OO1/AB'),
    new Hopital('Cinquantenaire', 'OO1/AB')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
