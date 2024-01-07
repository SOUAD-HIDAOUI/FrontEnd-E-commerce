    import {Component, OnInit} from '@angular/core';
    import {LoginService} from "../../../login.service";
    import {PanierService} from "../../../panier.service";
    import {AdminService} from "../../../admin.service";
    import {User} from "../../../user";


    @Component({
      selector: 'app-admin',
      templateUrl: './admin.component.html',
      styleUrls: ['./admin.component.css']
    })
    export class AdminComponent  implements OnInit{
      carts: any[] = [];
      orders: any[] = [];
      User: User | null=this.loginservice.getUser();
      Date=this.panierService.date;
      userCart:any[]=[];
      orderCart:any[]=[];
      length:any;
      showSecondTable = false;




      constructor(private loginservice:LoginService,private panierService :PanierService,private adminService :AdminService) {
      }
      getAllCarts() {
        const userId = this.loginservice.getUser()?.id;
        console.log(userId);
        console.log(this.orders)


        this.orders = JSON.parse(localStorage.getItem(`commandes_${userId}`)!) || [];


      }
      addOrder(userId: any, cart: any[]) {
        const newOrder = { userId: userId, cart: cart, date: new Date() };
        this.orders.push(newOrder);
        localStorage.setItem(`commandes_${userId}`, JSON.stringify(this.orders));
        console.log(this.orders);
      }

      ngOnInit(): void {


        const userId = this.loginservice.getUser()?.id;

        this.orders = JSON.parse(localStorage.getItem(`commandes_${userId}`)!) || [];

        console.log(this.orders)

        console.log(this.orders.length)

        // const userId = this.loginservice.getUser()?.id;
        //
        // const storedOrders = localStorage.getItem(`panier_${userId}`);
        // if (storedOrders) {
        //   this.orders = JSON.parse(storedOrders);
        // }

        this.getAllCarts();
      }


      toggleSecondTable() {

      }
      selectedOrder: any;

      // Method to set the selected order when the "View" button is clicked
      viewOrderDetails(order: any) {
        this.selectedOrder = order;
        this.showSecondTable = !this.showSecondTable;

      }
      isLoggin():boolean {
        return this.loginservice.isLoggedIn();

      }
    }
