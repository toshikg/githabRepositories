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
        Authorization: 'Bearer 58917b411e3df934145----------e6fd8f1a36a16528cb7cc'
      }
    });

    return next.handle(reqEdited);
  }
}
