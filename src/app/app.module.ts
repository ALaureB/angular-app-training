import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './services/device.service';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
