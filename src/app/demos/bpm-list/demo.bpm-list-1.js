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
var CfDemoBpmList1 = (function () {
    function CfDemoBpmList1() {
        /**
         * Represents a customized theme for some components in the application
         */
        this.themeName = '';
        this.demoBPMList1 = new cedrus_fusion_1.BpmTaskListModel({
            bpmUrl: "/api/tasks"
        });
        this.demoBPMList2 = new cedrus_fusion_1.BpmTaskListModel({
            bpmUrl: "https://174.129.47.63:9443/rest/bpm/wle/v1/search/query?condition=bpdName%7CPatient+Enrolllment+Process&condition=taskStatus%7CReceived&condition=taskSubject%7CNotEquals%7CStep%3A+Enroll+New+Paitient&organization=byInstance&run=true&shared=false&filterByCurrentUser=true",
            //bpmUrl: "https://174.129.47.63:9443/rest/bpm/wle/v1/task/8639?action=finish&parts=all",
            username: "bpmadmin",
            password: "C3drus123"
        });
        this.BPMListProperties = {
            width: "500px",
            height: "100%"
        };
    }
    CfDemoBpmList1.prototype.ngOnInit = function () {
    };
    return CfDemoBpmList1;
}());
CfDemoBpmList1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-bpm-list-1',
        templateUrl: './demo.bpm-list-1.html',
        styleUrls: ['./demo.bpm-list-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoBpmList1);
exports.CfDemoBpmList1 = CfDemoBpmList1;
//# sourceMappingURL=demo.bpm-list-1.js.map