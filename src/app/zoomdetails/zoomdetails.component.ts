import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoomdetails',
  templateUrl: './zoomdetails.component.html',
  styleUrls: ['./zoomdetails.component.css']
})
export class ZoomdetailsComponent implements OnInit {

  constructor() { }
Myspan(){
  var zoom = document.getElementById('zoom');
  zoom.style.display = "none";

}
myLogin(){
  var login = document.getElementById('login');
  var zoom = document.getElementById('zoom');
  login.style.display = "block";
  zoom.style.display = "none";
}

  ngOnInit() {
  }

}
