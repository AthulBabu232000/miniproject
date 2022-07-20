import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeartrateComponent } from './heartrate/heartrate.component';
import { HeaderComponent } from './header/header.component';
import { BloodpressureComponent } from './bloodpressure/bloodpressure.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayerComponent } from './displayer/displayer.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailentryComponent } from './detailentry/detailentry.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HeartrateComponent },
  { path: 'display', component: DisplayerComponent },
  { path: 'form', component: DetailentryComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HeartrateComponent,
    HeaderComponent,
    BloodpressureComponent,
    DisplayerComponent,
    DetailentryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
