import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  public toggleStatusCounter = 1;
  public toggleStatusCounterUpdated: EventEmitter<number> = new EventEmitter<number>();

  public onToggleStatus() {
    this.toggleStatusCounterUpdated.emit(this.toggleStatusCounter++);
  }
}
