import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { IProduct } from '../product/produit';

import {ActivatedRoute,Router} from "@angular/router";
import { ProductdataService } from '../productdata.service';
import { LoginpersService } from '../loginpers.service';
import { IPersonne } from './personne';
import { AuthGuardService } from '../auth-guard.service';
import { GeneralUserService } from '../general-user.service';
import { Personnne } from './personnee';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value: boolean =false; 
  mail : string =""; 
  pass:string="";
  Id:number ;
  personnee:Personnne[];
 
   personnes:IPersonne[];
   P:IPersonne;
  constructor(private _route:ActivatedRoute,private _router:Router,private _productpers:LoginpersService ,
    private AutoGard:AuthGuardService , private general :GeneralUserService){}
  
  
  
  


  Myspan1(){
    
  
    this._router.navigate(['/']);
    
  }




  recherche (){

    
    let P :IPersonne[]=[]

    P=this.personnes
      
    for (let pers of P) 
   { 
    
     if (pers.login==this.mail)
       
      {  
         if (pers.password==this.pass) 
        { 
          this.value=true
          this.general.login=this.mail;
          this.general.password=this.pass;
          this.general.welcome="Welcome " + this.general.login + " !"; 
          this.general.img=pers.img;

         this.AutoGard.login=this.value;
        }
      }
   }
   this.AutoGard.login=this.value;


  }
  
  ngOnInit() {
     
     
     //let x = new Personnne ("azzzzzz","azzzzzzz","azzzzzzz",2);
     
     //this._productpers.PostPersonne(x).subscribe(x=>this.personnee=x);

    this.Id = +this._route.snapshot.params['id'];

    this._productpers.getPersonne()
    .subscribe(
    productss => {
    this.personnes=productss});
}
}