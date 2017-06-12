"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cedrus_fusion_1 = require("cedrus-fusion");
var cedrus_fusion_2 = require("cedrus-fusion");
var cedrus_fusion_3 = require("cedrus-fusion");
var CfDemoButton3 = (function () {
    function CfDemoButton3() {
        this.wait = false;
        this.disable = false;
        this.state = "";
        this.waitingIcon = new cedrus_fusion_1.IconModel({
            name: "fa-spinner",
            type: "fa",
            size: "20px"
        });
        this.waitingBtn = new cedrus_fusion_2.ButtonModel({
            label: "Waiting BTN",
            iconPosition: "right",
            waiting: {
                value: this.wait,
                disabled: this.disable,
                iconProperty: this.waitingIcon
            }
        });
        this.waitingCheckbox = new cedrus_fusion_3.SelectableModel({
            value: true,
            item: 'Toggle waiting'
        });
        this.disableCheckbox = new cedrus_fusion_3.SelectableModel({
            value: true,
            item: 'Toggle disable'
        });
    }
    CfDemoButton3.prototype.ngOnInit = function () {
    };
    CfDemoButton3.prototype.updateState = function () {
        if (this.waitingBtn.waiting.value)
            this.state = "Waiting State";
        else
            this.state = "Active State";
    };
    return CfDemoButton3;
}());
CfDemoButton3 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-button-3',
        templateUrl: './demo.button-3.html',
        styleUrls: ['./demo.button-3.scss']
    })
], CfDemoButton3);
exports.CfDemoButton3 = CfDemoButton3;
//# sourceMappingURL=demo.button-3.js.map