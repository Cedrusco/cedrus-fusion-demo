import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MaterialModule, MdSnackBar } from '@angular/material';
import { CfModule } from 'cedrus-fusion';

import { CfSocketService } from 'cedrus-fusion';

//CfSocketService.configure({ endpoint: 'http://localhost:8080' });

@Component({
  moduleId: module.id,
  selector: 'cf-demo-socket-2',
  template: `
    <div id="demo-socket-2">
      <md-card>
        <md-checkbox [(ngModel)]="typeOneChecked">LISTEN FOR EVENT TYPE 1</md-checkbox>
        <md-checkbox [(ngModel)]="typeTwoChecked">LISTEN FOR EVENT TYPE 2</md-checkbox>
        <md-checkbox [(ngModel)]="typeThreeChecked">LISTEN FOR EVENT TYPE 3</md-checkbox>

        <md-list>
          <md-list-item *ngFor="let message of messages">{{ message }}</md-list-item>
        </md-list>
      </md-card>
    </div>
  `,
  styleUrls: ['./demo.socket-2.css'],
})

export class CfDemoSocket2 implements OnInit {

  typeOneChecked = false;
  typeTwoChecked = false;
  typeThreeChecked = false;

  messages = [];

  constructor(
    private snackBar: MdSnackBar,
    private socketService: CfSocketService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.socketService.subscribe('type_one', data => {
      if (this.typeOneChecked) {
        this.messages.push(`TYPE 1: ${data}`);
        this.changeDetector.detectChanges();
      }
    });
    this.socketService.subscribe('type_two', data => {
      if (this.typeTwoChecked) {
        this.messages.push(`TYPE 2: ${data}`);
        this.changeDetector.detectChanges();
      }
    });
    this.socketService.subscribe('type_three', data => {
      if (this.typeThreeChecked) {
        this.messages.push(`TYPE 3: ${data}`);
        this.changeDetector.detectChanges();
      }
    });
  }

}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    CfModule,
  ],
  declarations: [
    CfDemoSocket2
  ],
  bootstrap: [ CfDemoSocket2 ]
})
export class CfDemoSocket2Module { }

platformBrowserDynamic().bootstrapModule(CfDemoSocket2Module);
