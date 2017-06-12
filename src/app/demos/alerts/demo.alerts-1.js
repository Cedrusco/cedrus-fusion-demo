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
var cedrus_fusion_1 = require("cedrus-fusion");
var cedrus_fusion_2 = require("cedrus-fusion");
var CfDemoAlerts1 = (function () {
    function CfDemoAlerts1(alertsService) {
        this.alertsService = alertsService;
        this.alerts = [];
        this.messageButton = new cedrus_fusion_1.ButtonModel({ label: "Show message" });
        this.warningButton = new cedrus_fusion_1.ButtonModel({ label: "Show warning" });
        this.errorButton = new cedrus_fusion_1.ButtonModel({ label: "Show error" });
        this.myMessage = {
            message: "This is demo info message",
            options: {
                id: "alertID-1",
                timeOut: 7000,
                extendedTimeOut: 0,
                positionClass: "toast-top-left",
                confirmIcon: {
                    name: "stars",
                    type: "mi"
                },
                cancelIcon: {
                    name: "star",
                    type: "mi"
                }
            }
        };
        this.myWarning = {
            message: "This is demo warn message",
            options: {
                id: "alertID-2",
                timeOut: 1000,
                extendedTimeOut: 0,
                positionClass: "toast-top-right",
            }
        };
        this.myError = {
            message: "This is demo error message",
            options: {
                id: "alertID-3",
                timeOut: 3000,
                extendedTimeOut: 0,
                positionClass: "toast-bottom-right",
                actionButton: true,
            }
        };
    }
    CfDemoAlerts1.prototype.sendMessage = function () { this.alertsComp.showMessage(this.myMessage); };
    CfDemoAlerts1.prototype.sendWarning = function () { this.alertsComp.showWarning(this.myWarning); };
    CfDemoAlerts1.prototype.sendError = function () { this.alertsComp.showError(this.myError); };
    CfDemoAlerts1.prototype.ngOnInit = function () {
        var _this = this;
        this.alertsService.onAlertOk.subscribe(function (id) {
            console.log('DEMO onAlertOk', id);
            _this.alerts.push({ id: id, action: 'confirm' });
        });
        this.alertsService.onAlertCancel.subscribe(function (id) {
            console.log('DEMO onAlertCancel', id);
            _this.alerts.push({ id: id, action: 'cancel' });
        });
    };
    return CfDemoAlerts1;
}());
__decorate([
    core_1.ViewChild('alertsComp'),
    __metadata("design:type", Object)
], CfDemoAlerts1.prototype, "alertsComp", void 0);
CfDemoAlerts1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-alerts-1',
        templateUrl: './demo.alerts-1.html',
        styleUrls: ['./demo.alerts-1.scss']
    }),
    __metadata("design:paramtypes", [cedrus_fusion_2.CfAlertsService])
], CfDemoAlerts1);
exports.CfDemoAlerts1 = CfDemoAlerts1;
//# sourceMappingURL=demo.alerts-1.js.map