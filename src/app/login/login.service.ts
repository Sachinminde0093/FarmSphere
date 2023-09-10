import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, User } from '../models/user.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string, name: string, path: string): Observable<LoginResponse> {
    let data = {
      email,
      password,
    }

    return this.http.post<LoginResponse>(`/api/user/${path}`, data);
  }

}
