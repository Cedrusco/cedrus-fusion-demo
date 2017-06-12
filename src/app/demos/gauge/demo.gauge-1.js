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
var CfDemoGauge1 = (function () {
    function CfDemoGauge1() {
        this.myGauge1 = new cedrus_fusion_1.GaugeModel({
            max: 100,
            value: 65,
            type: 'full',
            size: 150,
            suffix: 'suffix',
            label: 'type: full',
            animationDuration: 1,
            inputValue: false,
            disable: true
        });
        this.myGauge2 = new cedrus_fusion_1.GaugeModel({
            max: 100,
            value: 65,
            type: 'arch',
            size: 150,
            prefix: 'prefix',
            label: 'type: arch',
            animationDuration: 2
        });
        this.myGauge3 = new cedrus_fusion_1.GaugeModel({
            max: 100,
            value: 65,
            type: 'semi',
            size: 150,
            label: 'type: semi',
            animationDuration: 3
        });
        this.myGaugeStyling = new cedrus_fusion_2.GaugeStylingModel({
            container: {
                class: 'my-gauge-container-class'
            },
            gauge: {
                class: 'my-gauge-element-class'
            },
            valueContainer: {
                class: 'my-value-container-class'
            },
            value: {
                class: 'my-gauge-value-class'
            },
            prefix: {
                class: 'my-gauge-prefix-class'
            },
            suffix: {
                class: 'my-gauge-suffix-class'
            },
            label: {
                class: 'my-gauge-label-class'
            },
        });
    }
    CfDemoGauge1.prototype.ngOnInit = function () {
        // const updateValues: Function = (): void => {
        //   this.myGauge1.value = Math.round(Math.random() * 100);
        //   this.myGauge2.value = Math.round(Math.random() * 100);
        //   this.myGauge3.value = Math.round(Math.random() * 100);
        // };
        // const INTERVAL: number = 5000;
        // this.interval = setInterval(updateValues, INTERVAL);
    };
    CfDemoGauge1.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    return CfDemoGauge1;
}());
CfDemoGauge1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-gauge-1',
        templateUrl: './demo.gauge-1.html',
        styleUrls: ['./demo.gauge-1.scss']
    })
], CfDemoGauge1);
exports.CfDemoGauge1 = CfDemoGauge1;
//# sourceMappingURL=demo.gauge-1.js.map