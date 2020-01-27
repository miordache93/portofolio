import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../environments/environment';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

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
  revies = REVIEWS;
  flipDiv = false;


  constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [this.emailValidator]],
      message: ['', [Validators.required]],
      rating: [this.rating, [Validators.required, this.ratingValidator]],
      newsLetter: [false]
    });
  }

  ngOnInit(): void {

  if (!isPlatformBrowser(this.platformId)) {
    const bases = this.document.getElementsByTagName('base');

    if (bases.length > 0) {
        bases[0].setAttribute('href', environment.baseHref);
    }
}}

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

  flipContent() {
    this.flipDiv = !this.flipDiv;
  }
}

const REVIEWS = [
  {
    id: 0,
    name: 'Alex',
    rating: 5,
    message: 'Nice piece of work. Well done!',
    avatarUrl: '../assets/images/avatar.jpeg'
  },
  {
    id: 1,
    name: 'Michael',
    rating: 3,
    message: 'Nice piece of work. Well done!',
    avatarUrl: '../assets/images/avatar.jpeg'
  },
  {
    id: 2,
    name: 'Lennon',
    rating: 3,
    message: 'Nice piece of work. Well done!',
    avatarUrl: '../assets/images/avatar.jpeg'
  },
  {
    id: 3,
    name: 'Mark',
    rating: 3,
    message: 'Nice piece of work. Well done!',
    avatarUrl: '../assets/images/avatar.jpeg'
  },
  {
    id: 4,
    name: 'Austin',
    rating: 3,
    message: 'Nice piece of work. Well done!',
    avatarUrl: '../assets/images/avatar.jpeg'
  }
];
