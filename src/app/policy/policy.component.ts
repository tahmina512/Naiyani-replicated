import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent {
  constructor(private router: Router) {}
  onPreviousPage() {
    this.router.navigate(['/sign-up']);
  }
  helpPage() {
    this.router.navigate(['/help']);
  }
}
