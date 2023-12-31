import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// @ts-ignore
import {ListProduct} from './products/components/list-product';
import {ProductDetailsComponent} from "./products/components/product-details/product-details.component";
import {ListProductComponent} from "./products/components/list-product/list-product.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {PanierComponent} from "./products/components/panier/panier/panier.component";
import {UserListComponent} from "./user-list/user-list.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {LoginComponent} from "./products/components/login/login.component";
import {CardProfileComponent} from "./card-profile/card-profile.component";




const appRoutes: Routes = [
  {path:"login" ,component:LoginComponent},
  {path:"products" ,component:ListProductComponent },
  {path:"details" ,component:ProductDetailsComponent},
  {path:"profile",component:CardProfileComponent},
  {path:"" ,component:ListProductComponent},
  {path:"cart" ,component:ListProductComponent},
  {path:"details/:id" ,component:ProductDetailsComponent},
  {path:"panier" ,component:PanierComponent},
  { path: 'clients', component: UserListComponent },
  { path: 'clients/addClient', component: CreateUserComponent },
  { path: '', component: UserListComponent },
  {path:'**',redirectTo:'/not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
