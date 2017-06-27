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
}
