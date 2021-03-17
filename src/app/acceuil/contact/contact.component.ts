import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact_image = "assets/images-appli/11.png";
  contact_form : any;
  constructor() { }

  ngOnInit(): void {
    this.contact_form = new FormGroup({
      'fullname' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.email),
      'phone' : new FormControl(null, Validators.required),
      'message' : new FormControl(null, Validators.required)
    });
  }

  onSend() {
    console.log(this.contact_form);
  }

}
