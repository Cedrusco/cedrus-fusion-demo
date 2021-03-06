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
    trigger: {
      button: { label: '' }
    },
    actionButtons: [
      { 
        button: {
          label: '',
          iconProperty: { name: "home" } 
        } 
      },
      { 
        button: { 
          label: '', 
          iconProperty: { name: "star" }
        }
      },
      { 
        button: {
          label: '', 
          iconProperty: { name: "stars" }
        } 
      }
    ]
  });

  myOtherFab = new FabModel ({
		direction: "down",
    stayOpened: true,
    showButtons: false,
    trigger: {
      button: {
        iconProperty: {name: "fa-star"}
      }
    },
    actionButtons: [
      {
        button: { 
          display: false,
          iconProperty: { name: "home" }
        }
      },
      {
        button: { 
          label: "star",
          iconProperty: { name: "star" }
        }
      },
      {
        button: { 
          disable: true, 
          label: "heart", 
          iconProperty: { name: "fa-heart" }
        },
        tooltipPosition: "right"
      }
    ]
  });

  actionButton(event) {
    console.log(event);
  }

  triggerButton(event) {
    console.log(event);
  }
}
