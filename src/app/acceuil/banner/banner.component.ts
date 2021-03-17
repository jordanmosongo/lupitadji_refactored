import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  image_barner = "assets/images-appli/15.jpg";
  hoverState = false;
  constructor() { }

  ngOnInit(): void {
  }
  onHover(){
    this.hoverState = !this.hoverState;
  }
  onLeave(){
    this.hoverState = !this.hoverState;
  }


}
