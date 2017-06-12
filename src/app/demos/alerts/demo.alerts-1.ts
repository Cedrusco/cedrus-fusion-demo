import { Component, Input, Output, OnInit, ViewChild } from '@angular/core';
import { CfAlertsComponent } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { AlertModel } from 'cedrus-fusion';
import { CfAlertsService } from 'cedrus-fusion';

@Component ({
  moduleId: module.id,
	selector: 'cf-demo-alerts-1',
	templateUrl: './demo.alerts-1.html',
 	styleUrls: ['./demo.alerts-1.scss']
})

export class CfDemoAlerts1 implements OnInit {
	@ViewChild('alertsComp') alertsComp;

  alerts = [];

	messageButton = new ButtonModel({label: "Show message"});
  warningButton = new ButtonModel({label: "Show warning"});
  errorButton = new ButtonModel({label: "Show error"});

  myMessage: AlertModel = {
    message: "This is demo info message",
    options: {
      id: "alertID-1",
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
      }
    }
  };

  myWarning: AlertModel = {
    message: "This is demo warn message",
    options: {
      id: "alertID-2",
      timeOut: 1000,
      extendedTimeOut: 0,
      positionClass: "toast-top-right",
    }
  };

  myError: AlertModel = {
    message: "This is demo error message",
    options: {
     id: "alertID-3",
  		timeOut: 3000,
  		extendedTimeOut: 0,
  		positionClass: "toast-bottom-right",
  		actionButton: true,
  	}
  };  

	sendMessage() { this.alertsComp.showMessage(this.myMessage); }

  sendWarning() { this.alertsComp.showWarning(this.myWarning); }
  
  sendError() { this.alertsComp.showError(this.myError); }	

  constructor(public alertsService: CfAlertsService) {}

  ngOnInit() {
    this.alertsService.onAlertOk.subscribe(id => {
      console.log('DEMO onAlertOk', id);
      this.alerts.push({id: id, action: 'confirm'});
    });

    this.alertsService.onAlertCancel.subscribe(id => {
      console.log('DEMO onAlertCancel', id);
      this.alerts.push({id: id, action: 'cancel'});
    });
  }
}