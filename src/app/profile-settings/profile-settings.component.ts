import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {PanierService} from "../panier.service";
import {LoginService} from "../login.service";
import {UserService} from "../user.service";
import {catchError, Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit{
  User: User = this.loginService.getUser() ;


  constructor(private productService: ProductService, public router: Router, private panierservice: PanierService,private loginService:LoginService,private userservice:UserService) {
  }

  saveChanges(id:number) {
    // Vérification des données d'entrée
    if (!this.User.nom || !this.User.prenom || !this.User.email || !this.User.password) {
      console.error('Les données d\'entrée sont vides');
      return;
    }

    console.log('User Object:', this.User); // Log the User object
    this.userservice.update(id,this.User)
      .subscribe(
        response => {
          this.userservice.save(this.User);
          console.log('Update successful', this.User);
        },
        error => {
          console.error('Update failed', error);
          // Gestion des erreurs HTTP
          if (error instanceof HttpErrorResponse && error.status === 400) {
            console.error('Erreur HTTP 400 : Les données d\'entrée sont invalides');
          }
        }
      );
  }
  islogged():boolean{
    if (this.User!=null){
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.saveChanges(this.User.id)
  }
}
