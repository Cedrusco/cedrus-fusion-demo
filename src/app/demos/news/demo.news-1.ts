import { Component } from '@angular/core';

import { NewsComponentModel } from 'cedrus-fusion-business';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-news-1',
	templateUrl: './demo.news-1.html',
 	styleUrls: ['./demo.news-1.scss']
})
export class CfDemoNews1 {

  channels:[
		{code: 'cnn', label: 'CNN'}, 
		{code: 'bbc-news', label: 'BBC'}, 
		{code: 'mtv-news', label: 'MTV News'}, 
		{code: 'the-new-york-times', label: 'New York Times'},
		{code: 'fox-sports', label: 'Fox Sports'},
		{code: 'espn', label: 'ESPN'}
	];
	newsDemo= new NewsComponentModel({
		id:"news1",
		defaultChannel: "the-new-york-times",
		channelList:[ 'cnn', 'mtv-news', 'the-new-york-times', 'fox-sports'],
		showChannelList: true,
		showItems: 4
	});
  readMore($event)
  {
	  let title = $event.title;
	  alert("You pressed on "+title);
  }

}