import { Component } from '@angular/core';

import { BpmTaskListModel } from 'cedrus-fusion-business';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-bpm-list-1',
	templateUrl: './demo.bpm-list-1.html',
 	styleUrls: ['./demo.bpm-list-1.scss']
})
export class CfDemoBPMList1 {

  demoBPMList = new BpmTaskListModel({
		bpmUrl:"https://174.129.47.63:9443/rest/bpm/wle/v1/search/query?condition=bpdName%7CPatient+Enrollment+Process&condition=taskStatus%7CReceived&condition=taskSubject%7CNotEquals%7CStep%3A+Enroll+a+Patient&organization=byInstance&run=true&shared=false&filterByCurrentUser=true",
		username: "bpmadmin",
		password: "C3drus123"
	});

	BPMListProperties =  {
		width:"500px",
		height:"100%"
	};  

}