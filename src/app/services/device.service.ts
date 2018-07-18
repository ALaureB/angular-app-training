export class DeviceService {
    devices = [
        {
          name: 'fridge',
          status: 'on'
        },
        {
          name: 'oven',
          status: 'off'
        },
        {
          name: 'kettle',
          status: 'off'
        },
        {
          name: 'computer',
          status: 'on'
        },
        {
          name: 'television',
          status: 'on'
        }
    ];

    switchOnAll() {
        for(let device of this.devices) {
          device.status = 'on';
        }
    }

    switchOffAll() {
        for(let device of this.devices) {
          device.status = 'off';
        }
    }
}
