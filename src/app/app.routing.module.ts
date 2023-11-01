import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NgModule } from '@angular/core';
import { DatabaseButtonComponent } from './database-button/database-button.component';
import { DatabaseListComponent } from './database-list/database-list.component';
import { DatabaseTableComponent } from './database-table/database-table.component';
import { CardListComponent } from './card-list/card-list.component';

const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'database-btn', component: DatabaseButtonComponent },
  { path: 'database-list', component: DatabaseListComponent },
  { path: 'database-table', component: DatabaseTableComponent },
  {
    path: 'card',
    component: CardListComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
