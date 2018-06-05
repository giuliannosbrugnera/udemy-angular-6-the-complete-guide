import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public username: string;

  /**
   * isUsernameEmpty
   *
   * True if username is an empty string; false otherwise
   */
  public isUsernameEmpty(): boolean {
    return this.username === '';
  }

  /**
   * resetUsername
   */
  public resetUsername() {
    this.username = '';
  }
}
