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

  User: User | undefined=this.loginService.getUser();
  isEditing: boolean = false;
  showPassword: boolean = false;

  constructor(private productService: ProductService, public router: Router, private panierservice: PanierService,private loginService:LoginService,private userservice:UserService) {

  }
  toggleEdit() {
    if (this.isEditing) {
      this.User = { ...this.loginService.getUser() };
    }
    this.isEditing = !this.isEditing;
  }


  saveProfile() {
    if (this.User) {
      this.userservice.update(this.User).subscribe(
        (updatedUser) => {
          console.log('Profile updated successfully:', updatedUser);
          this.isEditing = false;
        },
        (error) => {
          console.error('Error updating profile:', error);
        }
      );
    }
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }







}
