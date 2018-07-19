import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './services/device.service';
import { AuthComponent } from './auth/auth.component';
import { DevicesViewComponent } from './devices-view/devices-view.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'devices', component: DevicesViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: DevicesViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    AuthComponent,
    DevicesViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
