import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.scss'],
})
export class DatabaseListComponent {
  constructor(private router: Router) {}
  onPreviousPage() {
    this.router.navigate(['/database-btn']);
  }
  //View ALl button will show all product details
  ViewAllSection() {
    this.router.navigate(['/product-list']);
  }
  //for specific product (Books) just for now will show only layout
  ViewSection() {
    this.router.navigate(['/database-table']);
  }
  helpPage() {
    this.router.navigate(['/help']);
  }
}
