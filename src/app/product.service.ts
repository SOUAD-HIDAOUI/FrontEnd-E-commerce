import { Injectable } from '@angular/core';

import {Product} from "./products/components/list-product/list-product.component";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<Product> = [new Product(1, "Produit 1", 29.99, true, "https://m.media-amazon.com/images/I/71jKDgN926L._AC_SX425_.jpg", "jgjhdchs"),
    new Product(2, "Nouveau Fire TV Stick 4K Max", 19.99, false, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/MjgzYzEwMjEt-w379._SY304_CB578475254_.jpg", "hgcqgqszcv"),
    new Product(3, "Nouvel Echo Show 8", 39.99, true, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/NmRlMWM5NzEt-w379._SY304_CB578341247_.jpg", "qhsgczgez"),
    new Product(4, "Nouveau Fire TV Stick 4K", 49.99, false, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/MTU0YzcwY2Yt-w379._SY304_CB578475228_.jpg", "sjdhvczhgevfz"),
    new Product(5, "Nouveau Fire TV Stick 4K", 49.99, false, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/MTU0YzcwY2Yt-w379._SY304_CB578475228_.jpg", "hzefkzughevzs b"),
    new Product(6, "Nouveau Fire TV Stick 4K", 49.99, false, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/MTU0YzcwY2Yt-w379._SY304_CB578475228_.jpg", "qhsgvcgevda"),
    new Product(7, "Nouveau Fire TV Stick 4K", 49.99, false, "https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/6eENpRVRZ3rmSfk7/MTU0YzcwY2Yt-w379._SY304_CB578475228_.jpg", "hjbcuyezfbs")]
  constructor(private http:HttpClient) { }
  item:any;
  getAll(): Array<Product> | undefined {
    return this.products;
  }
  getById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
  getAllProducts(){
    return this.http.get('https://dummyjson.com/products');
  }
  getAllCategories(){
    return this.http.get('https://dummyjson.com/products/categories');
  }

    getProductByCategory(keyword: string | undefined){
    return this.http.get(`https://dummyjson.com/products/category/${keyword}`);
  }
  getProductById(id:any){
    return this.http.get('https://dummyjson.com/products/'+id);

  }
  getProduitFromServer(produit:any){
    return this.http.get(`https://dummyjson.com/products/search?q=${produit}`);
  }

}
