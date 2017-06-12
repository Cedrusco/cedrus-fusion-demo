import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Http } from '@angular/http';

import { CfSocketService } from 'cedrus-fusion';

CfSocketService.configure({ endpoint: '/' });

@Component({
  moduleId: module.id,
  selector: 'cf-demo-socket-1',
  templateUrl: './demo.socket-1.html',
  styleUrls: ['./demo.socket-1.css']
})

export class CfDemoSocket1 implements OnInit {

  startDemoShown = true;
  sendTypeOne = false;
  sendTypeTwo = false;
  sendTypeThree = false;
  timeout = false;
  messageContents = '';

  constructor(
    private socketService: CfSocketService,
    private http: Http,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
  }

  startDemo() {
    window.open('demo.socket-2.html');
    this.startDemoShown = false;
  }

  sendMessage() {
    let { sendTypeOne, sendTypeTwo, sendTypeThree, messageContents } = this;

    if (!this.timeout) {
      this.http.post('/send_socket_message', {
        sendTypeOne,
        sendTypeTwo,
        sendTypeThree,
        messageContents,
      })
      .toPromise()
      .then(() => this.snackBar.open('Message Sent'));
    }

    this.timeout = true;
    setTimeout(() => this.timeout = false, 500);
  }

}
