  import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;


  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:5000';
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+"/clients");
  }
  public deleteUser(id: number): Observable<any> {
    const deleteUrl = `${this.usersUrl}/clients/delete/${id}`;
    return this.http.delete(deleteUrl);
  }

  public  save(user: User | undefined) {
    return this.http.post<User>(this.usersUrl + "/clients/addClient", user);
  }
  public update(user: User): Observable<User> {
    const updateUrl = `${this.usersUrl}/clients/update/${user.id}`;
    return this.http.post<User>(updateUrl, user);
  }


}


