import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

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
  @ViewChild('gallery', {static: false}) scrollTarget: any;
  foldContent = false;
  currentView = '';
  images = [];


  constructor(private fb: FormBuilder, @Inject(DOCUMENT) private document: Document) {
    this.form = this.fb.group({
      email: ['', [this.emailValidator]],
      message: ['', [Validators.required]],
      rating: [this.rating, [Validators.required, this.ratingValidator]],
      newsLetter: [false]
    });
  }

  ngOnInit(): void {
    this.images = [
      '../assets/images/stack/html.png',
      '../assets/images/stack/sass.png',
      '../assets/images/stack/bootstrap.png',
      '../assets/images/stack/javascript.png',
      '../assets/images/stack/angular.png',
      '../assets/images/stack/nodejs.png',
      '../assets/images/stack/mongodb.png',
      '../assets/images/stack/docker.png',
      '../assets/images/stack/azure.png'
    ];
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

  viewContent(viewType) {
    this.currentView = viewType;
    this.foldContent = !this.foldContent;
    if (this.foldContent) {
      this.scrollTarget.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
      this.document.body.classList.add('overflow-hidden');
    } else {
      this.document.body.classList.remove('overflow-hidden');
    }

  }

}

