import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../../product.service";
import { Router } from '@angular/router';
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {filter} from "rxjs";
import {PanierService} from "../../../panier.service";
import {LoginService} from "../../../login.service";
import { User } from 'src/app/user';
import {LoginComponent} from "../login/login.component";



export class Product{
  id: number;
  name: string;
  price: number;
  availability: boolean;
  imageUrl: string;
  description: string;
  quantity:number=1;
  title: any;
  images: any;
  addButton: boolean | undefined;


  constructor(id: number, name: string, price: number, availability: boolean, imageUrl: string, description: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.availability = availability;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
  @Component({
    selector: 'app-list-product',
    templateUrl: './list-product.component.html',
    styleUrls: ['./list-product.component.css']
  })
  export
  class
  ListProductComponent implements OnInit {
    User: User | undefined=this.loginService.getUser();
    products: Array<Product> | undefined = this.productService.getAll();
    produ: any[] = [];
    categories: any[] = [];
    cart: any[] = [];
    searchTerm: any;
    private filteredProducts: any[] | undefined;
    @Input() data: any = {};
    @Output() item = new EventEmitter();
    addButton: boolean = false;
    amount: number = 0;
    searchedText: any;
    showCategoryDropdown: boolean = false;
    selectedOption: string | undefined;
    isMenuOpen = false;



    getColor(product: Product): string {
      return product.availability ? "green" : "red";
    }

    getState(product: Product): String {
      if (product.availability === true) {
        return "En_Stock";
      } else {
        return "En_rupture_de_Stock";
      }
    }

    constructor(private productService: ProductService, public router: Router, private panierservice: PanierService,private loginService:LoginService) {
      if (!this.loginService.isLoggedIn()) {
        this.router.navigate(['/login']);
      }
      // if (!this.loginService.isLoggedIn()) {
      //   // Redirect to login if not logged in
      //   this.router.navigate(['/login']);
      // }
    }

    ngOnInit(): void {
      this.getProducts();
      this.getCategories();
      this.searchTextInput();

    }

    goToDetails(productId: number) {
      this.router.navigate(["products", productId]);
    }

    getProducts() {
      this.productService.getAllProducts().subscribe((res: any) => {
        this.produ = res.products
      });
    }

    getCategories() {
      this.productService.getAllCategories().subscribe((res: any) => {
        this.categories = res
      });
    }



    getProductsByCategory(keyword: string) {
      this.showCategoryDropdown = false; // Hide the dropdown after selecting a category
      this.productService.getProductByCategory(keyword).subscribe((res: any) => {
        this.produ = res;
      });
    }



    addToCart(item: any) {
      if ("panier" in localStorage) {
        this.cart = JSON.parse(localStorage.getItem("panier")!);

        let exist = this.cart.find(cartItem => cartItem.id === item.id);
        if (exist) {
          exist.quantity += item.quantity;

          localStorage.setItem("panier", JSON.stringify(this.cart));
        } else {
          item.addButton = true;
          item.quantity = 1;
          this.cart.push(item);
          localStorage.setItem("panier", JSON.stringify(this.cart));
        }
      } else {
        item.addButton = true;
        item.quantity = 1;
        this.cart.push(item);
        localStorage.setItem("panier", JSON.stringify(this.cart));
      }
    }

    add(product: any) {
      this.item.emit({item: this.data, quantity: this.amount});
    }


    searchTextInput() {
      if (this.searchedText) {
        this.productService.getProduitFromServer(this.searchedText).subscribe((res: any) => {
          console.log('Search Results:', res);
          this.searchTerm = res.products;
          this.produ=res.products;
        });
      }
    }

    toggleCategoryDropdown() {
      this.showCategoryDropdown = !this.showCategoryDropdown;
    }
    isLoggedIn(): boolean {
      return this.loginService.isLoggedIn();
    }
    onMenuChange() {
      // Ajoutez le code pour gérer les changements de sélection ici
      if (this.selectedOption === 'profile') {
        // Code pour le cas 'profile'
      } else if (this.selectedOption === 'logout') {
        // Code pour le cas 'logout'
      } else if (this.selectedOption === 'login') {
        // Code pour le cas 'login'
      }
    }

    logoutUser() {
      // Ajoutez ici la logique pour déconnecter l'utilisateur
      console.log('Déconnexion de l\'utilisateur');
      this.isMenuOpen = false; // Ferme le menu après la déconnexion
    }

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
    goToProfile() {
      this.router.navigate(['/profile']);
      this.isMenuOpen = false;
    }
  }
