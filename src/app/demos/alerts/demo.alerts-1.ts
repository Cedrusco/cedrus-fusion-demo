import { Component, ViewChild } from '@angular/core';
import { AlertModel, InputModel } from 'cedrus-fusion';

@Component ({
  moduleId: module.id,
	selector: 'cf-demo-alerts-1',
	templateUrl: './demo.alerts-1.html',
 	styleUrls: ['./demo.alerts-1.scss']
})

export class CfDemoAlerts1 {
	@ViewChild('demoAlertComponent') demoAlertComponent;

  demoAlert = new AlertModel({
    options: {
      theme: { class: "mat-toolbar mat-primary" },
    }
  });

	showAlert() { 
    this.demoAlert.message = this.demoInput.value;
    this.demoAlertComponent.showMessage(this.demoAlert); 
  }

  demoInput = new InputModel({
    placeholder: 'Enter text here',
    maxLength: 50,
    iconProperty: null
  });
}