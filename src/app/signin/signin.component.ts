import { Component, OnInit, NgZone } from '@angular/core';
import { LoginpersService } from '../loginpers.service';
import { Router } from '@angular/router';
import { GeneralUserService } from '../general-user.service';
import { Personnne } from '../login/personnee';
import { IPersonne } from '../login/personne';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 x:Personnne[];
  cartnumber: number=0 ;
  log:string='';
  pass:string ='';
  welcome:string=""; 

  personnes :IPersonne[];
  img :string="https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png" ;
  constructor(
    private _productpers:LoginpersService ,private _router:Router,private general:GeneralUserService ,
    private zone: NgZone ) { 
      
    
  }

  ngOnInit() {

    this._productpers.getPersonne()
    .subscribe(
    productss => {
    this.personnes=productss});
  }

  signout()
  { 
  alert ("Operation Succeeded ! ")
  
  let P =new Personnne(this.general.login , this.general.password, this.general.img, 
    this.general.cartprod,this.general.mail,this.general.name);
  
    this._productpers.PutPersonne(P,P.login).subscribe(x=>this.x=x);
  this.general.login="";
  this.general.password="";
  this.general.exist=false ; 
  this.general.welcome="";
  this.general.cartprod=0;

  this.general.img="https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png" ;
  this.img=this.general.img;

  
  }


  signin (log:string , pass:string ){
 
    
    let P :IPersonne[]=[]
    let v :boolean=false ;
        
    P=this.personnes      
        
        for (let pers of P) 
       { 
        
         if ((pers.login==this.log)&&(this.pass==pers.password))
           
          { 
             v=true;
             
             this.general.cartprod=pers.nbprod;
             this.general.login=this.log ;
             this.general.password=this.pass ; 
            
             this.general.name=pers.name;
             this.general.mail=pers.mail;
             this.general.img=pers.img;
             this.general.welcome= "Welcome " + this.general.login + " !"; 
             this.img=this.general.img;
            
             
            }
       }
  if (v==true)
  {alert("WELCOME USER "+ log)
  
  this.log="" ; this.pass=""
  
  }
  else {alert("USER NOT FOUND , CHECK YOUR LOGIN AND PASSWORD ! ")}
 
 
}
  

}
