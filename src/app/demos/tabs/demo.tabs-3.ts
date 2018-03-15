import { Component } from '@angular/core';
import { ButtonStylingModel, TabsModel, TabsStylingModel, TabsCardModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-tabs-3',
	templateUrl: './demo.tabs-3.html',
 	styleUrls: ['./demo.tabs-3.scss']
})

export class CfDemoTabs3 {

	heightType = 'auto';

	myTabs = new TabsModel({
		showCardNumberAsPrefix: false,
		showCardNumberAsIcon: false
	});

	myTabsStyle = new TabsStylingModel({
		container: { class: 'my-tabs-container' }
	});

	cards = [
		new TabsCardModel({ label: "Small content" }),
		new TabsCardModel({ label: "Big content" }),
		new TabsCardModel({ label: "Image component" }),
	];

	raisedButton = new ButtonStylingModel({button: {class: ''}});
  
  navigate(direction) {
  	switch (direction) {
  		case "next": this.myTabs.activeCardIndex < 2 ? ++this.myTabs.activeCardIndex : this.myTabs.activeCardIndex = 0; break;
  		case "prev": this.myTabs.activeCardIndex > 0 ? --this.myTabs.activeCardIndex : this.myTabs.activeCardIndex = 2; break;
  	}
  }

	setHeight(height) { this.heightType = height; }
}
