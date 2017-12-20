import { Component, OnInit, Input } from '@angular/core';
import { IconModel } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { InputModel } from 'cedrus-fusion';

import { I18NService } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-core-1',
  templateUrl: './demo.core-1.html',
  styleUrls: ['./demo.core-1.scss']
})
export class CfDemoCore1 implements OnInit {

  title = "DemoCore";

  myTooltip = {
    message: "My Test Tooltip",
    position: "above"
  };

  button1= new ButtonModel ({
    label: "Button without tooltip"
  });

  button2 = new ButtonModel ({
    label: "Button with tooltip"
	});

  notificationIcon = new IconModel({
    name: "email",
    type: "mi",
    size: "50px",
    color: {
      foreground: "lightseagreen",
      background: "transparent"
    }
  });

  notificationIcon2 = new IconModel({
    name: "person",
    type: "mi",
    size: "50px",
    color: {
      foreground: "lightseagreen",
      background: "transparent"
    }
  });

  letters: number = 0;

  myNotifications: NotificationModel = {
    value: this.letters,
    type: 'text'
  };

  notiIcon: IconModel;

  myNotifications2: NotificationModel = {
    classes: 'mat-warn',
    type: 'icon',
    icon: this.notiIcon
  };

  button5 = new ButtonModel({
    label: "Send mail",
    color: {
      foreground: "",
      background: "primary"
    },
    icon: null,
    icon_position:"right"
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

  notifications = [];

  log(e){
    this.notifications.push(e);
  }

  constructor(private i18nService: I18NService) {}

  ngOnInit() {
  }
}
