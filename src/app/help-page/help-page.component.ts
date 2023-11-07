import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss'],
})
export class HelpPageComponent {
  returnUrl: string;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
  }
  onPreviousPage() {
    // if (this.returnUrl) {
    //   this.router.navigate([this.returnUrl]);
    // } else {
    //   // Handle the case where there's no returnUrl defined
    //   // You can navigate to a default page or handle it as needed
    //   this.router.navigate(['/']);
    // }
    this.location.back();
  }
}
