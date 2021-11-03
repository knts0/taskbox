import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BalloonMenuComponent } from './components/balloon-menu/balloon-menu.component';

@NgModule({
  declarations: [
    AppComponent,

    BalloonMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
