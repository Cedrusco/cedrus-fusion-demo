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
var cedrus_fusion_7 = require("cedrus-fusion");
var CfDemoMenu1 = (function () {
    function CfDemoMenu1() {
        this.title = "CF Demo Menu 1";
        this.isShown = false;
        this.isDisabled = true;
        this.letters = 0;
        this.myNotifications = {
            value: this.letters,
            classes: 'mat-accent',
        };
        this.sender = new cedrus_fusion_1.ButtonModel({
            label: "Send mail",
            color: {
                foreground: "",
                background: "primary"
            },
            icon: null,
            icon_position: "right"
        });
        this.menu = new cedrus_fusion_3.MenuModel({
            menuItems: [
                {
                    buttonProperty: {
                        label: "Hide me on click",
                        iconProperty: new cedrus_fusion_2.IconModel({
                            name: 'fa-apple',
                            size: '24px'
                        }),
                        iconPosition: "right"
                    },
                    notification: this.myNotifications,
                    divider: true,
                    onClick: this.clickFunc.bind(this)
                },
                {
                    buttonProperty: {
                        label: "Disabled",
                        iconProperty: new cedrus_fusion_2.IconModel({
                            name: 'fa-apple',
                            size: '24px'
                        }),
                        iconPosition: "right",
                        disabled: true
                    },
                    onClick: this.clickFunc.bind(this)
                },
            ]
        });
        this.menuStyling1 = new cedrus_fusion_5.MenuStylingModel({
            container: {},
            menuItemStyling: new cedrus_fusion_4.MenuItemStylingModel({
                buttonStyling: new cedrus_fusion_6.ButtonStylingModel({
                    iconStyling: new cedrus_fusion_7.IconStylingModel({
                        class: "iconMenu1"
                    })
                })
            })
        });
        this.title2 = "CF Default Menu Template";
        this.menuAccounts = new cedrus_fusion_3.MenuModel({
            triggerIcon: new cedrus_fusion_2.IconModel({
                name: "account_balance",
                size: "30px"
            }),
            menuItems: [
                {
                    buttonProperty: {
                        label: "USD account",
                        iconProperty: new cedrus_fusion_2.IconModel({
                            name: 'fa-usd',
                            size: '24px'
                        }),
                        iconPosition: "left",
                    },
                    notification: null,
                    onClick: null
                },
                {
                    buttonProperty: {
                        label: "EURO account",
                        iconProperty: new cedrus_fusion_2.IconModel({
                            name: 'fa-eur',
                            size: '24px'
                        }),
                        iconPosition: "left",
                    },
                    notification: null,
                    onClick: null
                },
                {
                    buttonProperty: {
                        label: "GBP account",
                        iconProperty: new cedrus_fusion_2.IconModel({
                            name: 'fa-gbp',
                            size: '24px'
                        }),
                        iconPosition: "left",
                    },
                    notification: null,
                    onClick: null
                }
            ]
        });
        this.items = [];
        this.menuStyling2 = new cedrus_fusion_5.MenuStylingModel({
            container: {},
            iconStyling: new cedrus_fusion_7.IconStylingModel({
                container: {},
                icon: {
                    class: "trigger1"
                }
            }),
            menuItem: new cedrus_fusion_4.MenuItemStylingModel({
                buttonStyling: new cedrus_fusion_6.ButtonStylingModel({
                    iconStyling: new cedrus_fusion_7.IconStylingModel({
                        icon: {
                            class: "iconMenu2"
                        }
                    })
                }),
            })
        });
    }
    CfDemoMenu1.prototype.clickFunc = function (menuItem) {
        menuItem.display = !menuItem.display;
    };
    CfDemoMenu1.prototype.sendMessage = function () { ++this.myNotifications.value; };
    CfDemoMenu1.prototype.log = function (e) {
        console.log('e', e);
        this.items.push(e);
    };
    CfDemoMenu1.prototype.ngOnInit = function () {
    };
    return CfDemoMenu1;
}());
CfDemoMenu1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-menu-1',
        templateUrl: './demo.menu-1.html',
        styleUrls: ['./demo.menu-1.scss']
    })
], CfDemoMenu1);
exports.CfDemoMenu1 = CfDemoMenu1;
//# sourceMappingURL=demo.menu-1.js.map