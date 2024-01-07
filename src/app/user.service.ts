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
    return this.http.get<User[]>(this.usersUrl+"/clients/");
  }
  public deleteUser(id: number): Observable<any> {
    const deleteUrl = `${this.usersUrl}/clients/delete/${id}`;
    return this.http.delete(deleteUrl);
  }

  public  save(user: User | undefined) {
    return this.http.post<User>(this.usersUrl + "/clients/addClient", user);
  }
  public update(id: number, user: User): Observable<any> {
    return this.http.post<User>(`${this.usersUrl}/clients/update/${id}`, user);
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/clients/${id}`);
  }
  public fetchClientByEmail(email: string): Observable<User> {
    const fetchByEmailUrl = `${this.usersUrl}/clients/fetchByEmail/${email}`;
    return this.http.get<User>(fetchByEmailUrl);
  }


}


