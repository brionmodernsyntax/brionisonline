import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
