import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent {
  constructor(private router: Router, private location: Location) {}
  onPreviousPage() {
    // this.router.navigate(['']);
    this.location.back();
  }
  helpPage() {
    this.router.navigate(['/help']);
  }
}
