import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  cartItems: any[] = [];

  addToCart(product: any) {
    console.log("succ")
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cartItems.push(product);
    }
  }
  getCartItems() {
    return this.cartItems;
  }
}
