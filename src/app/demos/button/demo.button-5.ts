import { Component } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-button-5',
	templateUrl: './demo.button-5.html',
	styleUrls: ['./demo.button-5.scss']
})
export class CfDemoButton5{

	myTooltip = {
    message: "TOOLTIP",
    position: "above"
  };

  button1= new ButtonModel ({
    label: "Button without tooltip"
  });

  button2 = new ButtonModel ({
    label: "Button with tooltip"
	});
}
