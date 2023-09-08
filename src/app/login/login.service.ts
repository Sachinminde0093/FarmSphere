import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, User } from '../models/user.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string, name:string): Observable<LoginResponse> {
    let data = {
      email,
     password,
    }
    // let user =  this.http.post<User>('/api/user/login', data);
    // this.http.get<User>('/api/user');

     return  this.http.post<LoginResponse>('/api/user/login', data);

  }

  // loginTest(email: string, password: string, name:string): User {

  //   try {
  //     console.log('login');
  //     let data = {
  //       'email': email,
  //       password: password
  //     }

  //     let user: User = {
  //       email: 'sachin@gmail.com',
  //       name: "string",
  //       userId: '21u153',
  //       accessToken:''
  //     }
  //     return user;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

}
