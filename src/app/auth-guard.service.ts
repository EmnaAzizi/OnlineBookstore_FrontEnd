import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
 login :boolean ;
 
  canActivate() {
//Your redirect logic/condition. I use this.

if (this.login==false) {
          console.log( "this is the login value " + this.login);
         alert("USER NOT FOUND")
         this.router.navigate(["/"])
         console.log('AuthGuard#canActivate called');
    }
   
    return true;
    
  }
//Constructor 
constructor(private router: Router) { }
}
