import { Component, Input, Output, OnInit, ViewChild, trigger, state, style, animate, transition } from '@angular/core';
import { ToolbarModel } from 'cedrus-fusion';
import { ToolbarStylingModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { IconModel } from 'cedrus-fusion';
import { ImageModel } from 'cedrus-fusion';
import { ImageStylingModel } from 'cedrus-fusion';
import { ListModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { MenuItemModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-toolbar-1',
	templateUrl: './demo.toolbar-1.html',
 	styleUrls: ['./demo.toolbar-1.scss'],
  animations: [
    trigger('toolbarState', [
      state('inactive', style({
      	transform: 'rotateX(90deg)', 
      	transformOrigin: 'bottom', 
      	height:'0px', 
      	display: 'none'
      })),
      state('active', style({})),
      transition('inactive => active', animate('0.5s ease-in')),
      transition('active => inactive', animate('0.5s ease-out'))
    ])
  ]
})
export class CfDemoToolbar1 implements OnInit {
	@ViewChild('myControlledToolbar') myControlledToolbar;
	@ViewChild('myControlledToolbar2') myControlledToolbar2;

	myToolbar = new ToolbarModel({
		info: {
			show: true
		},
		content: {
			title: 'My Toolbar',
		},
		close: {
			show: true
		},
	});

	myStyling3 = new ToolbarStylingModel({
		toolbar: {
			class: 'mat-primary'
		}
	});

	isExpanded = false;
	
	collapsibleState = '';

	myToolbar2 = new ToolbarModel({
		info: {
			show: true,
			icon: {
				name: 'star',
				type: 'mi',
				size: '24px'
			}
		},
		content: {
			title: 'Toolbar with List Component'
		},
		actions: {
			show: true,
			menu: new MenuModel({  
				triggerIcon: new IconModel({ name: "menu" }),
				menuItems: [
					{
						buttonProperty: {
							label: 'Action item',
							iconProperty: new IconModel({ name: 'account_balance' }),
							iconPosition:"left",
						},
						notification: null,
						onClick: null
					},
					{
						buttonProperty: {
							label: 'Action item',
							iconProperty: new IconModel({ name: 'theaters' }),
							iconPosition:"left",
						},
						notification: null,
						onClick: null
					},
					{
						buttonProperty: {
							label: 'Action item',
							iconProperty: new IconModel({ name: 'store' }),
							iconPosition:"left",
						},
						notification: null,
						onClick: null
					}
				]
			})
		},
		close: {
			show: true
		},
		collapsible: {
			show: true,
			expanded: this.isExpanded
		}
	});

	myStyling = new ToolbarStylingModel({
		container: {
			class: 'cf-green-theme'
		},
		toolbar: {
			class: 'mat-primary'
		}
	});

	myToolbar3 = new ToolbarModel({
		info: {
			show: true,
			icon: {
				name: 'stars',
				type: 'mi',
				size: '24px'
			}
		},
		close: {
			show: true
		},
		toggle: {
			show: true
		}
	});

	myStyling2 = new ToolbarStylingModel({
		container: {
			class: 'cf-light-theme'
		},
		toolbar: {
			class: 'mat-accent'
		}
	});

	events = [];
	
	log(e) {
		this.events.push(e);
	}

	toggle(e) {
		this.collapsibleState = e ? 'active' : 'inactive';
	}

	checked = false;
	
	items = [
		{
			name: 'Molly',
			city: 'New York',
			avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png'
		},
		{
			name: 'Austin',
			city: 'London',
			avatar: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png'
		},
		{
			name: 'Mia',
			city: 'Rio de Janeiro',
			avatar: 'https://www.tm-town.com/assets/default_female300x300-af1ea9327d6293733a8874dbd97ce49e.png'
		}
	];

	selected = [];
	
	listLogs(e){
		console.log('e', e);
		this.selected.push(e);
	}

	ngOnInit() {
		this.collapsibleState = this.isExpanded ? 'active' : 'inactive';

	}
	
	myImage1 = new ImageModel ({
    url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTAMLURYmqLQEBpqHr0PoiEvqTjT486Krf5_rZItvnSt_OIK-A'
  });

  myImageStyling = new ImageStylingModel({
    image: {
      class: "my-image"
    }
  });
	
	button1 = new ButtonModel({ label: "Toggle my toolbar" });

	button2 = new ButtonModel({ label: "Close my toolbar" });

	button3 = new ButtonModel({ label: "Maximize my toolbar" });

	toggleMyToolbar(event) { this.myControlledToolbar.toggle(event);}
	closeMyToolbar(event) { this.myControlledToolbar.toolbarClose(event);}
	maximizeMyToolbar(event) { this.myControlledToolbar2.toggleMaximize(event);}
}