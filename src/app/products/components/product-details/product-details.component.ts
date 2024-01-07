import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ListProductComponent, Product} from "../list-product/list-product.component";

import {ProductService} from "../../../product.service";
import {Comment} from "../../../Comment";
import {CommentService} from "../../../comment.service";
import {User} from "../../../user";
import {LoginService} from "../../../login.service";
import {UserService} from "../../../user.service";
import {Observable} from "rxjs";

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

  comments: Comment[] = [];
  selectedComment: Comment | null = null;
  newComment!: String ;
  user:User=this.loginservice.getUser();



  constructor(private route: ActivatedRoute, private productService:ProductService,private commentService: CommentService,private loginservice:LoginService,private  userservice :UserService) {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }

  ngOnInit(): void {

    this.getProduct();
    this.loadComments();

  }
  getProduct(){
    this.productService.getProductById(this.id).subscribe((res:any)=>{this.data=res});

  }

  addComment(id: number, comment: String | undefined): void {
    this.commentService.addComment(id, comment).subscribe(response => {
      this.loadComments();
      console.log(comment)
      console.log(response);
    }, error => {
      console.error(error);
    });
  }
  loadComments() {
    this.commentService.getAllComments().subscribe((comments) => {

      this.comments = comments;
      for (let i of comments) {
        console.log(i);
      }
    });
  }


  updateComment(comment: Comment): void {
    this.commentService.updateComment(comment.id, comment).subscribe((comment: Comment) => {
      const index = this.comments.findIndex((c: Comment) => c.id === comment.id);
      if (index !== -1) {
        this.comments[index] = comment;
      }
    });

  }

  deleteComment(id: number): void {
    this.commentService.deleteComment(id).subscribe(() => {
      const index = this.comments.findIndex((c: Comment) => c.id === id);
      if (index !== -1) {
        this.comments.splice(index, 1);
      }
    });
  }
  // getUserById(id:number):void {
  //   this.userservice.getById(id).subscribe((res: any) => {
  //    console.log('Search Results:', res);
  //    this.User=res;
  //
  //  });
  // }

  showComments=false;
  loggedIn=this.loginservice.isLoggedIn();



}
