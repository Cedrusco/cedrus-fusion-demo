import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FabModel } from 'cedrus-fusion';
import { FabButtonModel } from 'cedrus-fusion';
import { IconModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-fab-1',
	templateUrl: './demo.fab-1.html',
 	styleUrls: ['./demo.fab-1.scss']
})

export class CfDemoFab1 {
  shown = true;
  disabled = true;

  myFab1: FabModel = {
		direction: "right",
    showButtons: true,
		triggerButton: { label: "Trigger", labelPosition: "above", disabled: true },
    actionButtons: [
      { icon: {name: "home"}, display: this.shown },
      { icon: {name: "star"}, label: "Item", labelPosition: "below" },
      { icon: {name: "stars"}, label: "Item", labelPosition: "above", disabled: this.disabled }
    ]
  };
  myFabStyles1 = {
    container: {
      class: 'container-class',
      dynamicClass: ''
    },
    fabDial: {
      trigger: {
        class: 'trigger-class',
        dynamicClass: '',
        icon: {
          class: 'trigger-icon-class',
          dynamicClass: ''
        }
      },
      actions: {
        class: 'action-class',
        dynamicClass: '',
        icon: {
          class: 'action-icon-class',
          dynamicClass: ''
        }
      }
    }
  };

  myFab2: FabModel = {
    direction: "left",
    stayOpened: true,
    triggerButton: { icon: {name: "menu"}, label: "Trigger", labelPosition: "above", display: this.shown },
    actionButtons: [
      { icon: {name: "home"}, display: this.shown },
      { icon: {name: "star"}, label: "Item", labelPosition: "below" },
      { icon: {name: "stars"}, disabled: this.disabled }
    ]
  };

  myFab3: FabModel = {
    direction: "up",
    actionButtons: [
      { icon: {name: "home"}, display: this.shown },
      { icon: {name: "star"}, label: "Item", labelPosition: "left" },
      { icon: {name: "stars"}, disabled: this.disabled }
    ]
  };

  myFab4: FabModel = {
    direction: "down",
    triggerButton: { icon: {name: 'fa-gear'} },
    actionButtons: [
      { icon: {name:"fa-apple"}, display: this.shown },
      { icon: {name:"fa-star"}, label: "Item", labelPosition: "left" },
      { icon: {name:"fa-home"}, disabled: this.disabled }
    ]
  };

	selected = [];

	toggleShown() {
    this.myFab1.actionButtons[0].display = !this.myFab1.actionButtons[0].display;
    this.myFab2.actionButtons[0].display = !this.myFab2.actionButtons[0].display;
    this.myFab2.triggerButton.display = !this.myFab2.triggerButton.display;
    this.myFab3.actionButtons[0].display = !this.myFab3.actionButtons[0].display;
    this.myFab4.actionButtons[0].display = !this.myFab4.actionButtons[0].display;
  }

	log(e, i){
		console.log('e', e);
		this.selected.push(e);
	}
}
