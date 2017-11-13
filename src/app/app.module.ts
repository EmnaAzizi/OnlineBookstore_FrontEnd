import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ZoomdetailsComponent } from './zoomdetails/zoomdetails.component';
import { LoginComponent } from './login/login.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ZoomdetailsComponent,
    LoginComponent,
    ShopCartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,ProductComponent,ZoomdetailsComponent, LoginComponent,ShopCartComponent,PaymentComponent]
})
export class AppModule { }
