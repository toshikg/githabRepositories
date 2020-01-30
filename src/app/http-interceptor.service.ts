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
        Authorization: 'Bearer be879f1d8b5e89f636e756bd23403cca0adc7aab'
      }
    });

    return next.handle(reqEdited);
  }
}
