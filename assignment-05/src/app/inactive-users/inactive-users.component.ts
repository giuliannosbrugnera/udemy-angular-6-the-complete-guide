import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  public users: string[];

  constructor(private usersService: UsersService) {}

  // Good practice to initialize OnInit
  ngOnInit() {
    // Assignment by reference. Changes on UsersService will reflect to this.users
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
