import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import User from '../home/profile/user.model';
import Message from '../home/news/message';


@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor(private socket: Socket, private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
     return this.http.get<User[]>('/api/user/friends');
  }

  public getChat(user_id:string): Observable<Message[]>{
     return this.http.get<Message[]>(`/api/chat/${user_id}`);
  }

}
