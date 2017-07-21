import { Component, OnInit } from '@angular/core';
import { FabModel, SelectableModel } from 'cedrus-fusion';

@Component ({
  moduleId: module.id,
  selector: 'cf-demo-fab-3',
  templateUrl: './demo.fab-3.html',
   styleUrls: ['./demo.fab-3.scss']
})

export class CfDemoFab3 implements OnInit {

  roles = [
    new SelectableModel({value: 'editor', item: 'Editor', checked: false }),
    new SelectableModel({value: 'reader', item: 'Reader', checked: false }),
  ];

  modes = [
    new SelectableModel({value: 'hide', item: 'Hide', checked: false }),
    new SelectableModel({value: 'disable', item: 'Disable', checked: false }),
  ];

  currentRole;
  blockMode;

  roleChange(role) {    
    this.currentRole = role[0];
    this.currentRole===1 ? this.blockOptions([this.blockMode]) : this.resolveOptions();
  }

  blockOptions(type) {
    if(type) this.blockMode = type[0];
    if(this.currentRole===1) {
      if(this.blockMode===1) {
        for (var i = 3; i < this.myFab.actionButtons.length; ++i) {
          this.myFab.actionButtons[i].disable = true;
          this.myFab.actionButtons[i].display = true;
        }
      } else {
        for (var i = 3; i < this.myFab.actionButtons.length; ++i) {
          this.myFab.actionButtons[i].disable = false;
          this.myFab.actionButtons[i].display = false;
        }
      }
    }
  }

  resolveOptions() {
    for (var i = 3; i < this.myFab.actionButtons.length; ++i) {
      this.myFab.actionButtons[i].disable = false;
      this.myFab.actionButtons[i].display = true;
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.currentRole = 1;
      this.blockMode = 1;
      this.roles[1].checked = true;
      this.modes[1].checked = true;
    }, 0);
  }
  
  myFab = new FabModel ({
    stayOpened: true,
    showButtons: true,
    direction: "right",
    triggerButton: { icon: {name: "fa-ellipsis-h"}, label: "Editor buttons", labelPosition: "above" },
    actionButtons: [
      { icon: {name: "fa-align-left"}, disable: false },
      { icon: {name: "fa-align-center" }, disable: false },
      { icon: {name: "fa-align-right"}, disable: false },
      { icon: {name: "fa-scissors"}, disable: true },
      { icon: {name: "fa-files-o"}, disable: true },
      { icon: {name: "fa-clipboard"}, disable: true },
    ]
  });

  options = [];

  log(option) {
    switch (option.cfItem.icon.name) {
      case "fa-align-left": this.options.push('align-left'); break;      
      case "fa-align-center": this.options.push('align-center'); break;      
      case "fa-align-right": this.options.push('align-right'); break;      
      case "fa-scissors": this.options.push('cut'); break;      
      case "fa-files-o": this.options.push('copy'); break;      
      case "fa-clipboard": this.options.push('paste'); break;      
    }
  }
}
