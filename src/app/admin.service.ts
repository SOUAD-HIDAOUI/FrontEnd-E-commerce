import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environnement} from "../environnements/environnement";
import {PanierService} from "./panier.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor(private http: HttpClient,private panierservice:PanierService) { }

getCarts(){
    return this.panierservice.getCarts();
    console.log(this.panierservice.getCarts())
}
}
