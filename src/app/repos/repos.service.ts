import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Repo} from './repos/repos';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  private api = environment.gitHabUrl;
  private repos: Repo[] = [];

  constructor(private http: HttpClient) {
  }

  private fetchRepos(): Observable<Repo[]> {
    const url = `${this.api}/users/toshikg/repos`;

    return this.http.get<Repo[]>(url);
  }

  getRepos(): Observable<Repo[]> {
    if (this.repos.length === 0) {
      return this.fetchRepos().pipe(
        tap(repos => this.repos = repos)
      );
    } else {
      return of(this.repos);
    }
  }

  private fetchRepo(id: number): Observable<Repo> {
    const url = `${this.api}/repositories/${id}`;

    return this.http.get<Repo>(url);
  }

  getRepoById(id: number): Observable<Repo> {
    const repoCached = this.repos.find(r => r.id === id);

    if (repoCached) {
      return of(repoCached);
    } else {
      return this.fetchRepo(id);
    }
  }
}
