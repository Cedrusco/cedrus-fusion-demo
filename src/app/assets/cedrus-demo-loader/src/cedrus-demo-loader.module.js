"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var index_1 = require("./components/index");
var index_2 = require("./components/index");
var index_3 = require("./services/index");
var CedrusDemoLoaderModule = CedrusDemoLoaderModule_1 = (function () {
    function CedrusDemoLoaderModule() {
    }
    CedrusDemoLoaderModule.forRoot = function () {
        return {
            ngModule: CedrusDemoLoaderModule_1,
        };
    };
    return CedrusDemoLoaderModule;
}());
CedrusDemoLoaderModule = CedrusDemoLoaderModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            index_1.DemoLoaderComponent,
            index_2.DocumentationLoaderComponent
        ],
        exports: [
            index_1.DemoLoaderComponent,
            index_2.DocumentationLoaderComponent
        ],
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            material_1.MaterialModule,
        ],
        providers: [
            index_3.ExampleLoaderService,
        ]
    })
], CedrusDemoLoaderModule);
exports.CedrusDemoLoaderModule = CedrusDemoLoaderModule;
var CedrusDemoLoaderModule_1;
//# sourceMappingURL=cedrus-demo-loader.module.js.map