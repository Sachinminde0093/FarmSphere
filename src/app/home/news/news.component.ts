import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

    constructor(private socket:Socket){

    }

  async send(){
    console.log('log');
    this.socket.emit('chat-box',"HOw are you");
  }
}
