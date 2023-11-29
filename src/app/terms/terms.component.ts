import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent {
  constructor(private router: Router, private location: Location) {}
  onPreviousPage() {
    // this.location.back();
    this.router.navigate(['/sign-up']);
  }
  helpPage() {
    this.router.navigate(['/help']);
  }
}
