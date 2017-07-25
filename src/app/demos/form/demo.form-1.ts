import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {myValidators} from './myValidators'


@Component ({
	moduleId: module.id,
	selector: 'cf-demo-form-1',
	templateUrl: './demo.form-1.html',
 	styleUrls: ['./demo.form-1.scss']
})

export class CfDemoForm1 implements OnInit {


	topQuestions = [
		{
			questionID: "top1",
			componentType: "input",
			label:"Subject Initials",
			type:"text",
			value: "",
			required: true,
			key: "initials"
		},
		{
			questionID: "top2",
			componentType: "input",
			label:"Subject ID",
			type:"text",
			value: "",
			required: true,
			key: "subjectId"
		}
	];

	bottomQuestions = [
		{
			questionID: "bottom1",
			componentType: "input",
			label:"Additional Notes",
			type:"text",
			value: "",
			required: false,
			key: "notes"
		},
		{
			questionID: "3",
			componentType: "radio",
			label: "Marital Status",
			items: [
				{label: "Single", value:"single"},
				{label: "Married", value:"married"},
				{label:"Engaged", value:"engaged"}
			],
			required: false,
			key: "status",
			maxSelected: 2,
			minSelected: 0
		},
		{
			questionID: "3.1",
			componentType: "input",
			label:"Spouse Name",
			type:"text",
			value: "",
			required: false,
			key: "spouse",
			display: {key:"status", value:"married;engaged"}
		}
	];

	riskFactorQuestions = [
				{
					key:"smoking",
					questions:
					[
						{
							questionID: "1",
							componentType: "select",
							label: "Smoking",
							value:"never",
							items: [
								{label: "Current", value:"current"},
								{label: "Past", value:"past"},
								{label:"Never", value:"never"}
							],
							required: false,
							key: "smoking"
						},
						{
							questionID: "2",
							componentType: "input",
							label:"",
							type:"text",
							value: "",
							required: false,
							key: "smokingComment"
						}
					]
				},
				{
					key:"height",
					questions:
					[
						{
							questionID: "3",
							componentType: "input",
							label:"Height (cm)",
							type:"text",
							value: "",
							required: false,
							key: "height"
						},
						{
							questionID: "4",
							componentType: "input",
							label:"",
							type:"text",
							value: "",
							required: false,
							key: "heightComment"
						}
					]
				},
				{
					key:"weight",
					questions:
					[
						{
							questionID: "5",
							componentType: "input",
							label:"Weight (Kg)",
							type:"text",
							value: "",
							required: false,
							key: "weight"
						},
						{
							questionID: "6",
							componentType: "input",
							label:"",
							type:"text",
							value: "",
							required: false,
							key: "weightComment"
						}
					]
				}
	];

	questions1= [
		{
			questionID: "1",
			componentType: "input",
			label:"Name",
			type:"text",
			value: "",
			required: true,
			key: "name"
		},
		{
			questionID: "2",
			componentType: "input",
			label:"Email",
			type:"text",
			value: "",
			required: false,
			key: "email",
			validation: {action:myValidators.validateEmail,message:"Please enter an email format"}
		},
		{
			questionID: "3",
			componentType: "radio",
			label: "Marital Status",
			items: [
				{label: "Single", value:"single"},
				{label: "Married", value:"married"},
				{label:"Engaged", value:"engaged"}
			],
			required: false,
			key: "status",
			maxSelected: 2,
			minSelected: 0
		},
		{
			questionID: "3.1",
			componentType: "input",
			label:"Spouse Name",
			type:"text",
			value: "",
			required: false,
			key: "spouse",
			display: {key:"status", value:"married;engaged"}
		},
		{
			key:"Measurements",
			questions:
			[
				{
					key:"weight",
					questions:
					[
						{
							questionID: "4",
							componentType: "input",
							label:"weight",
							type:"text",
							value: "",
							required: false,
							key: "value"
						},
						{
							questionID: "5",
							componentType: "input",
							label:"comments",
							type:"text",
							value: "",
							required: false,
							key: "comments"
						}
					]
				},
				{
					key:"height",
					questions:
					[
						{
							questionID: "6",
							componentType: "input",
							label:"height",
							type:"text",
							value: "",
							required: false,
							key: "value"
						},
						{
							questionID: "7",
							componentType: "input",
							label:"comments",
							type:"text",
							value: "",
							required: false,
							key: "comments"
						}
					]
				}
			]
		}
	];

	payload1 = {
		"initials":"John",
		"subjectId":"J.",
		"smoking":"past",
		"smokingComment":"",
		"height":"180",
		"heightComment":"",
		"weight":"110",
		"weightComment":"Obese",
		"bottomGroup":{
			"notes":"Nothing",
			"status":["married"],
			"spouse":"Jane Smith"
		}
	};

	updatePayload(data){
		this.payload1 = JSON.parse(data);
	}


	riskFactorsQuestions= [
		{
			key:"BodySystem",
			questions:
			[
				{
					key:"smoking",
					questions:
					[
						{
							questionID: "1",
							componentType: "select",
							label: "Smoking",
							items: [
								{label: "Current", value:"current"},
								{label: "Past", value:"past"},
								{label:"Never", value:"never"}
							],
							required: false,
							key: "smoking"
						},
						{
							questionID: "2",
							componentType: "input",
							label:"comments",
							type:"text",
							value: "",
							required: false,
							key: "comment"
						}
					]
				},
				{
					key:"height",
					questions:
					[
						{
							questionID: "3",
							componentType: "input",
							label:"Height (cm)",
							type:"text",
							value: "",
							required: false,
							key: "value"
						},
						{
							questionID: "4",
							componentType: "input",
							label:"comments",
							type:"text",
							value: "",
							required: false,
							key: "comment"
						}
					]
				},
				{
					key:"weight",
					questions:
					[
						{
							questionID: "5",
							componentType: "input",
							label:"Weight (Kg)",
							type:"text",
							value: "",
							required: false,
							key: "value"
						},
						{
							questionID: "6",
							componentType: "input",
							label:"comments",
							type:"text",
							value: "",
							required: false,
							key: "comment"
						}
					]
				}
			]
		},
		{
			questionID: "7",
			componentType: "input",
			label:"Additional Notes",
			type:"text",
			value: "",
			required: false,
			key: "notes"
		},
	];

	medicalHistoryQuestions = [
		{
			key:"BodySystem",
			questions: [
				{
					key:"Diabetes",
					questions:[
						{
							questionID: "1",
							componentType: "checkbox",
							label: "",
							items: [
								{label: "Diabets", value:"diabetes"}
							],
							required: false,
							key: "condition",
							maxSelected: 1,
							minSelected: 0
						},
						{
							questionID: "1.1",
							componentType: "input",
							label:"Diagnosis",
							type:"text",
							value: "",
							required: false,
							key: "diagnosis",
							display: {key:"condition", value:"diabetes"}
						},
						{
							questionID: "1.2",
							componentType: "switch",
							label: "",
							items: [
								{label: "Current Problem", value:"yes"}
							],
							value: "",
							required: false,
							key: "currentProblem",
							display: {key:"condition", value:"diabetes"}
						}
					]
				},
				{
					key:"COPDA",
					questions:[
						{
							questionID: "2",
							componentType: "checkbox",
							label: "",
							items: [
								{label: "COPDA", value:"copda"}
							],
							required: false,
							key: "condition",
							maxSelected: 1,
							minSelected: 0
						},
						{
							questionID: "2.1",
							componentType: "input",
							label:"Diagnosis",
							type:"text",
							value: "",
							required: false,
							key: "diagnosis",
							display: {key:"condition", value:"copda"}
						},
						{
							questionID: "2.2",
							componentType: "switch",
							label: "",
							items: [
								{label: "Current Problem", value:"yes"}
							],
							value: "",
							required: false,
							key: "currentProblem",
							display: {key:"condition", value:"copda"}
						}
					]
				},
				{
					key:"Asthma",
					questions:[
						{
							questionID: "3",
							componentType: "checkbox",
							label: "",
							items: [
								{label: "Asthma", value:"asthma"}
							],
							required: false,
							key: "condition",
							maxSelected: 1,
							minSelected: 0
						},
						{
							questionID: "3.1",
							componentType: "input",
							label:"Diagnosis",
							type:"text",
							value: "",
							required: false,
							key: "diagnosis",
							display: {key:"condition", value:"asthma"}
						},
						{
							questionID: "3.2",
							componentType: "switch",
							label: "",
							items: [
								{label: "Current Problem", value:"yes"}
							],
							value: "",
							required: false,
							key: "currentProblem",
							display: {key:"condition", value:"asthma"}
						}
					]
				}
			]
		},
		{
			questionID: "4",
			componentType: "input",
			label:"Additional Notes",
			type:"text",
			value: "",
			required: false,
			key: "notes"
		},

	];

	ngOnInit(): void {

	}
}

