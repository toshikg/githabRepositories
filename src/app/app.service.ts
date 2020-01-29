import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private api = environment.gitHabUrl;
  constructor(private http: HttpClient) { }

  getUserData(): Observable<User> {
    const url = `${this.api}/user`;

    return this.http.get<User>(url);
  }
}
