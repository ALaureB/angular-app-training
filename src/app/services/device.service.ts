import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeviceService {

  devicesSubject = new Subject<any[]>();
  private devices = [];

  constructor(private httpClient: HttpClient) {}

  getDevicesFromServer() {
    this.httpClient
      .get<any[]>('https://angular-training-e6cf1.firebaseio.com/devices.json')
      .subscribe(
        (response) => {
          this.devices = response;
          this.emitDeviceSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  saveDevicesToServer() {
    this.httpClient
      .put('https://angular-training-e6cf1.firebaseio.com/devices.json', this.devices)
      .subscribe(
        () => {
          console.log('Saving over !');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }

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
