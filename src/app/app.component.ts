import { Component } from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'githab-test-task';
  user$: Observable<User>;

  constructor(appService: AppService) {
    this.user$ = appService.getUserData();
  }
}
