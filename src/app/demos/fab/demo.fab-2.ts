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
    optionsSource: 'fromModel',
		options: [
			{value: 'readonly', label: 'Viewer'},
			{value: 'edit', label: 'Editor'}
		],
		selected: ''
	});

  enabler = new SelectableModel({value:"apl", item: 'Disable paintbrush'});
  showPencil = new SelectableModel({value:"apl", item: 'Show pencil button'});

  onPaintbrushCheck() {
    this.myFab.actionButtons[2].button.disable = !this.myFab.actionButtons[2].button.disable;
  }

  onShowPencilCheck() {
    this.myFab.actionButtons[1].button.display = !this.myFab.actionButtons[1].button.display;
  }

  stayOpened = true;

  myFab = new FabModel({
    direction: "down",
    stayOpened: this.stayOpened,
    trigger: { 
      button: { 
        disable: true,
        display: this.shown,
        label: "Trigger", 
        iconProperty: { name: "fa-edit" }, 
      },
      tooltipPosition: "above"
    },
    actionButtons: [
      {
        button: { 
          disable: false,
          iconProperty: { name: "fa-search-plus" }
        }
      },
      {
        button: { 
          display: true,
          disable: false,
          iconProperty: { name: "fa-pencil"}
        }
      },
      {
        button: { 
          disable: false,
          iconProperty: { name: "fa-paint-brush"}
        }
      }
    ]
  });
}