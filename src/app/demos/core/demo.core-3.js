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
var CfDemoCore3 = (function () {
    function CfDemoCore3() {
        this.selectedAnimation = "";
        this.animations = [
            "bounceIn bounceOut",
            "bounceIn bounceOut left",
            "bounceIn bounceOut right",
            "fadeIn fadeOut",
            "fadeIn fadeOut left",
            "fadeIn fadeOut right",
            "rotateIn rotateOut",
            "rotateIn rotateOut down left",
            "rotateIn rotateOut down right",
            "slideIn slideOut left",
            "slideIn slideOut right",
            "zoomIn zoomOut",
            "zoomIn zoomOut left",
            "zoomIn zoomOut right"
        ];
        this.button1 = new cedrus_fusion_1.ButtonModel({
            label: "Animate it"
        });
        this.button2 = new cedrus_fusion_1.ButtonModel({
            label: "Animation Example"
        });
        this.currentAnimation = "";
    }
    CfDemoCore3.prototype.ngOnInit = function () {
    };
    CfDemoCore3.prototype.toggleAnimation = function () {
        if (this.selectedAnimation && !this.currentAnimation) {
            this.currentAnimation = this.selectedAnimation;
        }
        else if (this.selectedAnimation && this.currentAnimation) {
            this.currentAnimation = "";
        }
    };
    return CfDemoCore3;
}());
CfDemoCore3 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-core-3',
        templateUrl: './demo.core-3.html',
        styleUrls: ['./demo.core-3.scss'],
        animations: [
            cedrus_fusion_2.CfAnimationService.bounceIn(),
            cedrus_fusion_2.CfAnimationService.bounceOut(),
            cedrus_fusion_2.CfAnimationService.bounceInLeft(),
            cedrus_fusion_2.CfAnimationService.bounceInRight(),
            cedrus_fusion_2.CfAnimationService.bounceOutLeft(),
            cedrus_fusion_2.CfAnimationService.bounceOutRight(),
            cedrus_fusion_2.CfAnimationService.fadeIn(),
            cedrus_fusion_2.CfAnimationService.fadeOut(),
            cedrus_fusion_2.CfAnimationService.fadeInLeft(),
            cedrus_fusion_2.CfAnimationService.fadeInRight(),
            cedrus_fusion_2.CfAnimationService.fadeOutLeft(),
            cedrus_fusion_2.CfAnimationService.fadeOutRight(),
            cedrus_fusion_2.CfAnimationService.rotateIn(),
            cedrus_fusion_2.CfAnimationService.rotateOut(),
            cedrus_fusion_2.CfAnimationService.rotateInDownLeft(),
            cedrus_fusion_2.CfAnimationService.rotateInDownRight(),
            cedrus_fusion_2.CfAnimationService.rotateOutDownLeft(),
            cedrus_fusion_2.CfAnimationService.rotateOutDownRight(),
            cedrus_fusion_2.CfAnimationService.slideInLeft(),
            cedrus_fusion_2.CfAnimationService.slideInRight(),
            cedrus_fusion_2.CfAnimationService.slideOutLeft(),
            cedrus_fusion_2.CfAnimationService.slideOutRight(),
            cedrus_fusion_2.CfAnimationService.zoomIn(),
            cedrus_fusion_2.CfAnimationService.zoomOut(),
            cedrus_fusion_2.CfAnimationService.zoomInLeft(),
            cedrus_fusion_2.CfAnimationService.zoomInRight(),
            cedrus_fusion_2.CfAnimationService.zoomOutLeft(),
            cedrus_fusion_2.CfAnimationService.zoomOutRight(),
        ]
    }),
    __metadata("design:paramtypes", [])
], CfDemoCore3);
exports.CfDemoCore3 = CfDemoCore3;
//# sourceMappingURL=demo.core-3.js.map