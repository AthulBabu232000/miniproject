import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeartrateComponent } from './heartrate/heartrate.component';
import { OxygenlevelComponent } from './oxygenlevel/oxygenlevel.component';
import { HeaderComponent } from './header/header.component';
import { BloodpressureComponent } from './bloodpressure/bloodpressure.component';

@NgModule({
  declarations: [
    AppComponent,
    HeartrateComponent,
    OxygenlevelComponent,
    HeaderComponent,
    BloodpressureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
