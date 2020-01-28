import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposComponent } from './repos/repos.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import {MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ReposComponent, RepoDetailsComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule
  ]
})
export class ReposModule { }
