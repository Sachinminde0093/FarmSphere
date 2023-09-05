import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private socket: Socket){

    this.socket.emit('chat-box',{'data':"data"});
    
  }


  title = 'FarmSphere';
   name:string = ''
   email: string = ''; // Bind email to the input element
  password: string = ''; 
  
  // Bind password to the input element

  

}
