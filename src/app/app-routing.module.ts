import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReposComponent} from './repos/repos/repos.component';
import {RepoDetailsComponent} from './repos/repo-details/repo-details.component';


const routes: Routes = [
  {
    path: 'repos',
    component: ReposComponent
  },
  {
    path: 'repos/:id',
    component: RepoDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'repos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
