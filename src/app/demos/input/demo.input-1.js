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
var cedrus_fusion_5 = require("cedrus-fusion");
var cedrus_fusion_6 = require("cedrus-fusion");
var CfDemoInput1 = (function () {
    function CfDemoInput1() {
        this.input2 = new cedrus_fusion_1.InputModel({
            type: "text",
            placeholder: " amount( USD )",
            prefix: "$",
            iconProperty: new cedrus_fusion_3.IconModel({
                name: "fa-usd",
                size: "20px"
            }),
            iconPosition: "left"
        });
        this.inputStyling2 = new cedrus_fusion_2.InputStylingModel({
            input: {
                class: "redInput"
            },
            iconStyling: new cedrus_fusion_4.IconStylingModel({
                icon: {
                    class: "redInput"
                }
            })
        });
        this.input3 = new cedrus_fusion_1.InputModel({
            type: "text",
            placeholder: "Accent",
            dividerColor: "accent",
            menu: new cedrus_fusion_6.MenuModel({
                menuItems: [
                    {
                        buttonProperty: new cedrus_fusion_5.ButtonModel({
                            label: 'Menu item 1',
                            icon: new cedrus_fusion_3.IconModel({
                                name: 'fa-apple',
                                size: '24px'
                            })
                        }),
                        divider: true,
                        notification: '7',
                        display: true,
                        disable: false,
                        onClick: this.clickFunc.bind(this)
                    },
                    {
                        buttonProperty: new cedrus_fusion_5.ButtonModel({
                            label: 'Menu item 2',
                            icon: new cedrus_fusion_3.IconModel({
                                name: 'thumb_up',
                                size: '24px'
                            })
                        }),
                        notification: '',
                        onClick: this.clickFunc.bind(this)
                    }
                ]
            })
        });
        this.input4 = new cedrus_fusion_1.InputModel({
            type: "text",
            placeholder: "Warning",
            dividerColor: "warn",
            iconProperty: new cedrus_fusion_3.IconModel({
                name: "fa-exclamation-triangle",
                size: "20px"
            }),
            iconPosition: "right"
        });
        this.inputStyling4 = new cedrus_fusion_2.InputStylingModel({
            iconStyling: new cedrus_fusion_4.IconStylingModel({
                icon: {
                    class: "orangeIcon"
                }
            })
        });
        this.input5 = new cedrus_fusion_1.InputModel({
            type: "password",
            placeholder: "password",
            maxlength: "10",
            hint: {
                text: "from 1 to 10 chars",
                align: "start"
            }
        });
        this.letters = 0;
        this.myNotifications = {
            value: this.letters
        };
        this.sender = new cedrus_fusion_5.ButtonModel({
            label: "Send mail",
            icon: null,
            icon_position: "right"
        });
    }
    CfDemoInput1.prototype.clickFunc = function (menuItem) {
        this.input3.value = menuItem.buttonProperty.label;
    };
    CfDemoInput1.prototype.sendMessage = function () { ++this.myNotifications.value; };
    CfDemoInput1.prototype.warning = function () {
        alert("Warning!!!");
    };
    return CfDemoInput1;
}());
CfDemoInput1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-input-1',
        templateUrl: './demo.input-1.html',
        styleUrls: ['./demo.input-1.scss']
    })
], CfDemoInput1);
exports.CfDemoInput1 = CfDemoInput1;
//# sourceMappingURL=demo.input-1.js.map