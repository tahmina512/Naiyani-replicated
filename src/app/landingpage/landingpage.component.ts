import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button-input',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent implements OnInit {
  constructor(private router: Router) {}
  moveLogo: boolean = false;
  showDiv: Boolean = false;
  showIcons: Boolean = false;
  isUserVisible: Boolean = false;
  isPasswordVisible: Boolean = false;
  usernameValue: string = '';
  passwordValue: string = '';

  @ViewChild('usernameInput', { static: false }) usernameInput: ElementRef;
  @ViewChild('passwordInput', { static: false }) passwordInput: ElementRef;
  //show animation of text, rectangular border and move up
  ngOnInit(): void {
    setTimeout(() => {
      this.showDiv = true;
      setTimeout(() => {
        this.moveLogo = true;
        setTimeout(() => {
          this.showDiv = false;
          this.showIcons = true;
        }, 3000);
      }, 5300);
    }, 2000);
    setTimeout(() => {
      const myDiv = document.querySelector('.container') as HTMLElement;

      myDiv.classList.add('show-border');
    }, 9500);
  }
  //clicking animated next arrow button navigate to next page
  login() {
    this.router.navigate(['/database-btn']);
  }
  //clicks on username div,username input  box will be visible to type
  showUserBox(inputType: string) {
    if (inputType === 'username') {
      this.isUserVisible = true;
    }
    //to complete the transition from clicking the button and showing the input box before typing.
    setTimeout(() => {
      this.usernameInput.nativeElement.focus();
    });
  }
  //same for the password
  showPasswordBox(inputType: string) {
    if (inputType === 'password') {
      this.isPasswordVisible = true;
      setTimeout(() => {
        this.passwordInput.nativeElement.focus();
      });
    }
  }
  //when there is no value in input boxes, and user click outside the box, it will hide the input box and show the black background for the div here
  handleInputFocusout(inputType: string, event: FocusEvent): void {
    if (inputType === 'username') {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.value.trim() === '') {
        this.isUserVisible = false; // Hide the input box
      }
    }
    if (inputType === 'password') {
      const inputElement1 = event.target as HTMLInputElement;
      if (inputElement1.value.trim() === '') {
        this.isPasswordVisible = false; // Hide the input box
      }
    }
  }
  signupPage() {
    this.router.navigate(['/sign-up']);
  }
  helpPage() {
    this.router.navigate(['/help']);
  }
}
