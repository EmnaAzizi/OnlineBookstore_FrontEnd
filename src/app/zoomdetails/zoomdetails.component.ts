import { Component, OnInit,Input } from '@angular/core';
import { IProduct } from '../product/produit';

import {ActivatedRoute,Router} from "@angular/router";
import { ProductdataService } from '../productdata.service';
import { CommentService } from '../comment.service';
import { commentaire } from '../comment/comment';
import { GeneralUserService } from '../general-user.service';
@Component({

  templateUrl: './zoomdetails.component.html',
  styleUrls: ['./zoomdetails.component.css']
})
export class ZoomdetailsComponent implements OnInit {
  x: string="";
produitzoom:IProduct;
produits:IProduct[];
errormessage1 :string ;
currentId : number;
Comment : string="" ;


constructor(private _route:ActivatedRoute,private _router:Router,
  private _productServic:ProductdataService , private commentt: CommentService,private general : GeneralUserService)
{ 
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

Myspan(){
  
 this._router.navigate(['/']);


}

find (id:number,P:IProduct[]) :IProduct{
  console.log("+++++++DANS FIND ERROR +++++++++++++++++++++++++")
  
  for (let product of P )
   {
      if (product.idpr==id )
      { 
        return product;
      }
   }
}
add(){
  alert ('Your Comment has been added')
  let c:commentaire ;
  c={"body":"",id:0,user:""}
  c.body=this.Comment;
  c.id=this.currentId;
  c.user="";
  this.commentt.commentaire.push(c);
 
}
ngOnInit() {
    
    console.log("Logging the route : " + JSON.stringify(this._route.snapshot.params));
    this.currentId = +this._route.snapshot.params['id'];
    console.log("Logging the current ID : " + this.currentId)
     this._productServic.getProducts()
      .subscribe(
      productss => {
      this.produits=productss;
      this.produitzoom = this.find(this.currentId,this.produits)
  }
      );
      console.log("************************************************************************************")
  
}

 


  }
  /* bd : api web server 
app .NET  : controller (partie eli tchoufha el angular) , models ( classe de domaine ,)
BD : pas de create table => ensemble de classe retoune BD 7adhra geré avec OM entity framework dans .NET
.NET CLI : 

web app dans vb.net modele mvc 
individual user account 
.net 2.0
vs 2017 
ASP.net 
startup .cs


*/