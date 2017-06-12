"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CfDemoDialog1 = (function (_super) {
    __extends(CfDemoDialog1, _super);
    function CfDemoDialog1(elementRef, cfComponentTemplateService) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        _this.cfComponentTemplateService = cfComponentTemplateService;
        _this.customers = [{
                name: 'John',
                city: 'Anchorage'
            }, {
                name: 'Jack',
                city: 'NYC'
            }, {
                name: 'Jane',
                city: 'Paris'
            }, {
                name: 'John',
                city: 'Anchorage'
            }, {
                name: 'Jack',
                city: 'NYC'
            }, {
                name: 'Jane',
                city: 'Paris'
            }, {
                name: 'John',
                city: 'Anchorage'
            }, {
                name: 'Jack',
                city: 'NYC'
            }, {
                name: 'Jane',
                city: 'Paris'
            }, {
                name: 'John',
                city: 'Anchorage'
            }, {
                name: 'Jack',
                city: 'NYC'
            }, {
                name: 'Jane',
                city: 'Paris'
            }];
        return _this;
    }
    CfDemoDialog1.prototype.ngOnInit = function () { };
    CfDemoDialog1.prototype.showTemplateInDialog = function () {
        var _this = this;
        var dialogOptions = {
            title: 'Customers List',
            okButton: true,
            cancelButton: false,
            width: '50%',
            height: '50%',
            disableClose: false,
            dialogType: 'info' //'warning', 'info', 'error'
        };
        dialogOptions['okCallback'] = function (result) {
            _this.selectedOption = result;
        };
        this.cfComponentTemplateService.showInDialog({
            template: this.componentDialogTemplate,
            dialogOptions: dialogOptions
        });
    };
    CfDemoDialog1.prototype.showTemplateInDialogWithinComponent = function () {
        var _this = this;
        var dialogOptions = {
            target: this.id,
            title: 'Customers List',
            okButton: true,
            cancelButton: false,
            width: '50%',
            height: '50%',
            disableClose: false,
            dialogType: 'info' //'warning', 'info', 'error'
        };
        dialogOptions['okCallback'] = function (result) {
            _this.selectedOption = result;
        };
        this.cfComponentTemplateService.showInDialog({
            template: this.componentDialogTemplate,
            dialogOptions: dialogOptions
        });
    };
    CfDemoDialog1.prototype.showTextInDialog = function () {
        var _this = this;
        // we want the text to be centered vertically, so, do not pass height
        var dialogOptions = {
            title: 'Customers List',
            okButton: true,
            cancelButton: false,
            width: '50%',
            disableClose: false,
            dialogType: 'info' //'warning', 'info', 'error'
        };
        dialogOptions['okCallback'] = function (result) {
            _this.selectedOption = result;
        };
        this.cfComponentTemplateService.showInDialog({
            text: 'Hello World!',
            dialogOptions: dialogOptions
        });
    };
    CfDemoDialog1.prototype.showTemplateInFloatingDialog = function (event) {
        var _this = this;
        var dialogOptions = {
            sourceEvent: event,
            position: 'auto',
            title: 'Customers List',
            okButton: true,
            cancelButton: true,
            width: '500px',
            height: '300px',
            dialogType: 'warning' //'warning', 'info', 'error'
        };
        dialogOptions['okCallback'] = function (result) {
            _this.selectedOption = result;
        };
        this.cfComponentTemplateService.showInFloatingDialog({
            template: this.componentDialogTemplate,
            dialogOptions: dialogOptions
        });
    };
    return CfDemoDialog1;
}(cedrus_fusion_1.CfCoreComponent));
__decorate([
    core_1.ViewChild('componentDialogTemplate', { read: core_1.TemplateRef }),
    __metadata("design:type", core_1.TemplateRef)
], CfDemoDialog1.prototype, "componentDialogTemplate", void 0);
CfDemoDialog1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-dialog-1',
        templateUrl: './demo.dialog-1.html',
        styleUrls: ['./demo.dialog-1.scss'],
        entryComponents: [cedrus_fusion_2.CfDialogComponent]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, cedrus_fusion_3.CfComponentTemplateService])
], CfDemoDialog1);
exports.CfDemoDialog1 = CfDemoDialog1;
//# sourceMappingURL=demo.dialog-1.js.map