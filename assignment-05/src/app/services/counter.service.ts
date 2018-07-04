import { EventEmitter } from '@angular/core';

export class CounterService {
    public toggleStatusCounter = 1;
    public toggleStatusCounterUpdated: EventEmitter<number> = new EventEmitter<number>();

    public onToggleStatus() {
        this.toggleStatusCounterUpdated.emit(this.toggleStatusCounter++);
    }
}
