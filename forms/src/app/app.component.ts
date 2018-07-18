import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

class User {
  username: string;
  email: string;
  secretQuestion: string;
  answer: string;
  gender: string;
}

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
  public user: User = new User();
  public submitted: boolean;

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
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
    this.signupForm.reset();
  }
}
