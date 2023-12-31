import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usersUrl: string;
  User: User | undefined;


  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:5000';
  }
  public registration(user:User): Observable<any> {
    return this.http.post <any>(this.usersUrl+"/clients/login",user);
    this.User=user;
  }

  setUser(data: any) {
    this.User=data;

  }
  getUser():User{
    return <User>this.User;
  }
  public isLoggedIn(): boolean {
    return this.User !== null;
  }


}
