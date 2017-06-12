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
var CfDemoBarChart1 = (function (_super) {
    __extends(CfDemoBarChart1, _super);
    function CfDemoBarChart1(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        _this.size = {
            width: '100%',
            height: '200px'
        };
        _this.data = [
            {
                "name": "Germany",
                "value": 8940000
            },
            {
                "name": "USA",
                "value": 5000000
            },
            {
                "name": "France",
                "value": 7200000
            }
        ];
        _this.dataMulti = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "2010",
                        "value": 7300000
                    },
                    {
                        "name": "2011",
                        "value": 8940000
                    }
                ]
            },
            {
                "name": "USA",
                "series": [
                    {
                        "name": "2010",
                        "value": 7870000
                    },
                    {
                        "name": "2011",
                        "value": 8270000
                    }
                ]
            },
            {
                "name": "France",
                "series": [
                    {
                        "name": "2010",
                        "value": 5000002
                    },
                    {
                        "name": "2011",
                        "value": 5800000
                    }
                ]
            }
        ];
        _this.barChartModel = {
            orientation: cedrus_fusion_2.BAR_CHART_ORIENTATION.horizontal,
            data: _this.data
        };
        _this.chartStylingModel = new cedrus_fusion_3.ChartStylingModel({
            width: '100%',
            height: '200px'
        });
        return _this;
    }
    CfDemoBarChart1.prototype.ngOnInit = function () { };
    CfDemoBarChart1.prototype.chartClick = function (event) {
        console.log('Chart clicked: ', event);
    };
    return CfDemoBarChart1;
}(cedrus_fusion_1.CfCoreComponent));
CfDemoBarChart1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-bar-chart-1',
        templateUrl: './demo.bar-chart-1.html',
        styleUrls: ['./demo.bar-chart-1.scss']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CfDemoBarChart1);
exports.CfDemoBarChart1 = CfDemoBarChart1;
//# sourceMappingURL=demo.bar-chart-1.js.map