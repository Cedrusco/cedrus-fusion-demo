import { Component } from '@angular/core';
import { FabModel } from 'cedrus-fusion';
import { FabButtonModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-fab-1',
	templateUrl: './demo.fab-1.html',
 	styleUrls: ['./demo.fab-1.scss']
})

export class CfDemoFab1 {
  myFab = new FabModel ({
		direction: "right",
    showButtons: true,
    actionButtons: [
      { icon: {name: "home"}, display: true },
      { icon: {name: "star"}, label: "star", labelPosition: "below" },
      { icon: {name: "stars"}, disabled: true }
    ]
  });

  myOtherFab = new FabModel ({
		direction: "down",
    triggerButton: {
      icon: {name: "fa-star"},
      display: true,
      disable: false
    },
    stayOpened: true,
    showButtons: false,
    actionButtons: [
      { icon: {name: "home"}, display: false },
      { icon: {name: "star"}, label: "star", labelPosition: "right" },
      { icon: {name: "fa-heart"}, disable: true, label: "heart", labelPosition: "right" }
    ]
  });

  actionButton(event) {
    console.log(event);
  }

  triggerButton(event) {
    console.log(event);
  }
}
