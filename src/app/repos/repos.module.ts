import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposComponent } from './repos/repos.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import {MatFormFieldModule, MatInputModule, MatListModule, MatSelectModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [ReposComponent, RepoDetailsComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexModule,
    MatSelectModule
  ]
})
export class ReposModule { }
