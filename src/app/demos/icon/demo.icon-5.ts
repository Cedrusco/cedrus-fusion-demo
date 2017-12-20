import { Component } from '@angular/core';

import { CfIconComponent } from 'cedrus-fusion';
import { IconModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';

import { I18NService } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-icon-5',
	templateUrl: './demo.icon-5.html',
 	styleUrls: ['./demo.icon-5.scss']
})

export class CfDemoIcon5 {

  myTooltip = {
    message: "Email",
    position: "above"
  };


  //Notification
  letters: number = 0;

  notificationIcon = new IconModel({
    name: "email",
    type: "mi",
    size: "50px"
  });

  notificationIcon2 = new IconModel({
    name: "person",
    type: "mi",
    size: "50px"
  });

  myNotifications: NotificationModel = {
    value: this.letters,
    type: 'text'
  };

  myNotifications2: NotificationModel = {
    classes: 'mat-warn',
    type: 'icon'
  };

  //Button to Trigger Notification
  notButton = new ButtonModel({
    label: "Send mail",
    icon: null
  });
  sendMessage() {
    ++this.myNotifications.value;

    if(this.myNotifications.value) {
      this.myNotifications2.icon = {
        name: 'email',
        type: 'mi',
        // TODO - why do I need to declare these below - should be default
        size: '24px',
        display: true,
        disable: false
      }
    }
  }


}
