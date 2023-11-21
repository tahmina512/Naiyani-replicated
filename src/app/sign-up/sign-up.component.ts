import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private router: Router) {}
  onPreviousPage() {
    this.router.navigate(['']);
  }
  helpPage() {
    this.router.navigate(['/help']);
  }
  goToTerms() {
    this.router.navigate(['/terms']);
  }
  gotToPolicy() {
    this.router.navigate(['/policy']);
  }
}
