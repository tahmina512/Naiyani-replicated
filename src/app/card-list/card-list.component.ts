import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
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
  isHovered = false;
  hoveredProductIndex: number | null = null;
  constructor(
    private cardListService: CardListService,
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}
  calculateVisibleHeight(): string {
    const windowHeight = window.innerHeight;
    return `${windowHeight - 5}px`; // Adjust the value as needed
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateHorizontalScrollerHeight();
  }

  ngAfterViewInit(): void {
    this.updateHorizontalScrollerHeight();
  }

  private updateHorizontalScrollerHeight(): void {
    const calculatedHeight = this.calculateVisibleHeight();

    // Defer the change detection check
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }
  ngOnInit() {
    this.cardListService.getData().subscribe(
      (result: any[]) => {
        // console.log('Data from the backend:', result);

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
        // console.log('Data in the component:', this.product);
      },
      (error) => {
        console.error('Error in the component:', error);
      }
    );
  }
  // calculateVisibleHeight(): string {
  //   const windowHeight = window.innerHeight;
  //   return `${windowHeight - 20}px`; // Adjust the value as needed
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.updateHorizontalScrollerHeight();
  // }

  // ngAfterViewInit(): void {
  //   this.updateHorizontalScrollerHeight();
  // }

  // private updateHorizontalScrollerHeight(): void {
  //   const calculatedHeight = this.calculateVisibleHeight();
  //   this.renderer.setStyle(
  //     this.elementRef.nativeElement,
  //     'height',
  //     calculatedHeight
  //   );
  // }
  onPreviousPage() {
    this.router.navigate(['/database-list']);
  }
  helpPage() {
    this.router.navigate(['/help']);
  }
  setHover(value: boolean, index: number) {
    this.isHovered = value;
    this.hoveredProductIndex = value ? index : null;
  }

  hideImage() {
    this.isHovered = false;
    this.hoveredProductIndex = null;
  }
}
