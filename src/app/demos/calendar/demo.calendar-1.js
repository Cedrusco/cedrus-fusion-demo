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
var cedrus_fusion_2 = require("cedrus-fusion");
var cedrus_fusion_3 = require("cedrus-fusion");
var CfDemoCalendar1 = (function () {
    function CfDemoCalendar1(cfCalendarService) {
        this.cfCalendarService = cfCalendarService;
        this.calendarOptions = new cedrus_fusion_1.CalendarModel({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultView: 'month',
            display: true,
            disable: false,
            fixedWeekCount: false,
            editable: true,
            eventLimit: true,
            events: [],
            googleCalendar: {
                clientID: '429731391979-mnlhvot9rcsju9gnj1rtthopeplhag07.apps.googleusercontent.com',
                calendarId: 'mikhail@interactive-clouds.com'
            }
        });
    }
    CfDemoCalendar1.prototype.ngOnInit = function () {
    };
    CfDemoCalendar1.prototype.ngAfterViewInit = function () {
        this.cfCalendarService.setCalendarOptions(this.cfCalendar, this.calendarOptions);
        this.cfCalendarService.getGoogleCalendarEvents();
    };
    return CfDemoCalendar1;
}());
__decorate([
    core_1.ViewChild('myCalendar'),
    __metadata("design:type", cedrus_fusion_2.CfCalendarComponent)
], CfDemoCalendar1.prototype, "cfCalendar", void 0);
CfDemoCalendar1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-calendar-1',
        templateUrl: './demo.calendar-1.html',
        styleUrls: ['./demo.calendar-1.scss']
    }),
    __metadata("design:paramtypes", [cedrus_fusion_3.CfCalendarService])
], CfDemoCalendar1);
exports.CfDemoCalendar1 = CfDemoCalendar1;
//# sourceMappingURL=demo.calendar-1.js.map