import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageToken } from './tokens/localstorage.token';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    const newRequest = request.clone({headers: new HttpHeaders({Authorization: `Bearer ${accessToken}`})});
    return next.handle(newRequest);
  }
}
