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
  isScrolledAtTop: boolean = true;
  lastScrollPosition: number = 0;

  constructor(
    private cardListService: CardListService,
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const isScrollMenu = (event.target as HTMLElement).classList?.contains(
      'scrollmenu'
    );

    if (isScrollMenu) {
      const scrollY = (event.target as HTMLElement).scrollTop;

      this.isScrolledAtTop = scrollY === 0;

      // this.cdr.detectChanges();
    }
  }
  calculateVisibleHeight(): string {
    const windowHeight = window.innerHeight;
    return `${windowHeight}px`;
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
  setHover(value: boolean, index: number) {
    this.isHovered = value;
    this.hoveredProductIndex = value ? index : null;
  }

  hideImage() {
    this.isHovered = false;
    this.hoveredProductIndex = null;
  }
}
