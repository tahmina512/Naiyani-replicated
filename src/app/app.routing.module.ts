import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NgModule } from '@angular/core';
import { DatabaseButtonComponent } from './database-button/database-button.component';
import { DatabaseListComponent } from './database-list/database-list.component';
import { DatabaseTableComponent } from './database-table/database-table.component';
import { CardListComponent } from './card-list/card-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { MatGridComponent } from './mat-grid/mat-grid.component';

const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'database-btn', component: DatabaseButtonComponent },
  { path: 'database-list', component: DatabaseListComponent },
  { path: 'database-table', component: DatabaseTableComponent },
  {
    path: 'product-list',
    component: CardListComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'help',
    component: HelpPageComponent,
    data: { returnUrl: '/' },
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'policy',
    component: PolicyComponent,
  },
  {
    path: 'image',
    component: ImageZoomComponent,
  },
  
    {
    path: 'mat-grid',
    component: MatGridComponent,
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
