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
var CfDemoList1 = (function () {
    function CfDemoList1() {
        this.header = 'Simple List';
        this.myList = new cedrus_fusion_1.ListModel({
            title: 'List Component Demo'
        });
        this.withCheckbox = false;
        this.items = [];
        this.selected = [];
    }
    CfDemoList1.prototype.ngOnInit = function () {
        this.items = [
            {
                name: 'Austin',
                city: 'London',
                avatar: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png'
            },
            {
                name: 'Molly',
                city: 'Denver',
                avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png'
            },
            {
                name: 'Peter',
                city: 'Tokyo',
                avatar: 'http://static.tumblr.com/c172fd03bf2bedb77e13107cb22cdcc1/3rxa3xq/asBo7l3wr/tumblr_static_6fbdkgohxjgoc4c8o8kwoso4k.png'
            }
        ];
        this.itemsStyling = new cedrus_fusion_2.ItemStylingModel({
            item: {
                class: "normalItem"
            },
            selectedItem: {
                class: "selectedItem"
            }
        });
    };
    CfDemoList1.prototype.log = function (e) {
        this.selected.push(e);
    };
    CfDemoList1.prototype.updateValues = function ($event) {
        this.selected = $event;
    };
    return CfDemoList1;
}());
CfDemoList1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-list-1',
        templateUrl: './demo.list-1.html',
        styleUrls: ['./demo.list-1.scss']
    })
], CfDemoList1);
exports.CfDemoList1 = CfDemoList1;
//# sourceMappingURL=demo.list-1.js.map