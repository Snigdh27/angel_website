import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// ng-bootstrap module

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
