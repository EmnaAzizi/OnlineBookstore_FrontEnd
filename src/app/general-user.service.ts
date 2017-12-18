import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class GeneralUserService implements CanActivate {
  login : string ="";
  password : string="" ;
  id : number =0 ; 
  exist : boolean=false ;
  img :string="https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png"
  welcome:string ="";
  cartprod: number=0 ; 
  mail:string="";
  name:string="";



  canActivate() {
  
  
    if (this.exist==false) {
              console.log( "this is the login value " + this.login);
             
             this.router.navigateByUrl("/Authentification/"+this.id);
             console.log('AuthGuard#canActivate called');
        }
       else {this.router.navigateByUrl("/shopcart/"+this.id+"/"+this.login);}
       return true;
        
      }


  constructor(private router: Router) { }

}
