  import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
  import {ProductService} from "../../../product.service";
  import { Router } from '@angular/router';
  import {ProductDetailsComponent} from "../product-details/product-details.component";
  import {filter} from "rxjs";
  import {PanierService} from "../../../panier.service";
  import {LoginService} from "../../../login.service";
  import { User } from 'src/app/user';
  import {LoginComponent} from "../login/login.component";
  import {CommentService} from "../../../comment.service";



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
    isAdded: boolean = false;




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
      User: User =this.loginService.getUser();
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
      menuBottomPosition: any;




      constructor(private productService: ProductService, public router: Router, private panierservice: PanierService,private loginService:LoginService,private commentService: CommentService) {

      }

      ngOnInit(): void {
        this.getProducts();
        this.getCategories();
        this.searchTextInput();
        this.selectedOption = 'all';




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

      getProductsByCategory(keyword: string | undefined) {
        this.showCategoryDropdown = false;
        this.productService.getProductByCategory(keyword).subscribe((res: any) => {
          this.produ = res.products;
        });
      }

      // addToCart(item: any) {
      //   if ("panier" in localStorage) {
      //     this.cart = JSON.parse(localStorage.getItem("panier")!);
      //
      //     let exist = this.cart.find(cartItem => cartItem.id === item.id);
      //     if (exist) {
      //       exist.quantity += item.quantity;
      //
      //       localStorage.setItem("panier", JSON.stringify(this.cart));
      //     } else {
      //       item.addButton = true;
      //       item.quantity = 1;
      //       this.cart.push(item);
      //       localStorage.setItem("panier", JSON.stringify(this.cart));
      //     }
      //   } else {
      //     item.addButton = true;
      //     item.quantity = 1;
      //     this.cart.push(item);
      //     localStorage.setItem("panier", JSON.stringify(this.cart));
      //   }
      // }
      addToCart(item: any,newQuantity: number) {
        if (this.loginService.isLoggedIn()) {
          const userId = this.loginService.getUser()?.id;

          // Retrieve the cart for the current user from local storage
          this.cart = JSON.parse(localStorage.getItem(`panier_${userId}`)!) || [];

          let exist = this.cart.find(cartItem => cartItem.id === item.id);

          if (exist) {
            exist.quantity += item.quantity;

            localStorage.setItem(`panier_${userId}`, JSON.stringify(this.cart));
            this.getProducts();
          } else {
            item.addButton = true;
            item.quantity = newQuantity;
            this.cart.push(item);


            localStorage.setItem(`panier_${userId}`, JSON.stringify(this.cart));
            this.getProducts();
          }
        } else {
          if ("panier" in localStorage) {
                this.cart = JSON.parse(localStorage.getItem("panier")!);

                let exist = this.cart.find(cartItem => cartItem.id === item.id);
                if (exist) {
                  exist.quantity += item.quantity;

                  localStorage.setItem("panier", JSON.stringify(this.cart));
                  this.getProducts();
                } else {
                  item.addButton = true;
                  item.quantity = newQuantity;
                  this.cart.push(item);
                  localStorage.setItem("panier", JSON.stringify(this.cart));
                  this.getProducts();
                }
              } else {
                item.addButton = true;
                item.quantity =newQuantity;
                this.cart.push(item);
                localStorage.setItem("panier", JSON.stringify(this.cart));
            this.getProducts();
              }
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

      logoutUser() {
        this.loginService.logout();
        this.router.navigate(['/login'])
        this.loginService.setUser(null);

        console.log('Déconnexion de l\'utilisateur');
        this.isMenuOpen = false;
      }

      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;

        // Calculez la hauteur de la liste ici (c'est un exemple, ajustez en fonction de votre cas)
        const listHeight = 50; // Remplacez cela par la vraie hauteur de votre liste

        // Mettez à jour la position en fonction de la hauteur de la liste
        this.menuBottomPosition = this.isMenuOpen ? listHeight : 0;      }
      goToProfile() {
        console.log(this.User)
        if(this.User!=null){
          this.router.navigate(['/profile']);
          this.isMenuOpen = false;
        }
        console.error('Unauthorized access to edit profile');
      }

      isLoggin():boolean {
        return this.loginService.isLoggedIn();

    }
      filterProductsByCategory() {
        if (this.selectedOption === 'all') {
          this.getProducts();
        } else {
          this.getProductsByCategory(this.selectedOption);
        }
      }

    }
