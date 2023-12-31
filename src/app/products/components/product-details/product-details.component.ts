import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ListProductComponent, Product} from "../list-product/list-product.component";

import {ProductService} from "../../../product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id:any;
  @Input() data:any={};
  @Output() item=new EventEmitter();
  product: Product | undefined;



  constructor(private route: ActivatedRoute, private productService:ProductService) {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }

  ngOnInit(): void {
    /*const id:number=this.route.snapshot.params['id'];
    this.product=this.productService.getById(+id);*/
    this.getProduct();

  }
  getProduct(){
    this.productService.getProductById(this.id).subscribe((res:any)=>{this.data=res});

  }





}
