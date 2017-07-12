import { Component, OnInit, Input } from '@angular/core';
import { Themes } from 'cedrus-fusion';
import { Configuration } from 'cedrus-fusion';
import { ActivatedRoute, Router } from '@angular/router';


import { CfDemoWeather1 } from '../demos/weather/demo.weather-1';
import { CfDemoNews1 } from '../demos/news/demo.news-1';
import { CfDemoBPMList1 } from '../demos/bpm-list/demo.bpm-list-1';

@Component({
  moduleId: module.id,
  selector: 'business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})

export class BusinessDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router){}

  
  configuration = {
      'theme': Themes.default_theme
  };

  componentData = null;
  properties = null;

  components = [];
  title="";

  setComponent(name): void {
      switch (name) {
          case 'Weather':
            this.componentData = {
              componentName: 'WeatherComponent',
              fileName: 'weather-1',
              demos: [
                {
                  component: CfDemoWeather1,
                  title: "Basic Usage",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
              ]
            } ;
          break;
          case 'News':
            this.componentData = {
              componentName: 'NewsComponent',
              fileName: 'news-1',
              demos: [
                {
                  component: CfDemoNews1,
                  title: "Basic Usage",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
              ]
            } ;
          break;
          case 'BPM-List':
            this.componentData = {
              componentName: 'BPM-ListComponent',
              fileName: 'bpm-list-1',
              demos: [
                {
                  component: CfDemoBPMList1,
                  title: "Basic Usage",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
              ]
            } ;
          break;
          default:
            console.error('Unknown component');
          break;
      }
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {this.title =(params['type']);});

    switch(this.title){
      case 'Utilities':
        this.components = ['Weather','News'];
      break;
      case 'IBM':
        this.components = ['BPM-List'];
      break;
      default:
        console.error('Unknown component');
      break;
    }
    console.log(this.components);
    this.setComponent(this.components[0]);
  }
}
