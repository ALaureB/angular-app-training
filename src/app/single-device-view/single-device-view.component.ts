import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-device-view',
  templateUrl: './single-device-view.component.html',
  styleUrls: ['./single-device-view.component.scss']
})
export class SingleDeviceViewComponent implements OnInit {

  name = 'Device';
  status = 'Status';

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.deviceService.getDeviceById(+id).name;
    this.status = this.deviceService.getDeviceById(+id).status;
  }

}
