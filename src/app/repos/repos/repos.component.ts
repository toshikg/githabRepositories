import { Component, OnInit } from '@angular/core';
import {ReposService} from '../repos.service';
import {Repo} from './repos';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  repos: Observable<Repo[]>;

  constructor(reposService: ReposService) {
    this.repos = reposService.getRepos();
  }

  ngOnInit() {
  }

}
