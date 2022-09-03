import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { QuerybuilderComponent } from './querybuilder/querybuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavComponent,
    QuerybuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
