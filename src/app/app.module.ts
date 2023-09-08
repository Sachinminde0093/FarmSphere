import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { CreatePostService } from './home/create-post/create-post.service';
import { LocalStorageToken } from './tokens/localstorage.token';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { RequestInterceptor } from './request.interceptor';


const token = localStorage.getItem('accessToken');

const config: SocketIoConfig = { url: 'http://localhost:8080', options: { auth: { token: token }, } };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    CreatePostService
   
  ],
  bootstrap: [AppComponent, HomeModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
