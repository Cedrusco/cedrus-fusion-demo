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
var CfDemoTreeview1 = (function () {
    function CfDemoTreeview1() {
        this.header = 'Simple Treeview';
        this.myTreeview = new cedrus_fusion_1.TreeviewModel({
            items: [
                {
                    _id: '1',
                    _name: 'root1',
                    _expanded: true,
                    _children: [
                        {
                            _id: '2',
                            _expanded: false,
                            _name: 'child1'
                        },
                        {
                            _id: '3',
                            _expanded: false,
                            _name: 'child2'
                        }
                    ]
                },
                {
                    _id: '4',
                    _expanded: false,
                    _name: 'root2',
                    _children: [
                        {
                            _id: '5',
                            _expanded: false,
                            _name: 'child2.1'
                        },
                        {
                            _id: '6',
                            _expanded: false,
                            _name: 'child2.2',
                            _children: [
                                {
                                    _id: '7',
                                    _expanded: false,
                                    _name: 'subsub'
                                }
                            ]
                        }
                    ]
                }
            ],
            options: {
                idField: '_id',
                displayField: '_name',
                childrenField: '_children',
                isExpandedField: '_expanded',
                selectable: true,
                allowDrag: true,
                animateExpand: true
            }
        });
        this.myTreeStyles = new cedrus_fusion_2.TreeviewStylingModel({
            container: {
                class: 'cf-default-theme my-tree-view',
                dynamicClass: ''
            },
            item: new cedrus_fusion_3.StylingModel({
                class: 'my-tree-item',
                dynamicClass: ''
            })
        });
        this.selected = [];
    }
    CfDemoTreeview1.prototype.log = function (e) {
        this.selected = e;
    };
    CfDemoTreeview1.prototype.generateId = function () {
        return Math.floor(Math.random() * 100000);
    };
    CfDemoTreeview1.prototype.addNewItem = function () {
        var id = '' + this.generateId(), node = {
            _id: id,
            _expanded: false,
            _name: 'New node ' + id,
            _children: []
        };
        // this.myTreeview.items.push(node);
        this.myTreeview.items[0]._children.push(node);
        // this.myTreeview.items[0]._name = 'Name changed from Demo';
    };
    return CfDemoTreeview1;
}());
CfDemoTreeview1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-treeview-1',
        templateUrl: './demo.treeview-1.html',
        styleUrls: ['./demo.treeview-1.scss']
    })
], CfDemoTreeview1);
exports.CfDemoTreeview1 = CfDemoTreeview1;
//# sourceMappingURL=demo.treeview-1.js.map