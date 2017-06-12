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
var cedrus_fusion_3 = require("cedrus-fusion");
var CfDemoRating1 = (function () {
    function CfDemoRating1() {
        this.disabled = false;
        this.myRating = new cedrus_fusion_1.RatingModel({
            label: 'Rating label',
            icon: 'stars',
            value: 1,
            max: 5,
            countFromEnd: false,
            iconsVertical: false,
            disabled: this.disabled
        });
        this.myRating2 = new cedrus_fusion_1.RatingModel({
            label: 'Rating label',
            icon: 'stars',
            value: 1,
            max: 5,
            countFromEnd: true,
            iconsVertical: false,
            disabled: this.disabled
        });
        this.myRating3 = new cedrus_fusion_1.RatingModel({
            label: 'Rating label',
            icon: 'stars',
            value: 1,
            max: 5,
            countFromEnd: false,
            iconsVertical: true,
            disabled: this.disabled
        });
        this.myRating4 = new cedrus_fusion_1.RatingModel({
            label: 'Rating label',
            icon: 'stars',
            value: 1,
            max: 5,
            countFromEnd: true,
            iconsVertical: true,
            disabled: this.disabled
        });
        this.myRatingStyles = new cedrus_fusion_3.RatingStylingModel({
            container: new cedrus_fusion_2.StylingModel({
                class: 'my-rating-container',
            }),
            label: new cedrus_fusion_2.StylingModel({
                class: 'my-rating-label'
            }),
            item: new cedrus_fusion_2.StylingModel({
                class: 'my-rating-item-icon',
                dynamicClass: "'dynamic-items-class'"
            }),
            iconSize: '30px',
            filledColor: 'lightseagreen',
            emptyColor: 'darkseagreen',
        });
    }
    CfDemoRating1.prototype.changeMyRatingsDisabled = function () {
        this.myRating.disabled = !this.myRating.disabled;
        this.myRating2.disabled = !this.myRating2.disabled;
        this.myRating3.disabled = !this.myRating3.disabled;
        this.myRating4.disabled = !this.myRating4.disabled;
    };
    CfDemoRating1.prototype.changeMyRatingsValues = function () {
        this.myRating.value = 3;
        this.myRating2.value = 3;
        this.myRating3.value = 3;
        this.myRating4.value = 3;
    };
    return CfDemoRating1;
}());
CfDemoRating1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-rating-1',
        templateUrl: './demo.rating-1.html',
        styleUrls: ['./demo.rating-1.scss']
    })
], CfDemoRating1);
exports.CfDemoRating1 = CfDemoRating1;
//# sourceMappingURL=demo.rating-1.js.map