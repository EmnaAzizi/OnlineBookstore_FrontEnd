import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { IProduct } from '../product/produit';
import { ShopcartprodService } from '../shopcartprod.service';
import { IShop } from './shop';
import { GeneralUserService } from '../general-user.service';
import { ShopprodService } from '../shopprod.service';
import { ShopProds } from './ShopProds';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  idprod:number;
  produits :IProduct[];
  product:IProduct;
  login:string="";
 prodshop :IProduct[];
  Shopcarts:IShop[]=[];
  checkout :number ;
  elementshop:IShop[];
  nombre:number;
  errormessage:string=""

  a:any;
  constructor(private _route:ActivatedRoute,private _router:Router,
    private general : GeneralUserService,private _productServic:ProductdataService,
    private shoprodS :ShopcartprodService)
  {   }
 
  Myspan(){
    
   this._router.navigate(['/']);}
   delete (x: number,y :string)
   { 
    let i :number=0;
     for (let product of this.shoprodS.shopc)
     { 
        if ((y==product.login)&& (product.idpr==x ))
         {this.shoprodS.shopc.splice(i,1);
         }
     i=i+1;
     }
   
     this.prodshop = this.findsh(this.shoprodS.shopc);
     this.general.cartprod=this.prodshop.length;
     this.checkout=this.check(this.prodshop);
    
   }  
     
find(id:number,P:IProduct[],S:IShop[]):IProduct[]{

for (let  x  of this.Shopcarts)
{ console.log("this is shopcart affichage"+ x.login +"*****"+x.idpr)}

let x :IProduct;
let tab :IProduct []=[];
let nombre= S.length+1;
let element :IShop={"id":1,"login":"emna","idpr":1}
element.id=nombre;
element.login=this.login;
element.idpr=this.idprod;

x=this.findpr(id,P);
console.log("XXXXX **************"+x.productName);
tab=this.findsh(this.shoprodS.shopc);
this.shoprodS.shopc.push(element);
tab.push(x);
console.log("tab lenght **************"+tab.length);
//this.checkout=this.check(tab);
 this.general.cartprod=tab.length;

return tab ; 
 }

findpr (id:number,P:IProduct[]) :IProduct{
  for (let product of P )
   {
      if (product.idpr==id )
      { 
        return product;
      }
   }
}

findsh (P:IShop[]) :IProduct[]{
  
  let x:IProduct;
  let tab : IProduct[]=[]
  for (let shop of P )

   { 
    if (shop.login==this.general.login)
     { 
       x=this.findpr(shop.idpr,this.produits)
    
      tab.push(x);
      
     }
   }
return tab ;
  }

  check(P:IProduct[]):number {
    let x: number=0 ; 
   for (let a of P)
   { x=x+a.price;}
   return x
   
   }
  ngOnInit() {

    console.log("Logging the route : " + JSON.stringify(this._route.snapshot.params));
    this.idprod = +this._route.snapshot.params['id'];
    this.login=this._route.snapshot.params['login'];
    
    this.Shopcarts=this.shoprodS.getshop();
     this._productServic.getProducts()
      .subscribe(
      productss => {
      this.produits=productss;
      this.prodshop = this.find(this.idprod,this.produits,this.Shopcarts)});}
}
