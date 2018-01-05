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
    id: "alertID-1",
    content: { 
      message: "This is alert: alertId-1" 
    }
  });

  alertTwo = new AlertModel({
    id: "alertID-2",
    content: { 
      message: "This is alert: alertId-2" 
    }
  });

  alertThree = new AlertModel({
    id: "alertID-3",
    content: { 
      message: "This is alert: alertId-3" 
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
    this.alertsService.onAlertInfo.subscribe(id => {
      console.log('DEMO onAlertInfo', id);
      this.alerts.push({id: id, action: 'inform'});
    });

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