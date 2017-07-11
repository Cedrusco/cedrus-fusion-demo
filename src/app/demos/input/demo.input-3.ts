import { Component } from '@angular/core';
import { CfInputComponent } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';
import { InputModel } from 'cedrus-fusion';
import { InputStylingModel } from 'cedrus-fusion';
import { IconModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { MenuItemModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-input-3',
	templateUrl: './demo.input-3.html',
 	styleUrls: ['./demo.input-3.scss']
})

export class CfDemoInput3 {
	
	inputProperties= new InputModel ({
		type : "password",
		placeholder: "password",
		maxlength : "10",
		hint : {
			text : "from 1 to 10 chars",
			align : "start"
		}
	});
}
