import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FarmSphere';
   name:string = ''
   email: string = ''; // Bind email to the input element
  password: string = ''; // Bind password to the input element

}
