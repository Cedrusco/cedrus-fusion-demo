import { Component, ViewChild } from '@angular/core';
import { AlertModel, ButtonModel } from 'cedrus-fusion';

@Component ({
  moduleId: module.id,
	selector: 'cf-demo-alerts-2',
	templateUrl: './demo.alerts-2.html',
 	styleUrls: ['./demo.alerts-2.scss']
})

export class CfDemoAlerts2 {
	@ViewChild('alertsComp') alertsComp;

	messageButton = new ButtonModel({label: "Show message"});
  warningButton = new ButtonModel({label: "Show warning"});
  errorButton = new ButtonModel({label: "Show error"});

  myMessage = new AlertModel({
    message: "This is demo info message",
    options: {
      timeOut: 7000,
      extendedTimeOut: 0,
      positionClass: "toast-top-left",
      confirmIcon: {
        name: "stars",
        type: "mi"
      },
      cancelIcon: {
        name: "star",
        type: "mi"
      },
      theme: { class: "mat-toolbar mat-primary" },
    }
  });

  myWarning = new AlertModel({
    message: "This is demo warn message",
    options: {
      timeOut: 1000,
      extendedTimeOut: 0,
      positionClass: "toast-top-right",
      theme: { class: "mat-toolbar mat-accent" },
    }
  });

  myError = new AlertModel({
    message: "This is demo error message",
    options: {
      timeOut: 3000,
      extendedTimeOut: 0,
      positionClass: "toast-bottom-right",
      actionButton: true,
      theme: { class: "mat-toolbar mat-warn" },
  	}
  });  

	sendMessage() { this.alertsComp.showMessage(this.myMessage); }

  sendWarning() { this.alertsComp.showWarning(this.myWarning); }
  
  sendError() { this.alertsComp.showError(this.myError); }	
}