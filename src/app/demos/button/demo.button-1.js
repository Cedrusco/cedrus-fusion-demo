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
var CfDemoButton1 = (function () {
    function CfDemoButton1() {
    }
    CfDemoButton1.prototype.ngOnInit = function () {
    };
    CfDemoButton1.prototype.function1 = function () {
        alert('This is Button 1 speaking...');
    };
    CfDemoButton1.prototype.function2 = function () {
        alert('This is Button 2 speaking...');
    };
    return CfDemoButton1;
}());
CfDemoButton1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-button-1',
        templateUrl: './demo.button-1.html',
        styleUrls: ['./demo.button-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoButton1);
exports.CfDemoButton1 = CfDemoButton1;
//# sourceMappingURL=demo.button-1.js.map