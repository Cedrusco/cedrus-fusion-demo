import { Component, Injector } from '@angular/core';

import { CfDynamicComponentLoaderComponent } from 'cedrus-fusion';
import { CfButtonComponent } from 'cedrus-fusion';
import { CfWeatherComponent } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { WeatherComponentModel } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-dynamic-component-loader-example-one',
  template: '<p>ONE: {{ inputText }}</p>'
})
export class CfDemoDynamicComponentLoaderExampleOne {
  inputText: string;

  constructor(private injector: Injector) {
    this.inputText = this.injector.get('inputText');
  }
}

@Component({
  selector: 'cf-demo-dynamic-component-loader-example-two',
  template: '<button md-button="" (click)="onClick()">TWO</button>'
})
export class CfDemoDynamicComponentLoaderExampleTwo {
  onClick: () => void;

  constructor(private injector: Injector) {
    this.onClick = this.injector.get('onClick');
  }
}

@Component({
  moduleId: module.id,
  selector: 'cf-demo-dynamic-component-loader',
  templateUrl: './demo.dynamic-component-loader-1.html',
  styleUrls: ['./demo.dynamic-component-loader-1.css'],

  // * Important *: You must add any components you may wish to load dynamically
  // to the `entryComponents` array
  entryComponents: [
    CfDemoDynamicComponentLoaderExampleOne,
    CfDemoDynamicComponentLoaderExampleTwo,
    CfButtonComponent,
    CfWeatherComponent
  ]
})
export class CfDemoDynamicComponentLoader {

  selectedComponent: any;

  button = new ButtonModel ({
      label: "My CfButtonComponent"
  });
  weather = new WeatherComponentModel ({
      defaultCities: [ "Paris", "Beirut", "London", "Dubai" ],
      mode: "card",
      onItemClick: null
  });

  constructor() { }

  selectComponent(componentName) {
    switch (componentName) {
      case 1:
        this.selectedComponent = {
          component: CfDemoDynamicComponentLoaderExampleOne,
          inputs: {
            inputText: 'This is example one.'
          }
        };
        break;
      case 2:
        this.selectedComponent = {
          component: CfDemoDynamicComponentLoaderExampleTwo,
          inputs: {
            onClick: () => {
              alert('This is example two.');
            }
          }
        };
        break;
      case 3:
          this.selectedComponent = {
            component: CfButtonComponent,
            inputs: {
              settings: this.button
            }
          };
          break;
      case 4:
          this.selectedComponent = {
            component: CfWeatherComponent,
            inputs: {
              settings: this.weather
            }
          };
          break;
    }
  }

};
