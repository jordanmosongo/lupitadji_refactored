import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $ : any;
declare var M : any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  serviceForm: any;
  editing = false;
  
  constructor() { }

  services = [
    'Matérinité',
    'Ophtalmologie',
    'Dentisterie',
    'Gynécologie',
    'Radiologie',
    'Pédiatrie'
  ];

  ngOnInit(): void {
    this.withModal();
    
   if(this.editing == false) {
    this.serviceForm = new FormGroup({
      'nom' : new FormControl(null, Validators.required),
      'description' : new FormControl(null, Validators.required)
    });
   } else {
    this.serviceForm = new FormGroup({
      'nom' : new FormControl("Valeur", Validators.required),
      'description' : new FormControl("Valeur", Validators.required)
    });
   }
  }

  onSend(){
    console.log(this.serviceForm.value);
    this.serviceForm.reset();
  }
  withModal(){
    $('.modal').modal();
    $('.tabs').tabs();
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      dismissible : false
    });
  }
  onClose(){
    this.serviceForm.reset();
    this.editing = false;
  }
  onUpdate(){
    this.editing = true;
  }
}
