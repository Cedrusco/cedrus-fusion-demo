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
var cedrus_fusion_3 = require("cedrus-fusion");
var cedrus_fusion_4 = require("cedrus-fusion");
var cedrus_fusion_5 = require("cedrus-fusion");
var cedrus_fusion_6 = require("cedrus-fusion");
var CfDemoButtonMenu1 = (function () {
    function CfDemoButtonMenu1() {
        this.title = "DemoButtonMenu";
        this.themeName = "";
        this.isShown = false;
        this.isDisabled = true;
        this.menu = new cedrus_fusion_4.MenuModel({
            menuItems: [
                {
                    buttonProperty: {
                        label: "Hide me on click",
                        iconProperty: new cedrus_fusion_1.IconModel({
                            name: 'fa-apple',
                            size: '24px'
                        }),
                        iconPosition: "right"
                    },
                    notification: '8',
                    divider: true,
                    onClick: this.clickFunc.bind(this)
                },
                {
                    buttonProperty: {
                        label: "Disabled",
                        iconProperty: new cedrus_fusion_1.IconModel({
                            name: 'fa-apple',
                            size: '24px'
                        }),
                        iconPosition: "right",
                        disabled: true
                    },
                    notification: '8',
                    onClick: this.clickFunc.bind(this)
                },
            ]
        });
        this.icon1 = new cedrus_fusion_1.IconModel({
            name: "pets",
            size: "20px"
        });
        this.button1 = new cedrus_fusion_2.ButtonModel({
            label: "Primary",
            iconProperty: this.icon1,
            iconPosition: "left"
        });
        this.icon2 = new cedrus_fusion_1.IconModel({
            name: "fa-bell",
            size: "20px"
        });
        this.button2 = new cedrus_fusion_2.ButtonModel({
            label: "Accent",
            iconProperty: this.icon2,
            iconPosition: "left"
        });
        this.buttonMenu1 = new cedrus_fusion_5.ButtonMenuModel({
            buttonProperty: this.button1,
            menuProperty: this.menu
        });
        this.buttonMenuStyling1 = new cedrus_fusion_6.ButtonMenuStylingModel({
            buttonStyling: new cedrus_fusion_3.ButtonStylingModel({
                button: {
                    themeColor: "primary"
                }
            })
        });
        this.buttonMenu2 = new cedrus_fusion_5.ButtonMenuModel({
            buttonProperty: this.button2,
            menuProperty: this.menu
        });
        this.buttonMenuStyling2 = new cedrus_fusion_6.ButtonMenuStylingModel({
            buttonStyling: new cedrus_fusion_3.ButtonStylingModel({
                button: {
                    themeColor: "accent"
                }
            })
        });
        this.letters = 0;
        this.myNotifications = {
            value: this.letters,
            classes: 'mat-primary',
            position: 'top-left'
        };
        this.sender = new cedrus_fusion_2.ButtonModel({
            label: "Send mail",
            color: {
                foreground: "",
                background: "primary"
            },
            icon: null,
            icon_position: "right"
        });
    }
    CfDemoButtonMenu1.prototype.clickFunc = function (menuItem) {
        menuItem.display = !menuItem.display;
    };
    CfDemoButtonMenu1.prototype.ngOnInit = function () {
        this.themes = ["", "cf-red-theme", "cf-blue-theme", "cf-green-theme"];
    };
    CfDemoButtonMenu1.prototype.function1 = function () {
        alert('This is Button 1 speaking...');
    };
    CfDemoButtonMenu1.prototype.function2 = function () {
        alert('This is Button 2 speaking...');
    };
    CfDemoButtonMenu1.prototype.sendMessage = function () { ++this.myNotifications.value; };
    return CfDemoButtonMenu1;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CfDemoButtonMenu1.prototype, "themeName", void 0);
CfDemoButtonMenu1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-button-menu-1',
        templateUrl: './demo.button-menu-1.html',
        styleUrls: ['./demo.button-menu-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoButtonMenu1);
exports.CfDemoButtonMenu1 = CfDemoButtonMenu1;
//# sourceMappingURL=demo.button-menu-1.js.map