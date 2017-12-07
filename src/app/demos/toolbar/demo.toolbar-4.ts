import { Component } from '@angular/core';
import { ToolbarModel, CfAnimationService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-toolbar-4',
	templateUrl: './demo.toolbar-4.html',
 	styleUrls: ['./demo.toolbar-4.scss'],
 	animations: [
    CfAnimationService.slideInLeft(),
    CfAnimationService.slideOutRight(),
  ]
})
export class CfDemoToolbar4 {

	dynamicToolbars = [
		{
			toolbar: new ToolbarModel({ 
				info: { show: false }, 
				content: { title: 'First Toolbar' }, 
				close: { show: false }, 
				help: { show: false }, 
				expandable: { show: true }
			}),
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJS8OC4OI6PozCuwNzLJWGR1vKEotJXmtTdCOze5eVOSK-6uNHQ',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa temporibus, consequatur quod sit aperiam facilis architecto, deleniti voluptate rem voluptatem rerum quas sequi animi inventore voluptates modi placeat, unde eius.',
			closed: false
		},
		{
			toolbar: new ToolbarModel({ 
				info: { show: false }, 
				content: { title: 'Second Toolbar' }, 
				close: { show: false }, 
				help: { show: false }, 
				expandable: { show: true }
			}),
			img: 'https://cdn.pixabay.com/photo/2016/01/30/17/22/africa-1170055__340.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere minima exercitationem deleniti architecto doloremque minus voluptates, sit, totam tenetur cumque laborum labore neque necessitatibus deserunt sint autem! Fugit, nostrum, nulla!',
			closed: false
		},
		{
			toolbar: new ToolbarModel({ 
				info: { show: false }, 
				content: { title: 'Third Toolbar' }, 
				close: { show: false }, 
				help: { show: false }, 
				expandable: { show: true }
			}),
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5toMvdeKakKjcHEbl1G6SSR498frhZOSAFCx_eCrUJbvcfm2Dg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis blanditiis temporibus, ducimus labore architecto eius doloribus impedit, repellendus ut quod libero sit, fugit nisi dolore dignissimos minima veniam nostrum ex.',
			closed: false
		},
	];
	
	toggleT(e, i) {
		console.log('e i', e, i);
		this.dynamicToolbars[i].closed = !this.dynamicToolbars[i].closed;
	}

}