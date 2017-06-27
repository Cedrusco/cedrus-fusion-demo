import { Component, OnInit, Input } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { InputModel } from 'cedrus-fusion';

import { I18NService } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-core-2',
  templateUrl: './demo.core-2.html',
  styleUrls: ['./demo.core-2.scss']
})
export class CfDemoCore2 implements OnInit {
    themeName: string = '';

    title = "DemoCore";

    myTooltip = {
        message: "My Test Tooltip",
        position: "above"
    };

    money:number = 10000;
    moneyFormatted: string;

    enabledI18N = true;

    localeName = "";
	locales = [{
        "value": "en-US",
        "title": "USA"
    }, {
        "value": "fr-FR",
        "title": "France"
    }];

    button1= new ButtonModel ();

    button2 = new ButtonModel ({
		label: 'Date'
	});

    input1 = new InputModel ({
        type : "text",
    		placeholder: "current date",
    		maxlength : "10",
    		hint : {
    			text : "",
    			align : "start"
    		},
        value: new Date().toString()
	});
    constructor(private i18nService: I18NService) {}

    ngOnInit() {
        this.internationalize();
    }

    setLocale(): void {
		this.i18nService.setLocale(this.localeName)
        .then(() => {
            // after resetting locale, we have to reset localized messages from new current dictionary
            this.internationalize();
        });
	}

    internationalize(): void {
        // get localized messages from current dictionary
        this.myTooltip.message = this.i18nService.lookup('customer.form.tooltip.message');
        this.button1.label = this.i18nService.lookup('customer.form.validate');

        //this.input1.value = this.i18nService.formatDateWithTokens(new Date().toString(), 'L');
        this.button2.label = this.i18nService.formatDateWithTokens(new Date().toString(), 'L');

        this.moneyFormatted = this.i18nService.formatCurrency(this.money);
    }
}
