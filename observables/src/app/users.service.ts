import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Subject is an Observable and an Observer at the same time
  public userActivated: Subject<number> = new Subject<number>();
}
