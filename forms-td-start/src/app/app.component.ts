import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: false}) signIn: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signIn.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male'
    //
    //   }
    // });
    this.signIn.form.patchValue({userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  // console.log(form.value);
  // }
  onSubmit() {
  console.log(this.signIn);
  }
}
