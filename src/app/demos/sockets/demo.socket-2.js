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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var cedrus_fusion_1 = require("cedrus-fusion");
var cedrus_fusion_2 = require("cedrus-fusion");
//CfSocketService.configure({ endpoint: 'http://localhost:8080' });
var CfDemoSocket2 = (function () {
    function CfDemoSocket2(snackBar, socketService, changeDetector) {
        this.snackBar = snackBar;
        this.socketService = socketService;
        this.changeDetector = changeDetector;
        this.typeOneChecked = false;
        this.typeTwoChecked = false;
        this.typeThreeChecked = false;
        this.messages = [];
    }
    CfDemoSocket2.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.subscribe('type_one', function (data) {
            if (_this.typeOneChecked) {
                _this.messages.push("TYPE 1: " + data);
                _this.changeDetector.detectChanges();
            }
        });
        this.socketService.subscribe('type_two', function (data) {
            if (_this.typeTwoChecked) {
                _this.messages.push("TYPE 2: " + data);
                _this.changeDetector.detectChanges();
            }
        });
        this.socketService.subscribe('type_three', function (data) {
            if (_this.typeThreeChecked) {
                _this.messages.push("TYPE 3: " + data);
                _this.changeDetector.detectChanges();
            }
        });
    };
    return CfDemoSocket2;
}());
CfDemoSocket2 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-socket-2',
        template: "\n    <div id=\"demo-socket-2\">\n      <md-card>\n        <md-checkbox [(ngModel)]=\"typeOneChecked\">LISTEN FOR EVENT TYPE 1</md-checkbox>\n        <md-checkbox [(ngModel)]=\"typeTwoChecked\">LISTEN FOR EVENT TYPE 2</md-checkbox>\n        <md-checkbox [(ngModel)]=\"typeThreeChecked\">LISTEN FOR EVENT TYPE 3</md-checkbox>\n\n        <md-list>\n          <md-list-item *ngFor=\"let message of messages\">{{ message }}</md-list-item>\n        </md-list>\n      </md-card>\n    </div>\n  ",
        styleUrls: ['./demo.socket-2.css'],
    }),
    __metadata("design:paramtypes", [material_1.MdSnackBar,
        cedrus_fusion_2.CfSocketService,
        core_1.ChangeDetectorRef])
], CfDemoSocket2);
exports.CfDemoSocket2 = CfDemoSocket2;
var CfDemoSocket2Module = (function () {
    function CfDemoSocket2Module() {
    }
    return CfDemoSocket2Module;
}());
CfDemoSocket2Module = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            material_1.MaterialModule,
            cedrus_fusion_1.CfModule,
        ],
        declarations: [
            CfDemoSocket2
        ],
        bootstrap: [CfDemoSocket2]
    })
], CfDemoSocket2Module);
exports.CfDemoSocket2Module = CfDemoSocket2Module;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(CfDemoSocket2Module);
//# sourceMappingURL=demo.socket-2.js.map