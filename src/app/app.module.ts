import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { CProfileComponent } from './components/cards/c-profile/c-profile.component';
import { CActivityComponent } from './components/cards/c-activity/c-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    CProfileComponent,
    CActivityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
