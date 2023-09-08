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

  name: string = '';
  email: string = '';
  password: string = '';

  async login() {

   try {
    if (this.password.length > 5) {
      this.loginService.login(this.email, this.password, this.name).subscribe(
        (user) => {
          console.log(user, 'login data');
          console.log('from interceptor');
          this.localstorage.setItem('accessToken',user.accessToken);
          this.localstorage.setItem('user',JSON.stringify(user.user));
          this.handleSuccessfulLogin(user.accessToken);
          this.router.navigate(['/home']);
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

  // ...

  // After login, call this function to reconnect with the new token
  handleSuccessfulLogin(token: string) {
    this.reconnectWithToken(token);
  }

  // loginTest(){
  //   let user  = this.loginService.loginTest(this.email, this.password, this.name);
  //   this.localstorage.setItem('user',JSON.stringify(user));
  //   this.router.navigate(['/home']);
  // }
}
