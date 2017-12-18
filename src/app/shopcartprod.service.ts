import { Injectable } from '@angular/core';
import { IShop } from './shop-cart/shop';

@Injectable()
export class ShopcartprodService {

  
  shopc:IShop[]=[];

  constructor() { }

  getshop ():IShop[]{

    return  this.shopc;
  

}}
