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
var cedrus_fusion_4 = require("cedrus-fusion");
var cedrus_fusion_5 = require("cedrus-fusion");
var CfDemoTabs1 = (function () {
    function CfDemoTabs1() {
        this.myTabs = new cedrus_fusion_2.TabsModel({
            showCardNumberAsIcon: true,
        });
        this.myTabs2 = new cedrus_fusion_2.TabsModel({
            showCardNumberAsPrefix: true,
        });
        this.myTabsStyles = new cedrus_fusion_3.TabsStylingModel({
            container: {
                class: "my-custom-tabs"
            }
        });
        this.cards = [
            new cedrus_fusion_4.TabsCardModel({ header: { label: "Card" } }),
            new cedrus_fusion_4.TabsCardModel({ header: { label: "Card" } }),
            new cedrus_fusion_4.TabsCardModel({ header: { label: "Card" } }),
            new cedrus_fusion_4.TabsCardModel({ header: { label: "Card" } }),
            new cedrus_fusion_4.TabsCardModel({ header: { label: "Card" } }),
        ];
        this.myTabsCardStyles = new cedrus_fusion_5.TabsCardStylingModel({
            container: {
                class: "my-custom-tabs-card"
            },
            header: new cedrus_fusion_1.ButtonStylingModel({
                button: {
                    class: "my-tabs-card-header-button ",
                }
            })
        });
    }
    CfDemoTabs1.prototype.ngOnInit = function () {
    };
    return CfDemoTabs1;
}());
CfDemoTabs1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-tabs-1',
        templateUrl: './demo.tabs-1.html',
        styleUrls: ['./demo.tabs-1.scss']
    })
], CfDemoTabs1);
exports.CfDemoTabs1 = CfDemoTabs1;
//# sourceMappingURL=demo.tabs-1.js.map