import { Inject, Injectable } from '@angular/core';
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

  constructor( @Inject(LocalStorageToken) private localstorage: any,) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(' from interceptor ');
    const data = localStorage.getItem('accessToken');
    console.log(data, ' from interceptor ');
    const newRequest = request.clone({ headers: new HttpHeaders({ token: '1234566789' }) });
    return next.handle(request);
  }
  
}
