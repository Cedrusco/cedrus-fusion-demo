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
var CfDemoCustomerList1 = (function () {
    function CfDemoCustomerList1() {
        /**
         * Represents a customized theme for some components in the application
         */
        this.themeName = '';
        this.customers = new cedrus_fusion_1.CustomerListModel({
            items: [{
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
                }]
        });
        this.properties = {
            templates: {
                customerDetailsTmpl: {
                    title: 'Customers List',
                    templateType: 'dialog',
                    width: '300px',
                    height: '200px',
                    disableClose: false,
                    mode: 'over',
                    align: 'start',
                    dialogType: 'info' //'warning', 'info', 'error'
                }
            }
        };
        this.customerDetailsTmplType = '';
        this.customerDetailsTmpls = [{
                "value": "listInComponent",
                "title": "Customer List in Entire Component Area"
            }, {
                "value": "detailsInComponent",
                "title": "Customer Details in Entire Component Area"
            }, {
                "value": "dialog",
                "title": "Customer Details in Dialog"
            }, {
                "value": "sidenavLeft",
                "title": "Customer Details in Sidenav Left"
            }, {
                "value": "sidenavRight",
                "title": "Customer Details in Sidenav Right"
            }, {
                "value": "sidenavOver",
                "title": "Customer Details in Sidenav Over"
            }, {
                "value": "sidenavPush",
                "title": "Customer Details in Sidenav Push"
            }, {
                "value": "sidenavSide",
                "title": "Customer Details in Sidenav Side"
            }];
    }
    CfDemoCustomerList1.prototype.ngOnInit = function () { };
    CfDemoCustomerList1.prototype.setTemplate = function () {
        switch (this.customerDetailsTmplType) {
            case 'listInComponent':
                this.properties.templates.customerDetailsTmpl.templateType = 'listInComponent';
                break;
            case 'detailsInComponent':
                this.properties.templates.customerDetailsTmpl.templateType = 'detailsInComponent';
                break;
            case 'dialog':
                this.properties.templates.customerDetailsTmpl.templateType = 'dialog';
                break;
            case 'sidenavLeft':
                this.properties.templates.customerDetailsTmpl.templateType = 'sidenav';
                this.properties.templates.customerDetailsTmpl.align = 'start';
                break;
            case 'sidenavRight':
                this.properties.templates.customerDetailsTmpl.templateType = 'sidenav';
                this.properties.templates.customerDetailsTmpl.align = 'end';
                break;
            case 'sidenavOver':
                this.properties.templates.customerDetailsTmpl.templateType = 'sidenav';
                this.properties.templates.customerDetailsTmpl.mode = 'over';
                break;
            case 'sidenavPush':
                this.properties.templates.customerDetailsTmpl.templateType = 'sidenav';
                this.properties.templates.customerDetailsTmpl.mode = 'push';
                break;
            case 'sidenavSide':
                this.properties.templates.customerDetailsTmpl.templateType = 'sidenav';
                this.properties.templates.customerDetailsTmpl.mode = 'side';
                break;
        }
    };
    return CfDemoCustomerList1;
}());
CfDemoCustomerList1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-customer-list-1',
        templateUrl: './demo.customer-list-1.html',
        styleUrls: ['./demo.customer-list-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoCustomerList1);
exports.CfDemoCustomerList1 = CfDemoCustomerList1;
//# sourceMappingURL=demo.customer-list-1.js.map