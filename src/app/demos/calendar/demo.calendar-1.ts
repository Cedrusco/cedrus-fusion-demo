import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Themes } from 'cedrus-fusion';

import { InputModel } from 'cedrus-fusion';
import { CalendarModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';

import { CfCalendarComponent } from 'cedrus-fusion';
import { CfCalendarService } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-calendar-1',
	templateUrl: './demo.calendar-1.html',
	styleUrls: ['./demo.calendar-1.scss']
})
export class CfDemoCalendar1 implements OnInit, AfterViewInit {
	@ViewChild('myCalendar') cfCalendar: CfCalendarComponent;

	calendarOptions: CalendarModel = new CalendarModel({
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
    eventLimit: true, // allow "more" link when too many events
    events: [],
		googleCalendar: {
			clientID: '429731391979-mnlhvot9rcsju9gnj1rtthopeplhag07.apps.googleusercontent.com',
			calendarId: 'mikhail@interactive-clouds.com'
		}
  });

	constructor(public cfCalendarService: CfCalendarService) { }

	ngOnInit() {

	}

	ngAfterViewInit() {
		this.cfCalendarService.setCalendarOptions(this.cfCalendar, this.calendarOptions);
		this.cfCalendarService.getGoogleCalendarEvents();
	}
}
