import { Component } from '@angular/core';
import { FabModel } from 'cedrus-fusion';
import { FabButtonModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-fab-2',
	templateUrl: './demo.fab-2.html',
 	styleUrls: ['./demo.fab-2.scss']
})

export class CfDemoFab2 {
  shown = true;
  disabled = true;
  myFab = new FabModel ({
    direction: "right",
    triggerButton: { icon: {name: "menu"}, label: "Trigger", labelPosition: "above", display: this.shown },
    actionButtons: [
      { icon: {name: "home"}, display: this.shown },
      { icon: {name: "star"}, label: "Item", labelPosition: "below" },
      { icon: {name: "stars"}, disabled: this.disabled }
    ]
  });
}
