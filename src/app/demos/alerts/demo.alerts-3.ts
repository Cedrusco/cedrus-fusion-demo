import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertModel, CfAlertsService } from 'cedrus-fusion';

@Component ({
  moduleId: module.id,
	selector: 'cf-demo-alerts-3',
	templateUrl: './demo.alerts-3.html',
 	styleUrls: ['./demo.alerts-3.scss']
})

export class CfDemoAlerts3 implements OnInit {
	@ViewChild('alertsActions') alertsActions;

  alerts = [];

  alertOne = new AlertModel({
    message: "This is alert: alertId-1",
    options: {
      id: "alertID-1",
      theme: { class: "mat-toolbar mat-primary" },
    }
  });

  alertTwo = new AlertModel({
    message: "This is alert: alertId-2",
    options: {
      id: "alertID-2",
      theme: { class: "mat-toolbar mat-primary" },
    }
  });

  alertThree = new AlertModel({
    message: "This is alert: alertId-3",
    options: {
      id: "alertID-3",
      theme: { class: "mat-toolbar mat-primary" },
  	}
  });  

	show(id) { 
    switch (id) {
      case 1: this.alertsActions.showMessage(this.alertOne); break;
      case 2: this.alertsActions.showMessage(this.alertTwo); break;
      case 3: this.alertsActions.showMessage(this.alertThree); break;
    }
  }

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