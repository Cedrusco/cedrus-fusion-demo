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
var CfDemoIcon2 = (function () {
    function CfDemoIcon2() {
        this.state = "Like";
    }
    CfDemoIcon2.prototype.ngOnInit = function () {
        this.toogleIcon = new cedrus_fusion_1.IconModel({
            name: 'fa-thumbs-up',
            size: '50px',
            value: 'Like',
            toggle: {
                value: 'Dislike',
                name: 'fa-thumbs-down',
                size: '50px'
            }
        });
        this.iconStyling = new cedrus_fusion_2.IconStylingModel({
            icon: {
                class: "like"
            },
            toggleIcon: {
                icon: {
                    class: "dislike"
                }
            }
        });
    };
    // Catching the State of the Icon	
    CfDemoIcon2.prototype.log = function (ev) {
        this.state = ev;
    };
    return CfDemoIcon2;
}());
CfDemoIcon2 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-icon-2',
        templateUrl: './demo.icon-2.html',
        styleUrls: ['./demo.icon-2.scss']
    })
], CfDemoIcon2);
exports.CfDemoIcon2 = CfDemoIcon2;
//# sourceMappingURL=demo.icon-2.js.map