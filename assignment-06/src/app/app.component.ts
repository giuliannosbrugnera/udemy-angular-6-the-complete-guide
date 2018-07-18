import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') private signupForm: NgForm;
  public submitted: boolean;
  public data = {
    email: '',
    subscription: '',
    password: ''
  };

  /**
   * onSubmit
   */
  public onSubmit(): void {
    this.data.email = this.signupForm.value.email;
    this.data.subscription = this.signupForm.value.subscription;
    this.data.password = this.signupForm.value.password;
    this.submitted = true;
    this.signupForm.reset();
  }
}
