import { Component, OnInit, Input } from '@angular/core';
import { Themes } from 'cedrus-fusion';
import { BpmTaskListModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-bpm-list-1',
	templateUrl: './demo.bpm-list-1.html',
	styleUrls: ['./demo.bpm-list-1.scss']
})

export class CfDemoBpmList1 implements OnInit {
	/**
	 * Represents a customized theme for some components in the application
	 */
    themeName: string = '';

	demoBPMList1 = new BpmTaskListModel ({
		bpmUrl:"/api/tasks"
	});

	demoBPMList2 = new BpmTaskListModel({
		bpmUrl:"https://174.129.47.63:9443/rest/bpm/wle/v1/search/query?condition=bpdName%7CPatient+Enrolllment+Process&condition=taskStatus%7CReceived&condition=taskSubject%7CNotEquals%7CStep%3A+Enroll+New+Paitient&organization=byInstance&run=true&shared=false&filterByCurrentUser=true",
		//bpmUrl: "https://174.129.47.63:9443/rest/bpm/wle/v1/task/8639?action=finish&parts=all",
		username: "bpmadmin",
		password: "C3drus123"
	});

	BPMListProperties =  {
		width:"500px",
		height:"100%"
	};

    constructor() { }

	ngOnInit() {
	}
}
