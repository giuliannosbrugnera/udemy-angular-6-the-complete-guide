import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  public signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  /**
   * onSubmit()
   */
  public onSubmit() {
    console.log(this.signupForm);
  }

  /**
   * onAddHobby
   */
  public onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get hobbyControls(): AbstractControl[] {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
