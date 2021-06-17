import { Component, OnInit } from '@angular/core';
import { Hopital } from 'src/app/models/hopital';

@Component({
  selector: 'app-non-validated-hospital',
  templateUrl: './non-validated-hospital.component.html',
  styleUrls: ['./non-validated-hospital.component.css']
})
export class NonValidatedHospitalComponent implements OnInit {
  hopitaux : Hopital[] = [
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
