import { Injectable } from '@angular/core';

import { LoggingService } from './logging.service';

// This metadata tells Angular that something can be injected into this class
@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  // If you injecting a service into "something", this "something" must have some metadata (like Components have @Component)
  // Since this class represents an Angular Service, it must include the @Injectable metadata
  constructor(private logginService: LoggingService) {}

  /**
   * addAccount
   */
  public addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.logginService.logStatusChange(status);
  }

  /**
   * updateStatus
   */
  public updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
}
