import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Octave Data Dashboard</h1>
    <div>
        <div>indicators</div>
        <div>panels</div>
    </div>
  `,
})
export class App {
  name = 'Angular';
  pressureData = [];
  airData = [];
  temperatureData = [];
  lightData = [];
}

bootstrapApplication(App);
