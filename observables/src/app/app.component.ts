import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public idActivated: number;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.userActivated.subscribe(
      (id: number) => (this.idActivated = id)
    );
  }

  /**
   * isUserActivated
   * @param id
   */
  public isUserActivated(id: number): boolean {
    return this.idActivated === id;
  }

  ngOnDestroy() {
    this.usersService.userActivated.unsubscribe();
  }
}
