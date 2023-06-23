import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
