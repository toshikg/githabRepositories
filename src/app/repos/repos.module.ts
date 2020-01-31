import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposComponent } from './repos/repos.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {RepoDescriptionEditComponent} from './repo-description-edit/repo-description-edit.component';



@NgModule({
  declarations: [ReposComponent, RepoDetailsComponent, RepoDescriptionEditComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule
  ]
})
export class ReposModule { }
