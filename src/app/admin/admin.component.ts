import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../frontservices/service.service';
declare var $ : any;
declare var M : any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private serviceService : ServiceService) {
    this.serviceService.connectedState.emit(true);
   }

  ngOnInit(): void {
    this.withModal();
  }
  withModal(){
    $('.modal').modal();
    $('.tabs').tabs();
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      dismissible : false
    });
  }
  closeModal(){
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      dismissible : false
    });
    instances.close();
  }

}
