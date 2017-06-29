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
var index_1 = require("../../services/index");
var DemoLoaderComponent = (function () {
    function DemoLoaderComponent(resolver, exampleLoaderService) {
        this.resolver = resolver;
        this.exampleLoaderService = exampleLoaderService;
        this.current = null;
        this.currentName = '';
        this.currentFilename = '';
        this.currentSource = { examples: [],
            documentation: ''
        };
        this.currentDescription = '';
        this.currentComponent = null;
        this.overviewComponent = null;
        this.showHide = [];
        this.initialized = false;
    }
    Object.defineProperty(DemoLoaderComponent.prototype, "componentData", {
        set: function (data) {
            var _this = this;
            if (!data) {
                return;
            }
            this.data = data;
            this.getSubscription = this.exampleLoaderService.getSource('component', this.data.fileName, data.demos.length)
                .subscribe(function (source) {
                _this.initialized = false;
                _this.currentDescription = _this.data.description;
                _this.currentFilename = _this.data.fileName;
                _this.currentName = _this.data.componentName.substring(0, _this.data.componentName.length - 9);
                _this.currentSource = source;
                _this.showHide = [];
                for (var i = 0; i < source["examples"].length; i++)
                    _this.showHide.push(false);
            });
        },
        enumerable: true,
        configurable: true
    });
    DemoLoaderComponent.prototype.clickPlunkerButton = function (ind) {
        var form = this.exampleLoaderService.constructPlunkerForm(this.currentSource["examples"][ind]);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    };
    DemoLoaderComponent.prototype.ngOnDestroy = function () {
        this.getSubscription.unsubscribe();
    };
    DemoLoaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dynamicComponentContainer.changes.subscribe(function (changes) {
            if (_this.dynamicComponentContainer.toArray().length && _this.initialized == false) {
                console.log("Number: ", _this.dynamicComponentContainer.toArray().length);
                _this.initialized = true;
                if (_this.currentComponent) {
                    _this.currentComponent.destroy();
                }
                if (_this.overviewComponent) {
                    _this.overviewComponent.destroy();
                }
                setTimeout(function (_) {
                    return _this.createComponent();
                });
            }
        });
    };
    DemoLoaderComponent.prototype.createComponent = function () {
        var _this = this;
        var inputProviders = Object.keys(this.data.demos[0].inputs).map(function (inputName) { return { provide: inputName, useValue: _this.data.demos[0].inputs[inputName] }; });
        var resolvedInputs = core_1.ReflectiveInjector.resolve(inputProviders);
        var injector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.toArray()[0].parentInjector);
        var factory = this.resolver.resolveComponentFactory(this.data.demos[0].component);
        var component = factory.create(injector);
        this.dynamicComponentContainer.toArray()[0].insert(component.hostView);
        this.overviewComponent = component;
        for (var ind = 0; ind < this.data.demos.length; ind++) {
            var inputProviders_1 = Object.keys(this.data.demos[ind].inputs).map(function (inputName) { return { provide: inputName, useValue: _this.data.demos[ind].inputs[inputName] }; });
            var resolvedInputs_1 = core_1.ReflectiveInjector.resolve(inputProviders_1);
            var injector_1 = core_1.ReflectiveInjector.fromResolvedProviders(resolvedInputs_1, this.dynamicComponentContainer.toArray()[ind + 1].parentInjector);
            var factory_1 = this.resolver.resolveComponentFactory(this.data.demos[ind].component);
            var component_1 = factory_1.create(injector_1);
            this.dynamicComponentContainer.toArray()[ind + 1].insert(component_1.hostView);
            this.currentComponent = component_1;
        }
    };
    return DemoLoaderComponent;
}());
__decorate([
    core_1.ViewChildren('dynamicComponentContainer', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.QueryList)
], DemoLoaderComponent.prototype, "dynamicComponentContainer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DemoLoaderComponent.prototype, "componentData", null);
DemoLoaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cd-demo-loader',
        styleUrls: ['./demo-loader.component.css'],
        templateUrl: './demo-loader.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        index_1.ExampleLoaderService])
], DemoLoaderComponent);
exports.DemoLoaderComponent = DemoLoaderComponent;
//# sourceMappingURL=demo-loader.component.js.map