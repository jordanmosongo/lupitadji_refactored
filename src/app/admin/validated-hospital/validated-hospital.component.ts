import { Component, OnInit } from '@angular/core';
import { Hopital } from 'src/app/models/hopital';

@Component({
  selector: 'app-validated-hospital',
  templateUrl: './validated-hospital.component.html',
  styleUrls: ['./validated-hospital.component.css']
})
export class ValidatedHospitalComponent implements OnInit {

  hopitaux : Hopital[] = [

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
