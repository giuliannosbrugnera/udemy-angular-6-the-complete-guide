import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  public users: string[];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.inactiveUsers;
    this.usersService.inactiveUsersUpdated.subscribe((inactiveUsers: string[]) => this.users = inactiveUsers);
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
