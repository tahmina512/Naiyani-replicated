import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-database-button',
  templateUrl: './database-button.component.html',
  styleUrls: ['./database-button.component.scss'],
})
export class DatabaseButtonComponent {
  constructor(private router: Router) {}
  onPreviousPage() {
    this.router.navigate(['/']);
  }
  onNextPage() {
    this.router.navigate(['/database-list']);
  }
  helpPage() {
    this.router.navigate(['/help']);
  }
}
