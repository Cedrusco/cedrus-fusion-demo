import { Component, ViewChild } from '@angular/core';
import { FabModel, SelectModel } from 'cedrus-fusion';
import { FabButtonModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-fab-2',
	templateUrl: './demo.fab-2.html',
 	styleUrls: ['./demo.fab-2.scss']
})

export class CfDemoFab2 {
  shown = true;
  disable = true;

  get role () {
    return this.currentRole.selected;
  }

  editButtons: [
      { icon: {name: "fa-search-plus"}, disable: false },
      { icon: {name: "fa-pencil"}, disable: false },
      { icon: {name: "fa-paint-brush"}, disable: false }
  ]

  readButtons: [
      { icon: {name: "fa-search-plus"}, disable: false },
      { icon: {name: "fa-pencil"}, disable: true },
      { icon: {name: "fa-paint-brush"}, disable: true }
  ]

  currentRole = new SelectModel ({
		placeholder: 'User role: ',
		items: [
			{itemValue: 'readonly', itemLabel: 'Viewer'},
			{itemValue: 'edit', itemLabel: 'Editor'}
		],
		selected: ''
	});

  myFab = new FabModel ({
    direction: "right",
    triggerButton: { icon: {name: "fa-edit"}, label: "Trigger", labelPosition: "above", display: this.shown },
    actionButtons: [
      { icon: {name: "fa-search-plus"}, disable: false },
      { icon: {name: "fa-pencil"}, disable: true },
      { icon: {name: "fa-paint-brush"}, disable: true }
    ]
  });

  onChange(event) {
    this.myFab.actionButtons.forEach((actionButton) => {
      if (this.role === 'readonly') {
        actionButton.disable = true;
      } else {
        actionButton.disable = false;
      }
    });
  }
}
