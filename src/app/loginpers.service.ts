import { Injectable, NgZone, OnInit } from '@angular/core';
import {Http, Response,RequestMethod,Headers ,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IPersonne } from './login/personne';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Personnne } from './login/personnee';
import { PlatformLocation } from '@angular/common';





@Injectable()
export class LoginpersService  {

 _productUrl:string='http://localhost:3980/api/Personnnes';
 isLoggedIn: boolean = false;
constructor(private _http:Http,private router: Router, 
  private zone: NgZone) {
  }


PostPersonne(pers:Personnne){

 let body = JSON.stringify(pers); 
 let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ method:RequestMethod.Post,headers: headers });
        this.zone.runOutsideAngular(() => {
          location.reload();
        }); 
        return this._http.post("http://localhost:3980/api/Personnnes", body, options).map(res=>res.json()); 
     
      }

  PutPersonne(pers:Personnne ,id:string){
      
      
      let body = JSON.stringify(pers);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      headers.append('Accept','application/json');
      headers.append('Cache-Control','no-cache');
       let options = new RequestOptions({ method:RequestMethod.Put,headers: headers });
       
       return this._http.put("http://localhost:3980/api/Personnnes/?id="+id, body, options).map(res=>res.json());
                      
        }   
  
        
getPersonne(): Observable<IPersonne[]>
{ return this._http.get(this._productUrl)
      .map((response : Response)=><IPersonne[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);}

  private handleError(error:Response)
  {console.error(error);
    return Observable.throw(error.json().error || 'Server Error') ; }
}
