export class DeviceService {
    devices = [
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

    switchOnAll() {
      for (let device of this.devices) {
        device.status = 'on';
      }
    }

    switchOffAll() {
      for (let device of this.devices) {
        device.status = 'off';
      }
    }

    switchOnOne(i: number) {
      this.devices[i].status = 'on';
    }

    switchOffOne(i: number) {
      this.devices[i].status = 'off';
    }

    getDeviceById(id: number) {
      const device = this.devices.find(
        (s) => {
          return s.id === id;
        }
      );
      return device;
    }

}
