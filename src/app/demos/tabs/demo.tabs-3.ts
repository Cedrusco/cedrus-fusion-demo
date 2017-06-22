import { Component, Input, Output, OnChanges, EventEmitter, ViewChild } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { TabsModel, CfTabsComponent } from 'cedrus-fusion';
import { TabsStylingModel } from 'cedrus-fusion';
import { TabsCardModel, SelectableModel, CfTabsCardComponent } from 'cedrus-fusion';
import { TabsCardStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-tabs-3',
	templateUrl: './demo.tabs-3.html',
 	styleUrls: ['./demo.tabs-3.scss']
})

export class CfDemoTabs3 {
	@ViewChild('dossierTabs') tabRef: CfTabsComponent;

	isAdmin = new SelectableModel({value: 'isAdmin', item: 'Limit Access', checked: false});
	hasAccess = false;

	myTabs2 = new TabsModel({
		showCardNumberAsPrefix: false
	});

	cards = [
		{ 
			card :new TabsCardModel({ header: { label: "Education" }}),
			text: "Max Mustermann received his undergraduate degree at Princeton, his Master's in Aerospace Engineering at Georgia Tech, and is currently a PhD candidate at Carnegie Mellon University.",
			confidential: false
		},
		{ 
			card :new TabsCardModel({ header: { label: "Experience" }}),
			text: "An industry veteran, Max Mustermann has worked for Boeing as well as Lockheed Martin. Those with authorization, see the 'Confidential' tab for details of his work.",
			confidential: false
		},
		{ 
			card :new TabsCardModel({ header: { label: "Confidential" }}),
			text: "Mr. Mustermann worked on the ECM systems for the F-22 Raptor.",
			confidential: true
		}
	];

	toggleAdmin() {
		this.hasAccess = !this.hasAccess;
		if (!this.hasAccess && this.tabRef && this.tabRef.tabsCards) {
			this.tabRef.tabsCards.toArray()[2].isDisabled = true;
			console.log(this.tabRef.tabsCards.toArray()[2]);
		} else if (this.tabRef && this.tabRef.tabsCards) {
			this.tabRef.tabsCards.toArray()[2].isDisabled = false;
		}
	}
}
