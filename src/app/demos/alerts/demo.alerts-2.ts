import { Component, ViewChild } from '@angular/core';
import { AlertModel, AlertStylingModel } from 'cedrus-fusion';

@Component ({
  moduleId: module.id,
	selector: 'cf-demo-alerts-2',
	templateUrl: './demo.alerts-2.html',
 	styleUrls: ['./demo.alerts-2.scss']
})

export class CfDemoAlerts2 {
	@ViewChild('alertsComp') alertsComp;

  myMessage = new AlertModel({
    content: {
      title: "This is demo info title",
      templateName: 'myInfoAlertTmpl',
    },
    timeOut: 3000,
    extendedTimeOut: 0,
    position: "top-left",
    inform: { show: false },
    confirm: { show: false }
  });

  myWarning = new AlertModel({
    content: {
      title: "This is demo warning title",
      templateName: 'myWarningAlertTmpl',
    },
    timeOut: 5000,
    extendedTimeOut: 0,
    position: "bottom-left",
    inform: { show: false },
    confirm: { show: false }
  });

  myError = new AlertModel({
    content: {
      title: "This is demo error title",
      templateName: 'myErrorAlertTmpl',
    },
    timeOut: 7000,
    extendedTimeOut: 0,
    position: "bottom-right",
    inform: { show: false },
    confirm: { show: false }
  });  

  myAlertsStyles = new AlertStylingModel({
    container: { 
      class: 'my-info-container' 
    },
    toolbar: { 
      class: 'my-info-toolbar',
      content: { 
        class: 'my-info-data' 
      }
    }
  });

	sendMessage() { this.alertsComp.showMessage(this.myMessage, this.myAlertsStyles); }

  sendWarning() { this.alertsComp.showWarning(this.myWarning, this.myAlertsStyles); }
  
  sendError() { this.alertsComp.showError(this.myError, this.myAlertsStyles); }	
}