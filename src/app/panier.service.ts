  import { Injectable } from '@angular/core';
  import {environnement} from "../environnements/environnement";
  import {HttpClient} from "@angular/common/http";
  import {Product} from "./products/components/list-product/list-product.component";

  @Injectable({
    providedIn: 'root'
  })
  export class PanierService {

    private paniers: { [userId: string]: any[] } = {};
    carts: any[] = [];
    date:any;
    orderNowDisabled = false;

    constructor(private http: HttpClient) {
    }
    getCarts(){
      return this.carts
      console.log(this.carts)

    }
    getCart(userId: string): any[] {
      return this.paniers[userId] || [];
    }



  }
