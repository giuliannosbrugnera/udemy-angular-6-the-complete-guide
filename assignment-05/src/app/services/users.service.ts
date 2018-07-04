import { EventEmitter } from '@angular/core';

export class UsersService {
  public activeUsers: string[] = ['Max', 'Anna'];
  public inactiveUsers: string[] = ['Chris', 'Manu'];

  public activeUsersUpdated: EventEmitter<string[]> = new EventEmitter<string[]>();
  public inactiveUsersUpdated: EventEmitter<string[]> = new EventEmitter<string[]>();

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activeUsersUpdated.emit(this.activeUsers);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.inactiveUsersUpdated.emit(this.inactiveUsers);
  }
}
