import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatExpansionPanel } from '@angular/material/expansion';
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
  ) {}
  //hover on the expansion panel header and panel will be expanded
  onAccordionHover(accordionPanel: MatExpansionPanel, isHovered: boolean) {
    if (isHovered) {
      accordionPanel.open(); // Open the panel on hover
    }
  }
  //for now , back button will navigate to the previous page from where it was called
  onPreviousPage() {
    this.location.back();
  }
  navigateToHome() {
    this.router.navigate(['/database-btn']);
  }
}
