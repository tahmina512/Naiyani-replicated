import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DatabaseButtonComponent } from './database-button/database-button.component';
import { DatabaseListComponent } from './database-list/database-list.component';
import { DatabaseTableComponent } from './database-table/database-table.component';
import { CardListComponent } from './card-list/card-list.component';
import { AppRoutingModule } from './app.routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    DatabaseButtonComponent,
    DatabaseListComponent,
    DatabaseTableComponent,
    CardListComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
