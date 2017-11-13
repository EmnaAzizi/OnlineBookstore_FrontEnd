import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  constructor() { }
  Myspanshop(){
    var modal = document.getElementById('shopcart');
    modal.style.display = "none";
  
  }
  Mypay(){
    var shop = document.getElementById('shopcart');
    var pay = document.getElementById('pay');
    pay.style.display = "block";
    shop.style.display = "none";
  }
 
  ngOnInit() {
  }

}
