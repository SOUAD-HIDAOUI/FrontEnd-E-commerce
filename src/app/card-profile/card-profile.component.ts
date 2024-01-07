  import {Component, Input} from '@angular/core';
  import {ProductService} from "../product.service";
  import {Router} from "@angular/router";
  import {PanierService} from "../panier.service";
  import {LoginService} from "../login.service";
  import {User} from "../user";
  import {UserService} from "../user.service";

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent {

  User: User | null = this.loginService.getUser() ;

  constructor(private productService: ProductService, public router: Router, private panierservice: PanierService,private loginService:LoginService,private userservice:UserService) {

  }


  test(){
    if(this.User!=null){
      this.router.navigate(['profile-settings/${User.id}']);
    }
    console.error('Unauthorized access to edit profile');


  }
  islogged():boolean{
    if (this.User!=null){
      return true;
    }
    return false;
  }







}
