import { Component, OnInit } from '@angular/core';
import {ReposService} from '../repos.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Repo} from '../repos/repos';
import {tap} from 'rxjs/operators';
import * as _base64 from 'base-64';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {
  repo$: Observable<Repo>;
  editDescriptionMode = false;
  showError: boolean;
  unsavedVersion: string;
  readme$: Observable<any>;

  constructor(
    private reposService: ReposService,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    const repoId = parseInt(this.route.snapshot.params.id, 0);
    this.repo$ = this.reposService.getRepoById(repoId).pipe(
      tap((repo) => {
        if (!repo) { return; }

        this.unsavedVersion = this.reposService.getDescFromLocalStorage(repo.id);

        if (this.unsavedVersion) {
          this.editDescriptionMode = true;
        }
      })
    );

    this.readme$ = this.reposService.getReadme(repoId);
  }

  getArchiveLink(repo: Repo) {
    return `https://github.com/${repo.owner.login}/${repo.name}/archive/master.zip`;
  }

  save(description, repo: Repo) {
    const updatedRepo = {...repo, description};

    this.reposService.updateRepo(repo.id, updatedRepo).subscribe(() => {
      this.closeEditMode();
      this.unsavedVersion = null;
    }, () => {
      this.showError = true;
    });
  }

  closeEditMode() {
    this.editDescriptionMode = false;
    this.unsavedVersion = null;
  }

  editDescription() {
    this.editDescriptionMode = true;
  }

  decode(str) {
    return _base64.decode(str);
  }

}
