import { Component, ViewChild, TemplateRef } from '@angular/core';
import { 
	ButtonModel, DialogModel, DialogService, IconModel, MenuModel, MenuItemStylingModel,
	MenuStylingModel, ButtonStylingModel, IconStylingModel
} from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-menu-3',
	templateUrl: './demo.menu-3.html',
 	styleUrls: ['./demo.menu-3.scss']
})

export class CfDemoMenu3 {

	@ViewChild('help', { read: TemplateRef }) help: TemplateRef<any>;
	@ViewChild('contact', { read: TemplateRef }) contact: TemplateRef<any>;

	constructor(private dialogService: DialogService) {	}

	helpMenu = new MenuModel ({
		triggerIcon: new IconModel ({
			name: "fa-map-signs",
			size: "30px"
		})
	});

	showHelp() {
		console.log("show help");
		let dialogOptions = {
			properties: new DialogModel({
				width: '50%',
				height: '50%',
				disableClose: true,
				header: {
					toolbar: {
						content: {
							title: 'Success',
							template: this.help
						}
					}
				}
			})
		};
		this.dialogService.show( dialogOptions );
	}

	showContact() {
		let dialogOptions = {
			properties: new DialogModel({
				width: '50%',
				height: '50%',
				disableClose: true,
				header: {
					toolbar: {
						type: 'warning',
						content: {
							title: 'Contact',
							template: this.contact
						}
					}
				}
			})
		};
		this.dialogService.show( dialogOptions );
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
