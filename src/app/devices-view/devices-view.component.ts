import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.scss']
})
export class DevicesViewComponent implements OnInit {
  devices: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private deviceService: DeviceService) { }

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
