import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  Myspan1(){
    var login = document.getElementById('login');
    login.style.display = "none";
  
  }
  myshop(){
    var login = document.getElementById('login');
    var shop = document.getElementById('shopcart');
    login.style.display = "none";
    shop.style.display = "block";
  }
  ngOnInit() {
  }

}
