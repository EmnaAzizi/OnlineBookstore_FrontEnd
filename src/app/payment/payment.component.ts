import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private _route:ActivatedRoute,private _router:Router)
  {   }
 
  Myspanpay(){
    
   this._router.navigate(['/']);

  
  }
}
