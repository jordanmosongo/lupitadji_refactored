import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../frontservices/service.service';
@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.css']
})
export class HopitalComponent implements OnInit {
  constructor(private serviceService : ServiceService) {
    this.serviceService.connectedState.emit(true);
   }

  ngOnInit(): void {
  
  }

}
