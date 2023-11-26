import { Component, OnInit } from '@angular/core';
import { Leads } from '../card-list/card.model';
import { CardListService } from '../card-list/card-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-grid',
  templateUrl: './mat-grid.component.html',
  styleUrls: ['./mat-grid.component.scss'],
})
export class MatGridComponent implements OnInit {
  data: any;
  product: Leads[] = [];
  isHovered = false;
  hoveredProductIndex: number | null = null;
  constructor(
    private cardListService: CardListService,
    private router: Router
  ) {}
  ngOnInit() {
   
  }
  onPreviousPage() {
    this.router.navigate(['/database-list']);
  }
  helpPage() {
    this.router.navigate(['/help']);
  }

}
