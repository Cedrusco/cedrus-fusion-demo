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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ExampleLoaderService = (function () {
    function ExampleLoaderService(http) {
        this.http = http;
        this.plunkerUrl = 'https://plnkr.co/edit/?p=preview';
    }
    ExampleLoaderService.prototype.getSource = function (type, name, number) {
        return this.http.get("/" + type + "/" + name + "/" + number)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return Observable_1.Observable.throw(err.json().error || 'Server Error'); });
    };
    ExampleLoaderService.prototype.constructPlunkerForm = function (source) {
        var form = this._createForm();
        this._appendFormInput(form, 'private', 'true');
        this._appendFormInput(form, 'description', '');
        var html = source.html, sass = source.sass;
        var _a = source.plunkr, indexHtml = _a.indexHtml, systemJs = _a.systemJs, mainTs = _a.mainTs, plunkrTs = _a.plunkrTs;
        this._addSourceToForm(form, mainTs, 'main.ts');
        this._addSourceToForm(form, indexHtml, 'index.html');
        this._addSourceToForm(form, html, 'demo.html');
        this._addSourceToForm(form, plunkrTs, 'demo.ts');
        this._addSourceToForm(form, sass, 'demo.css');
        this._addSourceToForm(form, systemJs, 'systemjs.config.js');
        return form;
    };
    ExampleLoaderService.prototype._addSourceToForm = function (form, content, filename) {
        this._appendFormInput(form, "files[" + filename + "]", content);
    };
    ExampleLoaderService.prototype._appendFormInput = function (form, name, value) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
    };
    ExampleLoaderService.prototype._createForm = function () {
        var form = document.createElement('form');
        form.action = this.plunkerUrl;
        form.method = 'post';
        form.target = '_blank';
        return form;
    };
    return ExampleLoaderService;
}());
ExampleLoaderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ExampleLoaderService);
exports.ExampleLoaderService = ExampleLoaderService;
//# sourceMappingURL=example-loader.service.js.map