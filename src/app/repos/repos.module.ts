import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposComponent } from './repos/repos.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';



@NgModule({
  declarations: [ReposComponent, RepoDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class ReposModule { }
