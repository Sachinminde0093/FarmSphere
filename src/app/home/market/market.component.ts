import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {

  constructor(private socket: Socket){

    
  }

  message(){
    this.socket.emit('chat-box',{'data':"data"}).subscribe((data:any)=>{
      console.log(data);
    });
  }
}
