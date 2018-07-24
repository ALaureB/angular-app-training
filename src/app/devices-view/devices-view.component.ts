import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.scss']
})
export class DevicesViewComponent implements OnInit, OnDestroy {
  devices: any[];
  deviceSubscription: Subscription;

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
    this.deviceSubscription = this.deviceService.devicesSubject.subscribe(
      (devices: any[]) => {
        this.devices = devices;
      }
    );
    this.deviceService.emitDeviceSubject();
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

  onSave() {
    this.deviceService.saveDevicesToServer();
  }

  ngOnDestroy() {
    this.deviceSubscription.unsubscribe();
  }

}
