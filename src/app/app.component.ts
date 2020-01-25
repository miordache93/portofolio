import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portofolio';
  form: FormGroup;
  rating = 0;
  hovered = 0;
  date: Date = new Date();


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [this.emailValidator]],
      description: ['', [Validators.required]],
      rating: [this.rating, [Validators.required, this.ratingValidator]],
      newsLetter: [false]
    });
  }

  ngOnInit(): void {

  }

  submitForm() {
    console.log(this.form.value);
  }

  emailValidator(control) {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (control.value) {
      if(regExp.test(control.value)) {
        return null;
      } else {
        return {validateEmail: true};
      }
    }
  }

  ratingValidator(control) {
    if(control.value === 0) {
      return { validateRating: true};

    } else {
      return null;
    }
  }
}
