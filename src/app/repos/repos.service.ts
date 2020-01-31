import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Repo} from './repos/repos';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  private api = environment.gitHabUrl;
  private repos$ = new BehaviorSubject([]);
  callState = {
    loading: false,
    loaded: false,
  };

  constructor(private http: HttpClient) {
  }

  private fetchRepos(): Observable<Repo[]> {
    const url = `${this.api}/users/toshikg/repos`;

    return this.http.get<Repo[]>(url);
  }

  getRepos(): Observable<Repo[]> {
    if (!this.callState.loaded && !this.callState.loading) {
      this.callState.loading = true;
      return this.fetchRepos().pipe(
        tap(repos => {
          this.repos$.next(repos);
          this.callState.loading = false;
          this.callState.loaded = true;
        })
      );
    } else {
      return this.repos$;
    }
  }

  getRepoById(id: number): Observable<Repo> {
    if (!this.callState.loaded && !this.callState.loading) {
      this.getRepos().subscribe();
    }

    return this.repos$.pipe(
      map(repos => repos.find(r => r.id === id))
    );
  }

  updateRepo(id: number, data: Repo) {
    const url = `${this.api}/repositories/${id}`;

    return this.http.patch<Repo>(url, data).pipe(
      tap(() => this.updateRepoState(id, data))
    );
  }

  getReadme(id: number) {
    const url = `${this.api}/repositories/${id}/readme`;

    return this.http.get(url);
  }

  saveDescToLocalStorage(repoId, text) {
    const descStrObj = localStorage.getItem('description');
    const descObj = descStrObj ? JSON.parse(descStrObj) : {};
    descObj[repoId] = text;
    localStorage.setItem('description', JSON.stringify(descObj));
  }

  getDescFromLocalStorage(repoId) {
    const descObj = JSON.parse(localStorage.getItem('description')) || {};
    return descObj[repoId];
  }

  private updateRepoState(id, data) {
    this.repos$.pipe(
      take(1),
      tap(repos => {
        const reposUpdated = repos.map(r => (r.id === id) ? data : r);
        this.repos$.next(reposUpdated);
      })
    ).subscribe();
  }
}
