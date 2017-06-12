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
var CfDemoNews1 = (function () {
    function CfDemoNews1() {
        this.newsDemo = new cedrus_fusion_1.NewsComponentModel({
            id: "news1",
            defaultChannel: "the-new-york-times",
            channelList: ['cnn', 'mtv-news', 'the-new-york-times', 'fox-sports'],
            showChannelList: false,
            showItems: 4
        });
    }
    CfDemoNews1.prototype.ngOnInit = function () {
    };
    CfDemoNews1.prototype.readMore = function ($event) {
        var title = $event.title;
        alert("You pressed on " + title);
    };
    return CfDemoNews1;
}());
CfDemoNews1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-news-1',
        templateUrl: './demo.news-1.html',
        styleUrls: ['./demo.news-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoNews1);
exports.CfDemoNews1 = CfDemoNews1;
//# sourceMappingURL=demo.news-1.js.map