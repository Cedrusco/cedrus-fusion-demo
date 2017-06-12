import { Component, OnInit } from '@angular/core';
/*import {
  CfSendMessageModes,
  CfSendMessageSettings,
  CfSendMessageSMSSettings,
  CfSendMessageEmailSettings,
  CfSendMessageAlerts
} from 'cedrus-fusion';*/

@Component({
  moduleId: module.id,
  selector: 'app-demo',
  templateUrl: './demo.send-message-1.html',
  styleUrls: ['./demo.send-message-1.css']
})
export class CfDemoSendMessage1 implements OnInit {

  /*sendMessageSettings: CfSendMessageSettings;

  sendMessageMode = CfSendMessageModes.SMS;*/

  ngOnInit() {
    // split up technical configuration settings and then 'user' settings (eg. toNumber vs authToken)

    /*const sendMessageSMSSettings: CfSendMessageSMSSettings = {
      toNumber: '+16318356587',
      fromNumber: '+16319047068',
      accountSid: 'ACb33c7f7db863dcc41d803f75d9758f98',
      authToken: 'c9ab414697e600b5cd34d61c6fafde7f',
      endpoint: 'http://localhost:8080/send_sms_message',
    };

    const sendMessageEmailSettings: CfSendMessageEmailSettings = {
      toAddress: 'christophercarrick7@cedrusco.com',
      fromAddress: 'chris.carrick@cedrusco.com',
      endpoint: 'http://localhost:8080/send_email_message',
      smtpConfig: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'chris.carrick@cedrusco.com',
          pass: 'leeesa7*'
        }
      }
    };

    this.sendMessageSettings = {
      sms: sendMessageSMSSettings,
      email: sendMessageEmailSettings,
    };*/
  }

  setMessageType(type: string) {
    //this.sendMessageMode = CfSendMessageModes[type];
  }

  onSendMessage(response: any) {
    alert('Message Sent!');
  }

}
