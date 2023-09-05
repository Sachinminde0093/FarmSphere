import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private socket: Socket) { }
}
