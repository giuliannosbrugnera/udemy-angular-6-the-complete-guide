import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  public users: string[];

  constructor(private usersService: UsersService) {}

  // Good practice to initialize OnInit
  ngOnInit() {
    // Assignment by reference. Changes on UsersService will reflect to this.users
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
