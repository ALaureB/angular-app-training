import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './services/device.service';
import { AuthComponent } from './auth/auth.component';
import { DevicesViewComponent } from './devices-view/devices-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleDeviceViewComponent } from './single-device-view/single-device-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'devices', component: DevicesViewComponent },
  { path: 'devices/:id', component: SingleDeviceViewComponent  },
  { path: 'auth', component: AuthComponent },
  { path: '', component: DevicesViewComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    AuthComponent,
    DevicesViewComponent,
    SingleDeviceViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
