import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  public users: string[];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.activeUsers;
    this.usersService.activeUsersUpdated.subscribe((activeUsers: string[]) => this.users = activeUsers);
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
