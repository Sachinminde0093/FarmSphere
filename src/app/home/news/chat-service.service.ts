import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import User from '../profile/user.model';
import Message from './message';


@Injectable({
  providedIn: 'root'
})

export class ChatServiceService {

  constructor(private socket: Socket, private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
     return this.http.get<User[]>('/api/user');
  }

  public getChat(user_id:string): Observable<Message[]>{
     return this.http.get<Message[]>(`/api/chat/${user_id}`);
  }

}
