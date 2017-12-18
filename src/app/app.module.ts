import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ZoomdetailsComponent } from './zoomdetails/zoomdetails.component';
import { LoginComponent } from './login/login.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { PaymentComponent } from './payment/payment.component';

import { ProductdataService } from './productdata.service';
import { productFilterPipe } from './product/productfilterPipe';
import {FormsModule } from '@angular/forms';
import { CategoryPipe } from './product/categoryPipe';
import {RouterModule} from '@angular/router'
import { ShopcartprodService } from './shopcartprod.service';
import { LoginpersService } from './loginpers.service';
import { AuthGuardService } from './auth-guard.service';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './comment.service';
import { GeneralUserService } from './general-user.service';
import { AdduserComponent } from './adduser/adduser.component';
import { SigninComponent } from './signin/signin.component';
import { PopoverModule}  from 'ngx-bootstrap';
import { ShopprodService } from './shopprod.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ZoomdetailsComponent,
    LoginComponent,
    ShopCartComponent,
    PaymentComponent,
    productFilterPipe,CategoryPipe, CommentComponent, AdduserComponent, SigninComponent
  ],
  imports: [HttpModule,PopoverModule.forRoot() ,
    FormsModule,
    BrowserModule,RouterModule.forRoot([{path:'product/:id',component:ZoomdetailsComponent
  },{path:'Authentification/:id',component:LoginComponent},{path:'shopcart/:id/:login',component :ShopCartComponent , canActivate: [AuthGuardService] ,canActivateChild:[GeneralUserService]},
  {path:'pay/:check/:login',component :PaymentComponent}])
  ],
  providers: [ShopprodService,ProductdataService,ShopcartprodService,LoginpersService,AuthGuardService,CommentService,GeneralUserService],
  bootstrap: [ProductComponent,ZoomdetailsComponent, SigninComponent, LoginComponent,ShopCartComponent,AdduserComponent,PaymentComponent,CommentComponent]
})
export class AppModule { }
