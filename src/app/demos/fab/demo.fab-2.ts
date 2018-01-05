import { Component, ViewChild } from '@angular/core';
import { FabModel, FabStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-fab-2',
	templateUrl: './demo.fab-2.html',
 	styleUrls: ['./demo.fab-2.scss']
})

export class CfDemoFab2 {
  
  fabActions = new FabModel({
    stayOpened: true,
    showButtons: true,
    direction: 'left',
    actionButtons: [
      { button: { label: '', iconProperty: { name: "close" } } },
      { button: { label: '', iconProperty: { name: "edit" } } },
      { button: { label: '', iconProperty: { name: "info" } } }
    ]
  });

  primaryStyle = new FabStylingModel({
    trigger: { button: { button: { class: "mat-primary" }}},
    itemsContainer: { item: { button: { class: "mat-primary" } } }
  });

  accentStyle = new FabStylingModel({
    trigger: { button: { button: { class: "mat-accent" }}},
    itemsContainer: { item: { button: { class: "mat-accent" } } }
  });

  warningStyle = new FabStylingModel({
    trigger: { button: { button: { class: "mat-warn" }}},
    itemsContainer: { item: { button: { class: "mat-warn" } } }
  });

  customStyle = new FabStylingModel({
    trigger: { button: { button: { class: "custom-trigger" }}},
    itemsContainer: { item: { button: { class: "custom-action-item" } } }
  });

  rotating = false;
  labels = [ 'Rotate Purpled Fab icons', 'Stop rotating' ];
  togglingLabel = this.labels[0];
  
  toggle() {
    this.togglingLabel = this.rotating ? this.labels[0] : this.labels[1];
    this.rotating = !this.rotating;
  }
}