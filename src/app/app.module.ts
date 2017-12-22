import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
// import {Ng4TwitterTimelineModule} from 'ng4-twitter-timeline/lib/index';
import { Ng2Timeline } from 'ng2-timeline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Ng2Timeline
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
