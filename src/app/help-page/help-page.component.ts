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
  // onAccordionHover(panel: MatExpansionPanel, isHovered: boolean) {
  //   if (isHovered) {
  //     panel.open();
  //   } else {
  //     panel.close();
  //   }
  // }

  onAccordionHover(accordionPanel: MatExpansionPanel, isHovered: boolean) {
    if (isHovered) {
      accordionPanel.open(); // Open the panel on hover
    }
  }
  onPreviousPage() {
    this.location.back();
  }
  navigateToHome()
  {
    this.router.navigate(['/database-btn']);
  }
}
