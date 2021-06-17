import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $ : any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  image_barner = "assets/images-appli/stetoscope.jpeg";
  hoverState = false;
  searchForm : any;
  constructor() { }

  ngOnInit(): void {
    $('.modal').modal();
    this.searchForm = new FormGroup({
      searchInput : new FormControl(null, Validators.required)
    })
  }
  onHover(){
    this.hoverState = !this.hoverState;
  }
  onLeave(){
    this.hoverState = !this.hoverState;
  }
  onSearch(){
    console.log(this.searchForm.value);
  }

}
