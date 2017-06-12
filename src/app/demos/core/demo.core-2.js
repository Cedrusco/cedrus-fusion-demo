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
var CfDemoCore2 = (function () {
    function CfDemoCore2(i18nService) {
        this.i18nService = i18nService;
        this.themeName = '';
        this.title = "DemoCore";
        this.myTooltip = {
            message: "My Test Tooltip",
            position: "above"
        };
        this.money = 10000;
        this.enabledI18N = true;
        this.localeName = "";
        this.locales = [{
                "value": "en-US",
                "title": "USA"
            }, {
                "value": "fr-FR",
                "title": "France"
            }];
        this.button1 = new cedrus_fusion_1.ButtonModel();
        this.button2 = new cedrus_fusion_1.ButtonModel({
            label: 'Date',
            iconPosition: "right"
        });
        this.input1 = new cedrus_fusion_2.InputModel({
            type: "text",
            placeholder: "current date",
            maxlength: "10",
            hint: {
                text: "",
                align: "start"
            },
            value: new Date().toString()
        });
        this.demoWeather = new cedrus_fusion_3.WeatherComponentModel({
            defaultCity: "Paris"
        });
    }
    CfDemoCore2.prototype.ngOnInit = function () {
        this.internationalize();
    };
    CfDemoCore2.prototype.setLocale = function () {
        var _this = this;
        this.i18nService.setLocale(this.localeName)
            .then(function () {
            // after resetting locale, we have to reset localized messages from new current dictionary
            _this.internationalize();
        });
    };
    CfDemoCore2.prototype.internationalize = function () {
        // get localized messages from current dictionary
        this.myTooltip.message = this.i18nService.lookup('customer.form.tooltip.message');
        this.button1.label = this.i18nService.lookup('customer.form.validate');
        //this.input1.value = this.i18nService.formatDateWithTokens(new Date().toString(), 'L');
        this.button2.label = this.i18nService.formatDateWithTokens(new Date().toString(), 'L');
        this.moneyFormatted = this.i18nService.formatCurrency(this.money);
    };
    return CfDemoCore2;
}());
CfDemoCore2 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-core-2',
        templateUrl: './demo.core-2.html',
        styleUrls: ['./demo.core-2.scss']
    }),
    __metadata("design:paramtypes", [cedrus_fusion_4.I18NService])
], CfDemoCore2);
exports.CfDemoCore2 = CfDemoCore2;
//# sourceMappingURL=demo.core-2.js.map