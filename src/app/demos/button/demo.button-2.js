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
var cedrus_fusion_4 = require("cedrus-fusion");
var CfDemoButton2 = (function () {
    function CfDemoButton2() {
        this.icon1 = new cedrus_fusion_1.IconModel({
            name: "fa-bell",
            type: "fa",
            size: "20px"
        });
        this.button1 = new cedrus_fusion_3.ButtonModel({
            label: "BTN1",
            iconProperty: this.icon1,
            iconPosition: "right"
        });
        this.buttonStyle1 = new cedrus_fusion_4.ButtonStylingModel({
            button: {
                class: "button1"
            }
        });
        this.icon2 = new cedrus_fusion_1.IconModel({
            name: "pets",
            type: "mi",
            size: "20px"
        });
        this.button2 = new cedrus_fusion_3.ButtonModel({
            label: "BTN3",
            iconProperty: this.icon2,
            iconPosition: "left",
        });
        this.buttonStyle2 = new cedrus_fusion_4.ButtonStylingModel({
            iconStyling: new cedrus_fusion_2.IconStylingModel({
                icon: {
                    class: "icon2"
                }
            }),
            button: {
                class: "button2",
                themeColor: "accent"
            }
        });
    }
    CfDemoButton2.prototype.ngOnInit = function () {
    };
    return CfDemoButton2;
}());
CfDemoButton2 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-button-2',
        templateUrl: './demo.button-2.html',
        styleUrls: ['./demo.button-2.scss']
    })
], CfDemoButton2);
exports.CfDemoButton2 = CfDemoButton2;
//# sourceMappingURL=demo.button-2.js.map