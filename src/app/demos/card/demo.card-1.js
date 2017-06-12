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
var CfDemoCard1 = (function () {
    function CfDemoCard1() {
        this.title = "Card Demo";
        this.themeName = "";
        this.newsCard = new cedrus_fusion_1.NewsCardModel({
            description: "Something important happened in somewhere important",
            title: "Something Happened!",
            subtitle: "subtitle",
            author: "Someone..",
            date: "2017-02-28",
            image: "./assets/images/news.jpg",
            url: "http://www.google.com",
            color: {
                foreground: "black",
                background: "white"
            },
            size: {
                width: "250px"
            },
            align: "right"
        });
        this.productCard1 = new cedrus_fusion_2.ProductCardModel({
            description: "Men's Basketball Shoes",
            name: "NIKE HYPERCHASE",
            price: "125$",
            image: "./assets/images/nike.jpg",
            image_type: "normal",
            color: {
                foreground: "black",
                background: "white"
            },
            size: {
                width: "200px"
            },
            align: "right",
            onBuy: this.clickFunc,
            onAdd: this.clickFunc
        });
        this.productCard2 = new cedrus_fusion_2.ProductCardModel({
            description: "Awesome Laptop",
            name: "Laptop",
            price: "999$",
            image: "./assets/images/laptop.png",
            image_type: "title",
            color: {
                foreground: "black",
                background: "white"
            },
            size: {
                width: "200px"
            },
            align: "right",
            onBuy: this.clickFunc,
            onAdd: this.clickFunc
        });
        this.standardCard1 = new cedrus_fusion_3.StandardCardModel({
            subtitle: "Software Engineer",
            title: "Sensei",
            description: "Tel: 70-413522",
            image: "./assets/images/sensei.png",
            image_type: "avatar",
            color: {
                foreground: "black",
                background: "#dcf1f5"
            },
            size: {
                width: "200px"
            },
            align: "right",
            onSelect: null,
            onDelete: null
        });
        this.standardCard2 = new cedrus_fusion_3.StandardCardModel({
            subtitle: "Software Engineer",
            title: "Sensei",
            description: "Tel: 70-413522",
            image: "./assets/images/sensei.png",
            image_type: "title",
            color: {
                foreground: "black",
                background: "#f3f7d6"
            },
            size: {
                width: "200px"
            },
            align: "right",
            onEdit: this.clickFunc,
            onDelete: this.clickFunc
        });
    }
    CfDemoCard1.prototype.clickFunc = function (name) {
        alert("You pressed " + name);
    };
    CfDemoCard1.prototype.ngOnInit = function () {
    };
    return CfDemoCard1;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CfDemoCard1.prototype, "themeName", void 0);
CfDemoCard1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-card-1',
        templateUrl: './demo.card-1.html',
        styleUrls: ['./demo.card-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoCard1);
exports.CfDemoCard1 = CfDemoCard1;
//# sourceMappingURL=demo.card-1.js.map