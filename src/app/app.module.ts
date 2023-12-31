import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './products/components/list-product/list-product.component';
import { HeaderComponent } from './header/header.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./product.service";
import {FormsModule} from "@angular/forms";
import { PanierComponent } from './products/components/panier/panier/panier.component';
import { AuthComponent } from './auth/auth.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from "./user.service";
import { LoginComponent } from './products/components/login/login.component';
import { CardProfileComponent } from './card-profile/card-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    HeaderComponent,
    ProductDetailsComponent,
    PanierComponent,
    AuthComponent,
    CreateUserComponent,
    UserListComponent,
    LoginComponent,
    CardProfileComponent,



  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule],
  providers: [ProductService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
