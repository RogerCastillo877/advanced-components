import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { DisplayComponent } from './display/display.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimerService } from './timer/timer.service';
import { TimerNativeComponent } from './timer-native/timer.component';
import { TimerNoneComponent } from './timer-none/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerNativeComponent,
    TimerNoneComponent,
    DisplayComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
