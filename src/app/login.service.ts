import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usersUrl: string | undefined;
  private User: User | null | undefined = undefined;
  private readonly AUTH_KEY = 'auth_token';
  private readonly USER_DETAILS_KEY = 'user_details';
  private msg: string | undefined;
isLoggedin:boolean

  constructor(private http: HttpClient ,private router:Router ) {
    const storedToken = localStorage.getItem(this.AUTH_KEY);
    console.log('Stored Token:', storedToken);

    this.isLoggedin = !!storedToken;
    console.log(this.isLoggedIn())
    this.usersUrl = 'http://localhost:5000';
    // Check if there is a token in local storage during service initialization
    const token = localStorage.getItem('token');
    if (token) {
      this.setUserFromToken(token);
    }
  }
  private setUserFromToken(token: string): void {

    const decodedToken: any = /* Decode and verify token */ {};

    this.User = decodedToken.user;
  }

  public logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
    localStorage.removeItem(this.USER_DETAILS_KEY);
    // localStorage.removeItem('token');
    // this.User = null;
    this.router.navigate(['/login']);
  }
  public registration(user: User |null| undefined): Observable<any> {
    return this.http.post <any>(this.usersUrl+"/clients/login",user);
    this.User = user;

  }


  setUser(data: any) {
    localStorage.setItem(this.AUTH_KEY, data.token);
    localStorage.setItem(this.USER_DETAILS_KEY, JSON.stringify(data));
    this.User=data;
    // localStorage.setItem(this.USER_DETAILS_KEY, JSON.stringify(data));


  }
  getUser():User {
    const userDetails = localStorage.getItem(this.USER_DETAILS_KEY);
    return userDetails ? JSON.parse(userDetails) : null;

     // return <User>this.User;

  }
  public isLoggedIn(): boolean {
    // if(this.User!=null){
    //   return true;
    // }
    // return false;
     return !!localStorage.getItem(this.AUTH_KEY);

  }



}
