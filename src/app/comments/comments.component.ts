import {Component, OnInit} from '@angular/core';
import {CommentService} from "../comment.service";
import { Comment } from 'src/app/Comment';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  comments: Comment[] = [];
  selectedComment: Comment | null = null;
  newComment: any;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    this.commentService.getAllComments().subscribe((comments) => {
      this.comments = comments;
    });
  }
  addComment(id:number,comment: String): void {
    this.commentService.addComment(id, comment).subscribe((comment: Comment) => {
      this.comments.push(comment);
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
}


