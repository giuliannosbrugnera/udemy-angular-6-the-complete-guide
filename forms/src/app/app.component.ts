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
    // This method expects an exact representation of the form object
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
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
