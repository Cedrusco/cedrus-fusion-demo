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
var cedrus_fusion_4 = require("cedrus-fusion");
var cedrus_fusion_5 = require("cedrus-fusion");
var CfDemoWizard1 = (function () {
    function CfDemoWizard1() {
        this.myWizard = new cedrus_fusion_2.WizardModel({
            showStepNumberAsIcon: true,
        });
        this.myWizard2 = new cedrus_fusion_2.WizardModel({
            showStepNumberAsPrefix: true,
        });
        this.myWizardStyles = new cedrus_fusion_3.WizardStylingModel({
            container: {
                class: "my-custom-wizard"
            },
            nextButton: new cedrus_fusion_1.ButtonStylingModel({
                button: {
                    class: "my-wizard-next-button ",
                }
            })
        });
        this.steps = [
            new cedrus_fusion_4.WizardStepModel({ header: { label: "Step" }, isValid: true }),
            new cedrus_fusion_4.WizardStepModel({ header: { label: "Step" }, isValid: true }),
            new cedrus_fusion_4.WizardStepModel({ header: { label: "Step" }, isValid: true }),
            new cedrus_fusion_4.WizardStepModel({ header: { label: "Step" }, isValid: true }),
            new cedrus_fusion_4.WizardStepModel({ header: { label: "Step" }, isValid: true }),
        ];
        this.myWizardStepStyles = new cedrus_fusion_5.WizardStepStylingModel({
            container: {
                class: "my-custom-wizard-step"
            },
            header: new cedrus_fusion_1.ButtonStylingModel({
                button: {
                    class: "my-wizard-step-header-button ",
                }
            })
        });
    }
    CfDemoWizard1.prototype.ngOnInit = function () {
        setTimeout(function () {
            // this.steps[2]['isValid'] = false;
        }, 5000);
        console.log('demo wizard', this);
    };
    return CfDemoWizard1;
}());
CfDemoWizard1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-wizard-1',
        templateUrl: './demo.wizard-1.html',
        styleUrls: ['./demo.wizard-1.scss']
    })
], CfDemoWizard1);
exports.CfDemoWizard1 = CfDemoWizard1;
//# sourceMappingURL=demo.wizard-1.js.map