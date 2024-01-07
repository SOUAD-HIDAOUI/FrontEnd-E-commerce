import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../list-product/list-product.component";
import {PanierService} from "../../../../panier.service";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../product.service";
import {LoginService} from "../../../../login.service";
import {User} from "../../../../user";
import {UserService} from "../../../../user.service";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{
  @Output() commandeEnvoyee = new EventEmitter<any>();

  cart:any[]=[];
  carts: any[] = [];
  orders: any[] = [];
  newcart:any[]=[];
  orderNowDisabled = false;



  id:any;
  @Input() data:any={};
  @Output() item=new EventEmitter();
  product: Product | undefined;
  User: User | null=this.loginservice.getUser();
  success: boolean=false;

  constructor(private loginservice:LoginService,private panierService :PanierService,private userservice:UserService) {
  }
  ngOnInit(): void {
    this.getCartProducts();

  }
  // getCartProducts(){
  //   if("panier" in localStorage){
  //     this.cart=JSON.parse(localStorage.getItem("panier")!);
  //   }
  //   console.log(this.cart)
  // }
  getCartProducts() {
    if (this.loginservice.isLoggedIn()) {
      const userId = this.loginservice.getUser()?.id;
      this.cart = JSON.parse(localStorage.getItem(`panier_${userId}`)!) || [];
        // this.userservice.findAll().subscribe(
        //   users => {
        //     // Parcourir tous les utilisateurs pour récupérer leurs paniers
        //     users.forEach(user => {
        //       const userCart = JSON.parse(localStorage.getItem(`panier_${user.id}`)!) || [];
        //       if (userCart.length > 0) {
        //         this.orders.push({ userId: user.id, cart: userCart });
        //       }            });
        //     console.log(this.orders);
        //   },
        //   error => {
        //     console.error('Erreur lors de la récupération des utilisateurs:', error);
        //   }
        // );
    }
    else {this.cart=JSON.parse(localStorage.getItem("panier")!);}


  }
  isLoggin():boolean {
    if(this.User!=null){
      return true;
    }
    return false;

  }
  getCartProductsofuser() {
    if (this.User) {
      this.cart = this.panierService.getCart(this.User?.id);
    }
    console.log(this.cart);
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
  deleteCartItem(index: number) {
    // if (this.isLoggin() ) {
    //   this.cart.splice(index,1)
    //   localStorage.setItem("panier",JSON.stringify(this.cart))
    // }
    if (this.loginservice.isLoggedIn()) {
      const userId = this.loginservice.getUser()?.id;
      this.cart.splice(index,1)
      localStorage.setItem(`panier_${userId}`,JSON.stringify(this.cart))
    }
    else {
      this.cart.splice(index,1)
      localStorage.setItem("panier",JSON.stringify(this.cart))
    }
  }


  detectChange() {
    if (this.loginservice.isLoggedIn()) {
      const userId = this.loginservice.getUser()?.id;

      this.getTotalPrice();
      localStorage.setItem(`panier_${userId}`,JSON.stringify(this.cart))
    }
    else {
      this.getTotalPrice();
      localStorage.setItem("panier",JSON.stringify(this.cart))
    }


  }

  ClearCart() {
    this.cart=[];
    if (this.loginservice.isLoggedIn()) {
      const userId = this.loginservice.getUser()?.id;

      this.getTotalPrice();
      localStorage.setItem(`panier_${userId}`,JSON.stringify(this.cart))
    }
    else {
      this.getTotalPrice();
      localStorage.setItem("panier",JSON.stringify(this.cart))
    }


  }
  sendCommand() {
    const userId = this.loginservice.getUser()?.id;

    // Display a confirmation dialog
    const confirmOrder = confirm('Are you sure you want to place the order?');

    if (confirmOrder) {
      this.cart = JSON.parse(localStorage.getItem(`panier_${userId}`)!) || [];
       this.orders = JSON.parse(localStorage.getItem(`commandes_${userId}`)!) || [];
       this.newcart=JSON.parse(localStorage.getItem(`panier_${userId}`)!) || [];

      // Clear the cart


      // Generate a new order ID (you can replace this with your preferred method of generating IDs)
      const orderId = this.generateOrderId();

      // Create a new order with the generated ID
      const newOrder = { orderId: orderId, userId: userId, cart: this.newcart, date: new Date() };

      this.orders.push(newOrder);
      localStorage.setItem(`commandes_${userId}`, JSON.stringify(this.orders));

      this.cart = [];
      localStorage.setItem(`panier_${userId}`, JSON.stringify(this.cart));

      // Save the order
      console.log(this.orders)
      console.log(this.newcart)
      this.success = true;
    }
  }

  generateOrderId() {
    // You can replace this with your preferred method of generating IDs.
    // For example, you can use a timestamp, a combination of user ID and timestamp, or any other unique identifier.
    return Math.floor(Math.random() * 1000000); // Example: Generates a random 6-digit number
  }



}
