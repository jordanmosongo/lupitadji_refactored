import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $ : any;
declare var M : any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = "assets/images-appli/health.png";
  loginForm : any;
  signupForm : any;
  constructor() { }


  ngOnInit(): void {
    this.withModal();
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required)
    });
    this.signupForm = new FormGroup({
      'matricule' : new FormControl(null, Validators.required),
      'nom' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required),
      'confirmPassword' : new FormControl(null, Validators.required)
    })

  }

  create(){
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      dismissible : false
    });
    instances.close();
  }

  onCreate(){
    console.log(this.signupForm.value);
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      dismissible : false
    });
    instances.close();
  }

  withModal(){
    $('.modal').modal();
    $('.tabs').tabs();
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
      dismissible : false
    });
  }


}
