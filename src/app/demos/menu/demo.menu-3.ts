import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ButtonModel, CfComponentTemplateService } from 'cedrus-fusion';
import { IconModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { MenuItemStylingModel } from 'cedrus-fusion';
import { MenuStylingModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-menu-3',
	templateUrl: './demo.menu-3.html',
 	styleUrls: ['./demo.menu-3.scss']
})

export class CfDemoMenu3 {

	@ViewChild('help', { read: TemplateRef }) help: TemplateRef<any>;
	@ViewChild('contact', { read: TemplateRef }) contact: TemplateRef<any>;

	constructor(private cfComponentTemplateService: CfComponentTemplateService) {	}

	helpMenu = new MenuModel ({
		triggerIcon: new IconModel ({
			name: "fa-map-signs",
			size: "30px"
		})
	});

	showHelp() {
		console.log("show help");
		let dialogOptions = {
			title: 'Success',
			okButton: true,
			width: '50%',
			height: '50%',
			disableClose: true,
			dialogType: 'info'//'warning', 'info', 'error'
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.help,
			dialogOptions: dialogOptions
		});
	}

	showContact() {
		let dialogOptions = {
			title: 'Contact',
			okButton: true,
			width: '50%',
			height: '50%',
			disableClose: true,
			dialogType: 'warning'//'warning', 'info', 'error'
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.contact,
			dialogOptions: dialogOptions
		});
	}

	selectDialog(e) {
		e.cfIndex === 1 ? this.showContact() : this.showHelp();
	}

	menuStyling = new MenuStylingModel ({
		iconStyling: new IconStylingModel({
			icon:{
				class:"trigger"
			}
		}),
		menuItem: new MenuItemStylingModel({
			buttonStyling: new ButtonStylingModel({
				iconStyling: new IconStylingModel({
					icon:{
						class:"iconMenu"
					}
				})
			}),
		})
	});
}
