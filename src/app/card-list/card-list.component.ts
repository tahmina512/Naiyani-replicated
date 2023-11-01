import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  constructor(private router: Router) {}
  onPreviousPage() {
    this.router.navigate(['/database-list']);
  }
}
