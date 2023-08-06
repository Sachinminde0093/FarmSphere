import { Component, Inject } from '@angular/core';
import { LoginService } from './login.service';
import { catchError } from 'rxjs';
import { LocalStorageToken } from '../tokens/localstorage.token';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    @Inject(LocalStorageToken) private localstorage: any,
    private router:Router
    ) { }

  name: string = '';
  email: string = '';
  password: string = '';

  login() {

   try {
    if (this.password.length > 8) {
      this.loginService.login(this.email, this.password, this.name).subscribe(
        (user) => {
          this.localstorage.setItem('user',JSON.stringify(user));
          this.router.navigate(['/home']);
        }
      );
    }
   } catch (error) {
    console.log(error);
   }
  }

  loginTest(){
    let user  = this.loginService.loginTest(this.email, this.password, this.name);
    this.localstorage.setItem('user',JSON.stringify(user));
    this.router.navigate(['/home']);
  }
}
