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
var CfDemoRadio1 = (function () {
    function CfDemoRadio1() {
        this.title = "CF Demo Radio 1";
        this.title2 = "CF Demo Radio 2 (with HTML options and labels after buttons)";
        this.isVisible = false;
        this.isDisable = true;
        this.radio1 = [];
        this.radioStyling1 = [];
    }
    CfDemoRadio1.prototype.ngOnInit = function () {
        this.fruits = [
            { value: "apl", item: 'Apple (themeColor)', checked: false },
            { value: 'wtm', item: 'Watermelon (themeColor and will show/hide avatars)', checked: false },
            { value: 'ban', item: 'Banana (primary)', checked: false },
            { value: 'lim', item: 'Lime (accent)', checked: false },
            { value: 'per', item: 'Pear (warn)', checked: false }
        ];
        for (var _i = 0, _a = this.fruits; _i < _a.length; _i++) {
            var item = _a[_i];
            this.radio1.push(new cedrus_fusion_1.SelectableModel({ itemPosition: "before" }));
        }
        this.radioStyling1.push(new cedrus_fusion_2.RadioStylingModel({ radio: { themeColor: "primary" } }), new cedrus_fusion_2.RadioStylingModel({ radio: { themeColor: "accent" } }), new cedrus_fusion_2.RadioStylingModel({ radio: { themeColor: "warn" } }));
        this.myAccounts = [
            new cedrus_fusion_1.SelectableModel({ value: 'usd', item: { name: 'USD', code: 'fa-usd', color: '#4caf50' }, checked: true }),
            new cedrus_fusion_1.SelectableModel({ value: 'eur', item: { name: 'EURO', code: 'fa-eur', color: '#309be3' }, checked: false }),
            new cedrus_fusion_1.SelectableModel({ value: 'gbp', item: { name: 'GBP', code: 'fa-gbp', color: '#7a73a9' }, checked: false })
        ];
    };
    return CfDemoRadio1;
}());
CfDemoRadio1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-radio-1',
        templateUrl: './demo.radio-1.html',
        styleUrls: ['./demo.radio-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoRadio1);
exports.CfDemoRadio1 = CfDemoRadio1;
//# sourceMappingURL=demo.radio-1.js.map