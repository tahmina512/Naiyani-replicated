import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent {
  constructor(private router: Router) {}
  onPreviousPage() {
    this.router.navigate(['/sign-up']);
  }
  helpPage() {
    this.router.navigate(['/help']);
  }
}
