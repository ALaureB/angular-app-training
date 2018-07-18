import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;
  devices: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private deviceService: DeviceService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.devices = this.deviceService.devices;
  }

  onOn() {
    this.deviceService.switchOnAll();
  }

  onOff() {
    if (confirm('Do you want to switch off all devices ?')) {
      this.deviceService.switchOffAll();
    } else {
      return null;
    }
  }
}