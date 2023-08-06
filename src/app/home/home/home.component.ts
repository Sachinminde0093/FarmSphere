import { Component, Inject } from '@angular/core';
import { LocalStorageToken } from 'src/app/tokens/localstorage.token';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(@Inject(LocalStorageToken) private localstorage: any){}

  ngOnInit(): void {
  
   console.log(this.localstorage.getItem('user').email);
   const data = localStorage.getItem('user');
   let user =  data ? JSON.parse(data) : null
   console.log(user.email);
  }

}
