import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../home/profile/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  updateUser(body:object): Observable<User>{
    return this.http.post<User>('api/user/update',{...body});
  }
}
