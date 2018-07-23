import { Subject } from 'rxjs';

export class DeviceService {

  devicesSubject = new Subject<any[]>();

  private devices = [
    {
      id: 1,
      name: 'fridge',
      status: 'on'
    },
    {
      id: 2,
      name: 'oven',
      status: 'off'
    },
    {
      id: 3,
      name: 'kettle',
      status: 'off'
    },
    {
      id: 4,
      name: 'computer',
      status: 'on'
    },
    {
      id: 5,
      name: 'television',
      status: 'on'
    }
  ];

  emitDeviceSubject() {
    this.devicesSubject.next(this.devices.slice());
  }

  switchOnAll() {
    for (let device of this.devices) {
      device.status = 'on';
    }
    this.emitDeviceSubject();
  }

  switchOffAll() {
    for (let device of this.devices) {
      device.status = 'off';
    }
    this.emitDeviceSubject();
  }

  switchOnOne(i: number) {
    this.devices[i].status = 'on';
    this.emitDeviceSubject();
  }

  switchOffOne(i: number) {
    this.devices[i].status = 'off';
    this.emitDeviceSubject();
  }

  getDeviceById(id: number) {
    const device = this.devices.find(
      (s) => {
        return s.id === id;
      }
    );
    return device;
  }

  addDevice(name: string, status: string) {
    const deviceObject = {
      id: 0,
      name: '',
      status: ''
    };
    deviceObject.name = name;
    deviceObject.status = status;
    deviceObject.id = this.devices[(this.devices.length - 1)].id + 1;
    console.log(deviceObject);
    this.devices.push(deviceObject);
    this.emitDeviceSubject();
  }

}
