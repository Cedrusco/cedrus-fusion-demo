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
var CfDemoCheckbox1 = (function () {
    function CfDemoCheckbox1() {
        this.title = "CF Demo Checkbox 1 (with labelPosition = 'before' and button theme colors)";
        this.title2 = "CF Demo Checkbox 2 (with HTML options)";
        this.title3 = "CF Demo Checkbox 3 (with images)";
        this.isVisible = true;
        this.isDisable = true;
        this.checkbox1 = [];
        this.checkboxStyling1 = [];
        this.letters = 0;
        this.myNotifications = {
            value: this.letters
        };
        this.sender = new cedrus_fusion_3.ButtonModel({
            label: "Send mail",
        });
    }
    CfDemoCheckbox1.prototype.sendMessage = function () { ++this.myNotifications.value; };
    CfDemoCheckbox1.prototype.ngOnInit = function () {
        this.fruits = [
            { value: "apl", item: 'Apple (themeColor)', checked: false },
            { value: 'wtm', item: 'Watermelon (themeColor and will show/hide avatars)', checked: false },
            { value: 'ban', item: 'Banana (primary)', checked: false },
            { value: 'lim', item: 'Lime (accent)', checked: false },
            { value: 'per', item: 'Pear (warn)', checked: false }
        ];
        for (var _i = 0, _a = this.fruits; _i < _a.length; _i++) {
            var item = _a[_i];
            this.checkbox1.push(new cedrus_fusion_1.SelectableModel({ itemPosition: "before" }));
        }
        this.checkboxStyling1.push(new cedrus_fusion_2.CheckboxStylingModel({ checkbox: { themeColor: "primary" } }), new cedrus_fusion_2.CheckboxStylingModel({ checkbox: { themeColor: "accent" } }), new cedrus_fusion_2.CheckboxStylingModel({ checkbox: { themeColor: "warn" } }));
        this.myAccounts = [
            new cedrus_fusion_1.SelectableModel({ value: 'usd', item: { name: 'USD', code: 'fa-usd', color: '#4caf50' }, checked: true }),
            new cedrus_fusion_1.SelectableModel({ value: 'eur', item: { name: 'EURO', code: 'fa-eur', color: '#309be3' }, checked: false }),
            new cedrus_fusion_1.SelectableModel({ value: 'gbp', item: { name: 'GBP', code: 'fa-gbp', color: '#7a73a9' }, checked: false })
        ];
        this.avatars = [
            new cedrus_fusion_1.SelectableModel({ value: 'bob', item: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png', checked: true }),
            new cedrus_fusion_1.SelectableModel({ value: 'ann', item: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png', checked: true }),
            new cedrus_fusion_1.SelectableModel({ value: 'ted', item: 'http://clipartist.net/RSS/openclipart.org/Unity/hypermodern_avatar_wall_paper_art-1979px.png', checked: true }),
        ];
    };
    return CfDemoCheckbox1;
}());
CfDemoCheckbox1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-checkbox-1',
        templateUrl: './demo.checkbox-1.html',
        styleUrls: ['./demo.checkbox-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoCheckbox1);
exports.CfDemoCheckbox1 = CfDemoCheckbox1;
//# sourceMappingURL=demo.checkbox-1.js.map