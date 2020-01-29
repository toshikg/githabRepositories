import { Component, OnInit } from '@angular/core';
import {ReposService} from '../repos.service';
import {Repo} from './repos';
import {combineLatest, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import * as _orderBy from 'lodash/orderBy';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  repos: Observable<Repo[]>;
  private filterCtrl: FormControl;
  private reposFiltered: Observable<Repo[]>;
  sorting: string[];
  sortNames = {
    DATE_ASC: 'Date ASC',
    DATE_DESC: 'Date DESC',
    TITLE_ASC: 'Title ASC',
    TITLE_DESC: 'Title DESC',
  };
  private sortingCtrl: FormControl;

  constructor(reposService: ReposService) {
    this.repos = reposService.getRepos();
    this.filterCtrl = new FormControl('');
    this.sortingCtrl = new FormControl('');

    this.reposFiltered = combineLatest([
      this.repos,
      this.filterCtrl.valueChanges.pipe(startWith('')),
      this.sortingCtrl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([repos, searchStr, sort]) => {
        const filteredRepos = repos.filter(h => h.name.toLowerCase().includes(searchStr.toLowerCase()));
        const sortField = sort.startsWith('DATE') ? 'updated_at' : 'name';
        const sortDirection = sort.indexOf('ASC') > -1 ? 'asc' : 'desc';

        return _orderBy(filteredRepos, [sortField], [sortDirection]);
      })
    );

    this.sorting = ['DATE_ASC', 'DATE_DESC', 'TITLE_ASC', 'TITLE_DESC'];
  }

  ngOnInit() {
  }

}
