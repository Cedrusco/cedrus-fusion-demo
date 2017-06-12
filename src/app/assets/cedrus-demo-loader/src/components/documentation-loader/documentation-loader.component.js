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
var DocumentationLoaderComponent = (function () {
    function DocumentationLoaderComponent(myElement) {
        this.myElement = myElement;
    }
    DocumentationLoaderComponent.prototype.ngOnInit = function () {
    };
    return DocumentationLoaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DocumentationLoaderComponent.prototype, "docs", void 0);
DocumentationLoaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cd-documentation-loader',
        styleUrls: ['./documentation-loader.component.css'],
        templateUrl: './documentation-loader.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DocumentationLoaderComponent);
exports.DocumentationLoaderComponent = DocumentationLoaderComponent;
//# sourceMappingURL=documentation-loader.component.js.map