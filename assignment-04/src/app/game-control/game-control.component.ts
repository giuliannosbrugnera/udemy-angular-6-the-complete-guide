import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private counter = 0;
  private _disabled = false;
  private intervalID: NodeJS.Timer;

  // @Output makes the property listenable from the outside of the component
  @Output()
  private numberIncremented: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  /**
   * onGameStarting
   */
  public onGameStarting(): void {
    this.intervalID = setInterval(() => {
      this._disabled = true;
      this.numberIncremented.emit(this.counter++);
    }, 1000);
  }

  /**
   * onGameStopping
   */
  public onGameStopping() {
    clearInterval(this.intervalID);
    this._disabled = false;
  }

  public get disabled(): boolean {
    return this._disabled;
  }
}
