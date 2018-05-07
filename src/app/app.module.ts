import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AnijeffComponent } from './anijeff/anijeff.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    AnijeffComponent,
    ContactComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
