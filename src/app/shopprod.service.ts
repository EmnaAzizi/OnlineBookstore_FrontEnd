
import { Injectable,OnInit } from '@angular/core';
import {Http, Response,RequestMethod,Headers ,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


import { ShopProds } from './shop-cart/ShopProds';
import { IShop } from './shop-cart/shop';





@Injectable()
export class ShopprodService  {

 _productUrl:string='http://localhost:3980/api/shopcarts';
 isLoggedIn: boolean = false;
constructor(private _http:Http,private router: Router, 
  ) {
  }


PostShopProds(pers:ShopProds){

 let body = JSON.stringify(pers); 
 let headers = new Headers({ 'Content-Type': 'application/json' });
 headers.append( 'responseType', 'text');
        let options = new RequestOptions({ headers: headers });
        
        return this._http.post("http://localhost:3980/api/shopcarts", body, options)
       
       
     
      }

  DeleteShopProds(pers:ShopProds ,id:string){
      
      
      let body = JSON.stringify(pers);
      let headers = new Headers({ 'Content-Type': 'application/json'});
     

      headers.append( 'responseType', 'text');
       let options = new RequestOptions({ method:RequestMethod.Put,headers: headers});
       
       return this._http.put("http://localhost:3980/api/shopcarts/?id="+id, body, options).map(res=>res.json());
                      
        }   
  
        
getShopProds(): Observable<IShop[]>
{ return this._http.get(this._productUrl)
      .map((response : Response)=><IShop[]> response.json())

    }

  }
