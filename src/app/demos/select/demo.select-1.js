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
var CfDemoSelect1 = (function () {
    function CfDemoSelect1() {
        this.title = "CF Demo Select 1 (with filter)";
        this.title2 = "CF Demo Select 1 (with HTML options)";
        this.isVisible = true;
        this.isDisable = false;
        this.isRequired = true;
        this.selectEvents = [];
        this.myFruits = new cedrus_fusion_2.SelectModel({
            placeholder: 'Selected fruit is: ',
            items: [
                { itemValue: 'apl', itemLabel: 'Apple' },
                { itemValue: 'ban', itemLabel: 'Banana' },
                { itemValue: 'wtm', itemLabel: 'Watermelon' },
                { itemValue: 'per', itemLabel: 'Pear' },
                { itemValue: 'pec', itemLabel: 'Peach' },
                { itemValue: 'org', itemLabel: 'Orange' },
                { itemValue: 'man', itemLabel: 'Mango' },
                { itemValue: 'gra', itemLabel: 'Grapes' },
                { itemValue: 'lim', itemLabel: 'Lime' },
                { itemValue: 'lem', itemLabel: 'Lemon' }
            ],
            selected: '',
            showFilter: true
        });
        this.myCurrency = 'usd';
        this.myAccounts = new cedrus_fusion_2.SelectModel({
            placeholder: 'Select currency: ',
            items: [
                { itemValue: 'usd', itemLabel: '<b style="color: #4caf50"><span style="margin-right: 8px" class="fa fa-usd"></span>USD</b>' },
                { itemValue: 'eur', itemLabel: '<b style="color: #309be3"><span style="margin-right: 8px" class="fa fa-eur"></span>EURO</b>' },
                { itemValue: 'gbp', itemLabel: '<b style="color: #7a73a9"><span style="margin-right: 8px" class="fa fa-gbp"></span>GBP</b>' }
            ],
            selected: this.myCurrency,
            showFilter: false
        });
        this.letters = 0;
        this.myNotifications = {
            value: this.letters
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
    }
    CfDemoSelect1.prototype.log = function (ev) { this.selectEvents.push(ev); };
    CfDemoSelect1.prototype.sendMessage = function () { ++this.myNotifications.value; };
    CfDemoSelect1.prototype.ngOnInit = function () { };
    return CfDemoSelect1;
}());
CfDemoSelect1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-select-1',
        templateUrl: './demo.select-1.html',
        styleUrls: ['./demo.select-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoSelect1);
exports.CfDemoSelect1 = CfDemoSelect1;
//# sourceMappingURL=demo.select-1.js.map