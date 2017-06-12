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
var CfDemoSwitch1 = (function () {
    function CfDemoSwitch1() {
        this.title = "CF Demo Switch 1 (with labelPosition = 'before' and button theme colors)";
        this.title2 = "CF Demo Switch 2 (with HTML options) anf Grouping";
        this.title3 = "CF Demo Switch 3 (with images)";
        this.isVisible = true;
        this.isDisable = true;
        this.switch1 = [];
        this.switchStyling1 = [];
        this.checkedAvatars = [];
        this.avIndex = 0;
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
    }
    CfDemoSwitch1.prototype.toggleAvatars = function () {
        switch (this.avIndex) {
            case 0:
                this.checkedAvatars[0] = this.checkedAvatars[0] === 'bob' ? 'not-bob' : 'bob';
                this.avIndex = 1;
                break;
            case 1:
                this.checkedAvatars[1] = this.checkedAvatars[1] === 'ann' ? 'not-ann' : 'ann';
                this.avIndex = 2;
                break;
            case 2:
                this.checkedAvatars[2] = this.checkedAvatars[2] === 'ted' ? 'not-ted' : 'ted';
                this.avIndex = 0;
                break;
        }
    };
    CfDemoSwitch1.prototype.sendMessage = function () { ++this.myNotifications.value; };
    CfDemoSwitch1.prototype.ngOnInit = function () {
        this.fruits = [
            { value: "apl", item: 'Apple (themeColor)', checked: true },
            { value: 'wtm', item: 'Watermelon (themeColor and will show/hide avatars)', checked: true },
            { value: 'ban', item: 'Banana (primary)', checked: true },
            { value: 'lim', item: 'Lime (accent)', checked: false },
            { value: 'per', item: 'Pear (warn)', checked: true }
        ];
        for (var _i = 0, _a = this.fruits; _i < _a.length; _i++) {
            var item = _a[_i];
            this.switch1.push(new cedrus_fusion_2.SelectableModel({ itemPosition: "before" }));
        }
        this.switchStyling1.push(new cedrus_fusion_3.SwitchStylingModel({ switch: { themeColor: "primary" } }), new cedrus_fusion_3.SwitchStylingModel({ switch: { themeColor: "accent" } }), new cedrus_fusion_3.SwitchStylingModel({ switch: { themeColor: "warn" } }));
        this.myAccounts = [
            new cedrus_fusion_2.SelectableModel({ value: 'usd', item: { name: 'USD', code: 'fa-usd', color: '#4caf50' }, checked: false }),
            new cedrus_fusion_2.SelectableModel({ value: 'eur', item: { name: 'EURO', code: 'fa-eur', color: '#309be3' }, checked: false }),
            new cedrus_fusion_2.SelectableModel({ value: 'gbp', item: { name: 'GBP', code: 'fa-gbp', color: '#7a73a9' }, checked: false })
        ];
        this.avatars = [
            new cedrus_fusion_2.SelectableModel({ value: 'bob', item: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png', checked: true }),
            new cedrus_fusion_2.SelectableModel({ value: 'ann', item: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png', checked: true }),
            new cedrus_fusion_2.SelectableModel({ value: 'ted', item: 'http://clipartist.net/RSS/openclipart.org/Unity/hypermodern_avatar_wall_paper_art-1979px.png', checked: true }),
        ];
    };
    return CfDemoSwitch1;
}());
CfDemoSwitch1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-switch-1',
        templateUrl: './demo.switch-1.html',
        styleUrls: ['./demo.switch-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoSwitch1);
exports.CfDemoSwitch1 = CfDemoSwitch1;
//# sourceMappingURL=demo.switch-1.js.map