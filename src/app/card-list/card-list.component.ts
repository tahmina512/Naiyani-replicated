import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardListService } from './card-list.service';
import { Leads } from './card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  data: any;
  product: Leads[] = [];
  constructor(
    private cardListService: CardListService,
    private router: Router
  ) {}
  ngOnInit() {
    this.cardListService.getData().subscribe(
      (result: any[]) => {
        console.log('Data from the backend:', result);

        this.product = result.map(
          (item) =>
            new Leads(
              item.ASIN,
              item.Amazon_FBA_estimated_fees,
              item.Amazon_Price,
              item.Amazon_URL,
              item.Amazon_on_Listing,
              item.Est_Sales_Rank,
              item.Estimated_Gross_Profit,
              item.Estimated_Gross_Profit_Margin,
              item.Estimated_Monthly_Sales,
              item.Estimated_Net_Profit,
              item.Estimated_Net_Profit_Margin,
              item.Image_Link,
              item.Number_of_Reviews,
              item.Number_of_sellers_on_the_listing,
              item.Product_Image,
              item.Product_Name,
              item.Sales_Rank_30_days,
              item.Sales_Rank_90_days,
              item.Sourcing_Price,
              item.Sourcing_URL
            )
        );
        console.log('Data in the component:', this.product);
      },
      (error) => {
        console.error('Error in the component:', error);
      }
    );
  }
  onPreviousPage() {
    this.router.navigate(['/database-list']);
  }
  helpPage() {
    this.router.navigate(['/help']);
  }
}
