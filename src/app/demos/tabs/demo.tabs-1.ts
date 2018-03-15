import { Component } from '@angular/core';
import { 
	ButtonModel, 
	ButtonStylingModel, 
	TabsModel, 
	TabsStylingModel, 
	TabsCardModel, 
	TabsCardStylingModel 
} from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-tabs-1',
	templateUrl: './demo.tabs-1.html',
 	styleUrls: ['./demo.tabs-1.scss']
})

export class CfDemoTabs1 {
	
	myTabs = new TabsModel({
		showCardNumberAsIcon: true,
		showCardNumberAsPrefix: false
	});

	myTabs2 = new TabsModel({
		showCardNumberAsPrefix: true,
		showCardNumberAsIcon: false
	});
}
