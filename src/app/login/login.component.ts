import { Component, Inject } from '@angular/core';
import { LoginService } from './login.service';
import { catchError } from 'rxjs';
import { LocalStorageToken } from '../tokens/localstorage.token';
import { Route, Router } from '@angular/router';
import { Socket, SocketIoConfig } from 'ngx-socket-io';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    @Inject(LocalStorageToken) private localstorage: any,
    private router:Router,
    private socket:Socket
    ) { }

  isRegister = true;
  name: string = '';
  email: string = '';
  password: string = '';

  toggle(){
    this.isRegister = !this.isRegister; 
  }

  async login() {

   try {
    if (this.password.length > 5) {
      this.loginService.login(this.email, this.password, this.name, this.isRegister?'register': 'login').subscribe(
        (user) => {
          
          this.localstorage.setItem('accessToken',user.accessToken);
          this.localstorage.setItem('user',JSON.stringify(user.user));
          this.handleSuccessfulLogin(user.accessToken);
          if(user.user.username){
          this.router.navigate(['/']);

          }else{
          this.router.navigate(['/onboard']);
          }
        }
      );
    }
   } catch (error) {
    console.log(error);
   }
  }

 async reconnectWithToken(token: string) {
    // Disconnect the existing WebSocket connection
    this.socket.disconnect();

    // Reconnect with the new URL including the token
    const config: SocketIoConfig = { url: 'http://localhost:8080', options: { auth: { token: token }, } };

    this.socket.ioSocket.io.options = { auth: { token: token }, }  ;
    this.socket.connect();
  }

  // After login, call this function to reconnect with the new token
  handleSuccessfulLogin(token: string) {
    this.reconnectWithToken(token);
  }

 
}
