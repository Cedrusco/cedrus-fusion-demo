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
var CfDemoDynamicComponentLoaderExampleOne = (function () {
    function CfDemoDynamicComponentLoaderExampleOne(injector) {
        this.injector = injector;
        this.inputText = this.injector.get('inputText');
    }
    return CfDemoDynamicComponentLoaderExampleOne;
}());
CfDemoDynamicComponentLoaderExampleOne = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-dynamic-component-loader-example-one',
        template: '<p>ONE: {{ inputText }}</p>'
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], CfDemoDynamicComponentLoaderExampleOne);
exports.CfDemoDynamicComponentLoaderExampleOne = CfDemoDynamicComponentLoaderExampleOne;
var CfDemoDynamicComponentLoaderExampleTwo = (function () {
    function CfDemoDynamicComponentLoaderExampleTwo(injector) {
        this.injector = injector;
        this.onClick = this.injector.get('onClick');
    }
    return CfDemoDynamicComponentLoaderExampleTwo;
}());
CfDemoDynamicComponentLoaderExampleTwo = __decorate([
    core_1.Component({
        selector: 'cf-demo-dynamic-component-loader-example-two',
        template: '<button md-button="" (click)="onClick()">TWO</button>'
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], CfDemoDynamicComponentLoaderExampleTwo);
exports.CfDemoDynamicComponentLoaderExampleTwo = CfDemoDynamicComponentLoaderExampleTwo;
var CfDemoDynamicComponentLoader = (function () {
    function CfDemoDynamicComponentLoader() {
        this.button = new cedrus_fusion_3.ButtonModel({
            label: "My CfButtonComponent"
        });
        this.weather = new cedrus_fusion_4.WeatherComponentModel({
            defaultCities: ["Paris", "Beirut", "London", "Dubai"],
            mode: "card",
            onItemClick: null
        });
    }
    CfDemoDynamicComponentLoader.prototype.selectComponent = function (componentName) {
        switch (componentName) {
            case 1:
                this.selectedComponent = {
                    component: CfDemoDynamicComponentLoaderExampleOne,
                    inputs: {
                        inputText: 'This is example one.'
                    }
                };
                break;
            case 2:
                this.selectedComponent = {
                    component: CfDemoDynamicComponentLoaderExampleTwo,
                    inputs: {
                        onClick: function () {
                            alert('This is example two.');
                        }
                    }
                };
                break;
            case 3:
                this.selectedComponent = {
                    component: cedrus_fusion_1.CfButtonComponent,
                    inputs: {
                        settings: this.button
                    }
                };
                break;
            case 4:
                this.selectedComponent = {
                    component: cedrus_fusion_2.CfWeatherComponent,
                    inputs: {
                        settings: this.weather
                    }
                };
                break;
        }
    };
    return CfDemoDynamicComponentLoader;
}());
CfDemoDynamicComponentLoader = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-dynamic-component-loader',
        templateUrl: './demo.dynamic-component-loader-1.html',
        styleUrls: ['./demo.dynamic-component-loader-1.css'],
        // * Important *: You must add any components you may wish to load dynamically
        // to the `entryComponents` array
        entryComponents: [
            CfDemoDynamicComponentLoaderExampleOne,
            CfDemoDynamicComponentLoaderExampleTwo,
            cedrus_fusion_1.CfButtonComponent,
            cedrus_fusion_2.CfWeatherComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], CfDemoDynamicComponentLoader);
exports.CfDemoDynamicComponentLoader = CfDemoDynamicComponentLoader;
;
//# sourceMappingURL=demo.dynamic-component-loader-1.js.map