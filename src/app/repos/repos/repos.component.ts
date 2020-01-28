import { Component, OnInit } from '@angular/core';
import {ReposService} from '../repos.service';
import {Repo} from './repos';
import {combineLatest, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  repos: Observable<Repo[]>;
  private filter: FormControl;
  private reposFiltered: Observable<Repo[]>;

  constructor(reposService: ReposService) {
    this.repos = reposService.getRepos();
    this.filter = new FormControl('');

    this.reposFiltered = combineLatest([
      this.repos,
      this.filter.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([repos, searchStr]) => {
        return repos.filter(h => h.name.toLowerCase().includes(searchStr.toLowerCase()));
      })
    );
  }

  ngOnInit() {
  }

}
