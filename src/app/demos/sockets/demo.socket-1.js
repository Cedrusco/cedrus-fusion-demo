"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var http_1 = require("@angular/http");
var cedrus_fusion_1 = require("cedrus-fusion");
cedrus_fusion_1.CfSocketService.configure({ endpoint: '/' });
var CfDemoSocket1 = (function () {
    function CfDemoSocket1(socketService, http, snackBar) {
        this.socketService = socketService;
        this.http = http;
        this.snackBar = snackBar;
        this.startDemoShown = true;
        this.sendTypeOne = false;
        this.sendTypeTwo = false;
        this.sendTypeThree = false;
        this.timeout = false;
        this.messageContents = '';
    }
    CfDemoSocket1.prototype.ngOnInit = function () {
    };
    CfDemoSocket1.prototype.startDemo = function () {
        window.open('demo.socket-2.html');
        this.startDemoShown = false;
    };
    CfDemoSocket1.prototype.sendMessage = function () {
        var _this = this;
        var _a = this, sendTypeOne = _a.sendTypeOne, sendTypeTwo = _a.sendTypeTwo, sendTypeThree = _a.sendTypeThree, messageContents = _a.messageContents;
        if (!this.timeout) {
            this.http.post('/send_socket_message', {
                sendTypeOne: sendTypeOne,
                sendTypeTwo: sendTypeTwo,
                sendTypeThree: sendTypeThree,
                messageContents: messageContents,
            })
                .toPromise()
                .then(function () { return _this.snackBar.open('Message Sent'); });
        }
        this.timeout = true;
        setTimeout(function () { return _this.timeout = false; }, 500);
    };
    return CfDemoSocket1;
}());
CfDemoSocket1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-socket-1',
        templateUrl: './demo.socket-1.html',
        styleUrls: ['./demo.socket-1.css']
    }),
    __metadata("design:paramtypes", [cedrus_fusion_1.CfSocketService,
        http_1.Http,
        material_1.MdSnackBar])
], CfDemoSocket1);
exports.CfDemoSocket1 = CfDemoSocket1;
//# sourceMappingURL=demo.socket-1.js.map