import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _counters: number[] = [];

  /**
   * Hook that listens to the numberIncremented event emitted
   * @param counter number emmitted from the game-control component
   */
  public onNumberIncremented(counter: number) {
    this._counters.push(counter);
  }

  public get counters(): number[] {
    return this._counters;
  }
}
