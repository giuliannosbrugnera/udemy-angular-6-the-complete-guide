import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public signupForm: FormGroup;
  public genders = ['male', 'female'];
  private forbiddenUsernames = ['Chris', 'Ana'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this)
        ]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
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

  /**
   * forbiddenNames
   */
  // [s: string] is Typescript syntax for saying that the key can be interpreted as string
  public forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.some(_ => _ === control.value)) {
      return { nameIsForbidden: true };
    }

    // If validation is successful you should return null or omit the return
    return null;
  }

  /**
   * forbiddenEmails
   */
  public forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        }
        resolve(null);
      }, 1500);
    });

    return promise;
  }
}
