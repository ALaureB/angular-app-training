import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.deviceStatus === 'off') {
      return 'red';
    } else if (this.deviceStatus === 'on') {
      return 'green';
    }
  }

}
