import { Component, OnInit } from '@angular/core';
import { Hopital } from 'src/app/models/hopital';

@Component({
  selector: 'app-suspended-hospital',
  templateUrl: './suspended-hospital.component.html',
  styleUrls: ['./suspended-hospital.component.css']
})
export class SuspendedHospitalComponent implements OnInit {

  hopitaux : Hopital[] = [
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
