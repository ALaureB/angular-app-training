import { Component, Input, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.deviceStatus === 'off') {
      return 'red';
    } else if (this.deviceStatus === 'on') {
      return 'green';
    }
  }

  onSwitch() {
    if (this.deviceStatus === 'on') {
      this.deviceService.switchOffOne(this.index);
    } else if (this.deviceStatus === 'off') {
      this.deviceService.switchOnOne(this.index);
    }
  }
}
