import { Component, OnInit, NgZone } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { IProduct } from './produit';
import { ShopcartprodService } from '../shopcartprod.service';
import { Router } from '@angular/router';
import { GeneralUserService } from '../general-user.service';
import { LoginpersService } from '../loginpers.service';
import { IPersonne } from '../login/personne';
import {  Personnne } from '../login/personnee';
import { IAuthors } from './Authors';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  personnne:Personnne[];
products:IProduct[]=[];
produits:IProduct[];
produitZoom :IProduct;
listFilter:string = '';
CatFilter:string ='';
errormessage:string ;
cartnumber: number;
log:string='';
pass:string ='';
welcome:string=""; 
nb:number ; 
personnes :IPersonne[];
img :string="https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png" ;
authors:IAuthors[]=[];
 

  constructor(private _productService:ProductdataService,
    private _productpers:LoginpersService ,private _router:Router,private general:GeneralUserService ,
    private zone: NgZone ) { 
      
    
  }







check(x:number){

  
  this.general.id=x;
  console.log("general parametre "+ 
  this.general.login +"log "+ this.general.password +"pass "+ this.general.exist +"exist");
 
  if ((this.general.login!="" )&&(this.general.password!=""))
  {this.general.exist=true;
  console.log("in the if " + this.general.exist)
  this.general.canActivate();
  }
  else 
  {this.general.exist=false;
  this.general.canActivate(); 
  }

}

  filter(x:string)  {
   
    this._productService._productUrl="http://localhost:3980/api/product/"+x;
    
    this._productService.getProducts()
    .subscribe(productss => this.products=productss ,error=>this.errormessage= <any>error);
   
    this.listFilter="";
    x='';

}
 
change()
{this.img=this.general.img;
  this.welcome=this.general.welcome;
  
  this.cartnumber=this.general.cartprod;
  
}
find ( a:IProduct[],b:IAuthors[]):IProduct[]

{   
for (let x of b)
{
  for (let y of a)

  {
     if (y.authorname==x.name)
    { 
      y.descriptionA=x.descriptionA; 
      y.imageA=x.image;
    }
  
  }
}
return a; 
}
  ngOnInit() {
    this.img=this.general.img;
    this.welcome=this.general.welcome;
    this.cartnumber=this.general.cartprod;

    this._productService.getAuthors()
    .subscribe(auth => this.authors=auth ,error=>this.errormessage= <any>error);
    
    
    this._productService.getProducts().subscribe(
   productss => {
      this.products=productss;
      this.products = this.find(this.products,this.authors)
  }
      );

    this._productpers.getPersonne()
    .subscribe(
    productss => {
    this.personnes=productss});
  }

}
