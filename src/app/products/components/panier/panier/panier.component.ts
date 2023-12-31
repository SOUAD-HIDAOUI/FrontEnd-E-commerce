import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../list-product/list-product.component";
import {PanierService} from "../../../../panier.service";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../product.service";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{
  cart:any[]=[];

  id:any;
  @Input() data:any={};
  @Output() item=new EventEmitter();
  product: Product | undefined;

  constructor() {
  }
  ngOnInit(): void {
    this.getCartProducts();
  }
  getCartProducts(){
    if("panier" in localStorage){
      this.cart=JSON.parse(localStorage.getItem("panier")!);
    }
    console.log(this.cart)
  }
  getTotalPrice(): number {
    let total = 0;
    for (const item of this.cart) {
      total += item.price * item.quantity;
    }
    return total;
  }
  incrementQuantity(item: any) {
    item.quantity += 1;
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }




}
