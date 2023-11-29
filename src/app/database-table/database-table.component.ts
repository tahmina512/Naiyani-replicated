import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-database-table',
  templateUrl: './database-table.component.html',
  styleUrls: ['./database-table.component.scss'],
})
export class DatabaseTableComponent {
  constructor(private router: Router) {}
  onPreviousPage() {
    this.router.navigate(['/database-list']);
  }
}
