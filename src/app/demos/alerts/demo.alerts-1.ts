import { Component, ViewChild } from '@angular/core';
import { InputModel } from 'cedrus-fusion';

@Component ({
  moduleId: module.id,
	selector: 'cf-demo-alerts-1',
	templateUrl: './demo.alerts-1.html',
 	styleUrls: ['./demo.alerts-1.scss']
})

export class CfDemoAlerts1 {

	@ViewChild('demoAlertComponent') demoAlertComponent;

  demoTitle = new InputModel({
    placeholder: 'Enter alert title', maxLength: 50, iconProperty: null
  });

  demoMessage = new InputModel({ 
    placeholder: 'Enter alert message', maxLength: 50, iconProperty: null
  });

	showAlert() { 
    this.demoAlertComponent.showMessage({
      content: { 
        title: this.demoTitle.value,
        message: this.demoMessage.value
      }
    }); 
  }
}