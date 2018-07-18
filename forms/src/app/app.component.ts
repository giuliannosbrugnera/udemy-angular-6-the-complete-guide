import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  public defaultQuestion = 'pet';
  public answer: string;
  public genders: string[] = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /**
   * onSubmit
   */
  // public onSubmit(form: NgForm): void {
  //   console.log(form);
  // }
  public onSubmit(): void {
    console.log(this.signupForm);
  }
}
