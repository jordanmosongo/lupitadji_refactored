import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  image_barner = "assets/images-appli/stetoscope.jpeg";
  hoverState = false;
  constructor() { }

  ngOnInit(): void {
    $('.modal').modal();
  }
  onHover(){
    this.hoverState = !this.hoverState;
  }
  onLeave(){
    this.hoverState = !this.hoverState;
  }


}
