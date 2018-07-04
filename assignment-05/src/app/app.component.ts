import { Component } from '@angular/core';

import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private usersService: UsersService) {}

  get operations(): number {
    return this.usersService.toggleStatusCounter || 0;
  }
}
