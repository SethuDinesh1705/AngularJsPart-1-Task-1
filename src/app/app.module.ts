import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { ManualComponent } from './manual/manual.component';
@NgModule({
  declarations: [AppComponent, AutoComponent, ManualComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
