import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _showParagraph: boolean;
  private _buttonClickLogList: Date[] = [];

  public onClickToggleParagraphDisplaying() {
    this._showParagraph = !this.showParagraph;
    this._buttonClickLogList.push(new Date());
  }

  public get showParagraph(): boolean {
    return this._showParagraph;
  }

  public get buttonClickLogList(): Date[] {
    return this._buttonClickLogList;
  }

}
