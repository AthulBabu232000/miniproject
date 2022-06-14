import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeartrateComponent } from './heartrate/heartrate.component';
import { HeaderComponent } from './header/header.component';
import { BloodpressureComponent } from './bloodpressure/bloodpressure.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeartrateComponent,
    HeaderComponent,
    BloodpressureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
