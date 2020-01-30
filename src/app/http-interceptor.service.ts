import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqEdited = req.clone({
      setHeaders: {
        Authorization: 'Bearer c52d5fcc64b7a408fb9fefd594e7e30ce7ed7385'
      }
    });

    return next.handle(reqEdited);
  }
}
