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
var CfDemoWeather1 = (function () {
    function CfDemoWeather1() {
        /**
         * <p> Initialize the weather component with a Weather Component Model and pass it to the settings.</p>
         */
        this.demoWeather = new cedrus_fusion_1.WeatherComponentModel({
            defaultCity: "Paris"
        });
        this.compEvents = "";
    }
    CfDemoWeather1.prototype.ngOnInit = function () {
    };
    CfDemoWeather1.prototype.ngOnDestroy = function () {
    };
    CfDemoWeather1.prototype.log = function (ev) { this.compEvents = ev; };
    return CfDemoWeather1;
}());
CfDemoWeather1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-weather-1',
        templateUrl: './demo.weather-1.html',
        styleUrls: ['./demo.weather-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoWeather1);
exports.CfDemoWeather1 = CfDemoWeather1;
//# sourceMappingURL=demo.weather-1.js.map