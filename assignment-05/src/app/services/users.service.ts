import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  public activeUsers: string[] = ['Max', 'Anna'];
  public inactiveUsers: string[] = ['Chris', 'Manu'];
  public toggleStatusCounter: number;

  public activeUsersUpdated: EventEmitter<string[]> = new EventEmitter<string[]>();
  public inactiveUsersUpdated: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private counterService: CounterService) {
    this.counterService.toggleStatusCounterUpdated.subscribe((counter: number) => this.toggleStatusCounter = counter);
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activeUsersUpdated.emit(this.activeUsers);
    this.counterService.onToggleStatus();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.inactiveUsersUpdated.emit(this.inactiveUsers);
    this.counterService.onToggleStatus();
  }
}
