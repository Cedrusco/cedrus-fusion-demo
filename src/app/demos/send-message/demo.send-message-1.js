"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*import {
  CfSendMessageModes,
  CfSendMessageSettings,
  CfSendMessageSMSSettings,
  CfSendMessageEmailSettings,
  CfSendMessageAlerts
} from 'cedrus-fusion';*/
var CfDemoSendMessage1 = (function () {
    function CfDemoSendMessage1() {
    }
    /*sendMessageSettings: CfSendMessageSettings;
  
    sendMessageMode = CfSendMessageModes.SMS;*/
    CfDemoSendMessage1.prototype.ngOnInit = function () {
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
    };
    CfDemoSendMessage1.prototype.setMessageType = function (type) {
        //this.sendMessageMode = CfSendMessageModes[type];
    };
    CfDemoSendMessage1.prototype.onSendMessage = function (response) {
        alert('Message Sent!');
    };
    return CfDemoSendMessage1;
}());
CfDemoSendMessage1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-demo',
        templateUrl: './demo.send-message-1.html',
        styleUrls: ['./demo.send-message-1.css']
    })
], CfDemoSendMessage1);
exports.CfDemoSendMessage1 = CfDemoSendMessage1;
//# sourceMappingURL=demo.send-message-1.js.map