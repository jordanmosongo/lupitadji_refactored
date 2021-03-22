import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../frontservices/service.service';
declare var $ : any;
declare var M : any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations : [
    trigger('header', [
      state('not-connected', style({
        'background-color' : 'red !important'
      })),
      state('connected', style({
        'background-color' : '#006674',
        'color' : '#ffffff'
      }))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  logo = "assets/images-appli/health.png";
  loginForm : any;
  signupForm : any;
  connectedState = false;
  connectedLook = 'not-connected';

  constructor(private router : Router,
              private route : ActivatedRoute,
              private serviceService : ServiceService
              ) { 
      if(this.serviceService) {
        this.serviceService.connectedState.subscribe(
          (val : boolean) => {
            this.connectedState = val;
            this.connectedLook = 'connected';
          },
          (error : any) => console.log(error)
        );
      }
           
  }

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
    this.closeModal();
  }

  onCreate(){
    console.log(this.signupForm.value);
    this.closeModal();
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

  onLogin(){
    if(this.loginForm.get('email').value == 'hopital@gmail.com' 
      && this.loginForm.get('password').value == '1234') {
        location.replace('/hopital');
    }else if(this.loginForm.get('email').value == 'admin@gmail.com' &&
            this.loginForm.get('password').value == '0000') {
            location.replace('/admin');        
    } else {
      alert("L'email ou le password est incorrect");
    }
  }

  onLogout(){
    location.replace('/');
  }


}
