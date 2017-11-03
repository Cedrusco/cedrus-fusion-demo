import { Component } from '@angular/core';
import { AvatarModel, AvatarStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-avatar-2',
	templateUrl: './demo.avatar-2.html',
 	styleUrls: ['./demo.avatar-2.scss']
})

export class CfDemoAvatar2 {

  myCustomAvatar = new AvatarModel({
		type: 'text',
		text: 'John',		
		borderRadius: '45px 70px',		
		shadow: 'rgba(0, 150, 136, 0.5) -3px 3px 10px 0px'
  });
  
  myCustomAvatarStyles = new AvatarStylingModel({
  	container: { class: 'my-avatar-container' },
  	text: { class: 'my-avatar-text' }
  });
}
