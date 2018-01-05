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
      { 
        button: { 
          iconProperty: { name: "home" } 
        } 
      },
      { 
        button: { 
          label: "star", 
          iconProperty: { name: "star" }, 
        },
        tooltipPosition: "below" 
      },
      { 
        button: {
          iconProperty: { name: "stars" }, 
          disabled: true
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
