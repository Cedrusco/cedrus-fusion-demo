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
var CfDemoIcon3 = (function () {
    function CfDemoIcon3() {
    }
    CfDemoIcon3.prototype.ngOnInit = function () {
        this.icon1 = new cedrus_fusion_1.IconModel({
            name: "account_box",
            size: "50px"
        });
        this.iconStyling1 = new cedrus_fusion_2.IconStylingModel({
            container: {
                class: "iconContainer"
            },
            icon: {
                class: "iconProfile"
            }
        });
    };
    return CfDemoIcon3;
}());
CfDemoIcon3 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-icon-3',
        templateUrl: './demo.icon-3.html',
        styleUrls: ['./demo.icon-3.scss']
    })
], CfDemoIcon3);
exports.CfDemoIcon3 = CfDemoIcon3;
//# sourceMappingURL=demo.icon-3.js.map