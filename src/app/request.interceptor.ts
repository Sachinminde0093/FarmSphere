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

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const skipTokenHeader = request.headers.get('skipToken');
    const isSkipToken = skipTokenHeader === 'true';

    if (isSkipToken) {
      request = request.clone({
        headers: request.headers.delete('skipToken'),
      });
    } else {
      const accessToken = localStorage.getItem('accessToken');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    // Continue with the modified request
    return next.handle(request);
  }
}
