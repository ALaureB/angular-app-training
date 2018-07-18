import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

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

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onOn() {
    alert('All devices are on');
  }
}
