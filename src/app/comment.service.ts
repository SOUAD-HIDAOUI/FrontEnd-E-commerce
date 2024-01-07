import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Comment } from 'src/app/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:5000/comments';

  constructor(private http: HttpClient) { }
  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/`);
  }

  addComment(clientId: number, comment: String | undefined): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Comment>(`${this.apiUrl}/addComment/${clientId}`, comment, { headers });
  }

  updateComment(commentId: number, updatedComment: Comment): Observable<any> {
    return this.http.post<Comment>(`${this.apiUrl}/update/${commentId}`, updatedComment);
  }

  deleteComment(commentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${commentId}`);
  }

}
