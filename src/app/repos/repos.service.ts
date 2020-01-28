import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Repo} from './repos/repos';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  private api = environment.gitHabUrl;
  constructor(private http: HttpClient) {}

  getRepos(): Observable<Repo[]> {
    const url = `${this.api}/users/toshikg/repos`;

    return this.http.get<Repo[]>(url);
  }
}
