import { Component, OnInit } from '@angular/core';
import {ReposService} from '../repos.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Repo} from '../repos/repos';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {
  private repo$: Observable<Repo>;

  constructor(
    private reposService: ReposService,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    const repoId = parseInt(this.route.snapshot.params.id, 0);
    this.repo$ = this.reposService.getRepoById(repoId);
  }

  getArchiveLink(repo: Repo) {
    return `https://github.com/${repo.owner.login}/${repo.name}/archive/master.zip`;
  }

  save(description, repo: Repo) {
    const updatedRepo = {...repo, description};

    this.reposService.updateRepo(repo.id, updatedRepo).subscribe();
  }

}
