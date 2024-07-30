import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { DisplayComponent } from './display/display.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimerService } from './timer/timer.service';
import { AlertViewComponent } from './alert-view/alert-view.component';
import { FormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    DisplayComponent,
    ProgressBarComponent,
    AlertViewComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
