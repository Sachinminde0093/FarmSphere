import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ChatServiceService } from './chat-service.service';
import User from '../profile/user.model';
import Message from './message';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewChecked {

  userList!: User[];

  selectedUser: User | null = null;

  private user!: User;


  constructor(private socket: Socket, private chatService: ChatServiceService) {
    
    
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.socket.on('chat message', async (data: Message) => {
  
      if(this.selectedUser?.user_id == data.senderuser_id ){
        this.messageList.push(data);
      }else if(this.selectedUser?.user_id == data.receiveruser_id){
        this.messageList.push(data);
      }
    });

    

    
    this.socket.on('chat-box', async (data: any) => {
      console.log(data);
      this.messageList.push(data);
    })
  }


  ngOnInit(): void {
    this.getUsers();
  }


  ngAfterViewChecked(): void {

  }


  private getUsers() {
    this.chatService.getUsers().subscribe((data) => {
      this.userList = data;
      // this.scrollToBottom();
    });
  }

  scrollToBottom(): void {
    try {
        // this.scrollBottom.nativeElement.scrollBottom = this.scrollBottom.nativeElement.scrollHeight;
    } catch(err) { }
}


  messageList: Message[] = [];

  value: string = 'first';

  selectUser(u: User): void {
    
     this.chatService.getChat(u.user_id).subscribe( (messages) =>{
        this.messageList = messages;
     });
     this.selectedUser = u;

  }

  async send() {
    console.log(this.user.user_id, this.selectedUser?.user_id);
    // this.socket.emit('chat-box', {sid:'this.user.userId', rid:'this.selectedUser?.userId', content:this.value});
    this.socket.emit('chat message', { sid: this.user.user_id, rid: this.selectedUser?.user_id, content: this.value });
    this.value = '';
  }
}
