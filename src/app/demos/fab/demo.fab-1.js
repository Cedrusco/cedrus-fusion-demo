"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CfDemoFab1 = (function () {
    function CfDemoFab1() {
        this.shown = true;
        this.disabled = true;
        this.myFab1 = {
            direction: "right",
            showButtons: true,
            triggerButton: { label: "Trigger", labelPosition: "above", disabled: true },
            actionButtons: [
                { icon: { name: "home" }, display: this.shown },
                { icon: { name: "star" }, label: "Item", labelPosition: "below" },
                { icon: { name: "stars" }, label: "Item", labelPosition: "above", disabled: this.disabled }
            ]
        };
        this.myFabStyles1 = {
            container: {
                class: 'container-class',
                dynamicClass: ''
            },
            fabDial: {
                trigger: {
                    class: 'trigger-class',
                    dynamicClass: '',
                    icon: {
                        class: 'trigger-icon-class',
                        dynamicClass: ''
                    }
                },
                actions: {
                    class: 'action-class',
                    dynamicClass: '',
                    icon: {
                        class: 'action-icon-class',
                        dynamicClass: ''
                    }
                }
            }
        };
        this.myFab2 = {
            direction: "left",
            stayOpened: true,
            triggerButton: { icon: { name: "menu" }, label: "Trigger", labelPosition: "above", display: this.shown },
            actionButtons: [
                { icon: { name: "home" }, display: this.shown },
                { icon: { name: "star" }, label: "Item", labelPosition: "below" },
                { icon: { name: "stars" }, disabled: this.disabled }
            ]
        };
        this.myFab3 = {
            direction: "up",
            actionButtons: [
                { icon: { name: "home" }, display: this.shown },
                { icon: { name: "star" }, label: "Item", labelPosition: "left" },
                { icon: { name: "stars" }, disabled: this.disabled }
            ]
        };
        this.myFab4 = {
            direction: "down",
            triggerButton: { icon: { name: 'fa-gear' } },
            actionButtons: [
                { icon: { name: "fa-apple" }, display: this.shown },
                { icon: { name: "fa-star" }, label: "Item", labelPosition: "left" },
                { icon: { name: "fa-home" }, disabled: this.disabled }
            ]
        };
        this.selected = [];
    }
    CfDemoFab1.prototype.toggleShown = function () {
        this.myFab1.actionButtons[0].display = !this.myFab1.actionButtons[0].display;
        this.myFab2.actionButtons[0].display = !this.myFab2.actionButtons[0].display;
        this.myFab2.triggerButton.display = !this.myFab2.triggerButton.display;
        this.myFab3.actionButtons[0].display = !this.myFab3.actionButtons[0].display;
        this.myFab4.actionButtons[0].display = !this.myFab4.actionButtons[0].display;
    };
    CfDemoFab1.prototype.log = function (e, i) {
        console.log('e', e);
        this.selected.push(e);
    };
    return CfDemoFab1;
}());
CfDemoFab1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-fab-1',
        templateUrl: './demo.fab-1.html',
        styleUrls: ['./demo.fab-1.scss']
    })
], CfDemoFab1);
exports.CfDemoFab1 = CfDemoFab1;
//# sourceMappingURL=demo.fab-1.js.map