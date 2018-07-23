import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './services/device.service';
import { AuthComponent } from './auth/auth.component';
import { DevicesViewComponent } from './devices-view/devices-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { SingleDeviceViewComponent } from './single-device-view/single-device-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'devices', canActivate: [AuthGuard], component: DevicesViewComponent },
  { path: 'devices/:id', canActivate: [AuthGuard], component: SingleDeviceViewComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditDeviceComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component : UserListComponentComponent },
  { path: 'new-user', component :  NewUserComponent },
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
    NotFoundComponent,
    EditDeviceComponent,
    UserListComponentComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DeviceService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
