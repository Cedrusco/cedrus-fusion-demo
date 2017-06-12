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
var CfDemoImage2 = (function () {
    function CfDemoImage2() {
        this.myImage1 = new cedrus_fusion_1.ImageModel({
            url: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/beach-wallpaper-11.jpg',
            labelPosition: 'right',
        });
        this.imageStyling1 = new cedrus_fusion_2.ImageStylingModel({
            image: {
                class: "image1"
            }
        });
        this.myImage2 = new cedrus_fusion_1.ImageModel({
            label: 'My image text',
            labelPosition: 'top',
            url: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/beach-wallpaper-11.jpg',
        });
        this.imageStyling2 = new cedrus_fusion_2.ImageStylingModel({
            label: {
                class: "label2"
            },
            image: {
                class: "image2"
            }
        });
    }
    CfDemoImage2.prototype.ngOnInit = function () { };
    return CfDemoImage2;
}());
CfDemoImage2 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-image-2',
        templateUrl: './demo.image-2.html',
        styleUrls: ['./demo.image-2.scss']
    })
], CfDemoImage2);
exports.CfDemoImage2 = CfDemoImage2;
//# sourceMappingURL=demo.image-2.js.map