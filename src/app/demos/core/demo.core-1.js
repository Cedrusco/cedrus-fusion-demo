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
var CfDemoCore1 = (function () {
    function CfDemoCore1(i18nService) {
        this.i18nService = i18nService;
        this.title = "DemoCore";
        this.myTooltip = {
            message: "My Test Tooltip",
            position: "above"
        };
        this.button1 = new cedrus_fusion_2.ButtonModel({
            label: "Button without tooltip"
        });
        this.button2 = new cedrus_fusion_2.ButtonModel({
            label: "Button with tooltip"
        });
        this.notificationIcon = new cedrus_fusion_1.IconModel({
            name: "email",
            type: "mi",
            size: "50px",
            color: {
                foreground: "lightseagreen",
                background: "transparent"
            }
        });
        this.notificationIcon2 = new cedrus_fusion_1.IconModel({
            name: "person",
            type: "mi",
            size: "50px",
            color: {
                foreground: "lightseagreen",
                background: "transparent"
            }
        });
        this.letters = 0;
        this.myNotifications = {
            value: this.letters,
            type: 'text'
        };
        this.myNotifications2 = {
            classes: 'mat-warn',
            type: 'icon',
            icon: this.notiIcon
        };
        this.button5 = new cedrus_fusion_2.ButtonModel({
            label: "Send mail",
            color: {
                foreground: "",
                background: "primary"
            },
            icon: null,
            icon_position: "right"
        });
        this.notifications = [];
    }
    CfDemoCore1.prototype.sendMessage = function () {
        ++this.myNotifications.value;
        if (this.myNotifications.value) {
            this.myNotifications2.icon = {
                name: 'email',
                type: 'mi'
            };
        }
    };
    CfDemoCore1.prototype.log = function (e) {
        this.notifications.push(e);
    };
    CfDemoCore1.prototype.ngOnInit = function () {
    };
    return CfDemoCore1;
}());
CfDemoCore1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-core-1',
        templateUrl: './demo.core-1.html',
        styleUrls: ['./demo.core-1.scss']
    }),
    __metadata("design:paramtypes", [cedrus_fusion_3.I18NService])
], CfDemoCore1);
exports.CfDemoCore1 = CfDemoCore1;
//# sourceMappingURL=demo.core-1.js.map