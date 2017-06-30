import { Component, ViewChild } from '@angular/core';
import { FabModel, SelectModel, SelectableModel } from 'cedrus-fusion';
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

  currentRole = new SelectModel ({
		placeholder: 'User role: ',
		items: [
			{itemValue: 'readonly', itemLabel: 'Viewer'},
			{itemValue: 'edit', itemLabel: 'Editor'}
		],
		selected: ''
	});

  enabler = new SelectableModel({value:"apl", item: 'Disable paintbrush'});
  showPencil = new SelectableModel({value:"apl", item: 'Show pencil button'});

  onPaintbrushCheck() {
    this.myFab.actionButtons[2].disable = !this.myFab.actionButtons[2].disable;
  }

  onShowPencilCheck() {
    this.myFab.actionButtons[1].display = !this.myFab.actionButtons[1].display;
  }

  stayOpened = true;

  myFab = new FabModel ({
    direction: "down",
    stayOpened: this.stayOpened,
    disable: true,
    triggerButton: { icon: {name: "fa-edit"}, label: "Trigger", labelPosition: "above", display: this.shown },
    actionButtons: [
      { icon: {name: "fa-search-plus"}, disable: false },
      { icon: {name: "fa-pencil"}, disable: false, display: true },
      { icon: {name: "fa-paint-brush"}, disable: false }
    ]
  });
}
