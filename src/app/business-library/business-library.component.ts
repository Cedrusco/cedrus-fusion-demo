import { Component, OnInit, Input } from '@angular/core';

import { CfDemoWeather1 } from '../demos/weather/demo.weather-1';
import { CfDemoNews1 } from '../demos/news/demo.news-1';
import { CfDemoBPMList1 } from '../demos/bpm-list/demo.bpm-list-1';


@Component({
  moduleId: module.id,
  selector: 'business-library',
  templateUrl: './business-library.component.html',
  styleUrls: ['./business-library.component.css']
})

export class CfBusinessLibraryComponent implements OnInit {

    componentData = null;

    
    setComponent(name): void {
      switch (name) {
        case 'Weather':
          this.componentData = {
            componentName: 'WeatherComponent',
            description: "Weather",
            fileName: 'weather-1',
            demos: [
              {
                component: CfDemoWeather1,
                title: "Basic Usage",
                inputs: {
                  // themeName: this.configuration.theme
                }
              }
            ],
            docs:[{
              title:"",
              description:""
            },
            {
              title:"",
              description:``
            }]
          } ;
        break;
        case 'News':
          this.componentData = {
            componentName: 'NewsComponent',
            description: "News",
            fileName: 'news-1',
            demos: [
              {
                component: CfDemoNews1,
                title: "Basic Usage",
                inputs: {
                  // themeName: this.configuration.theme
                }
              }
            ],
            docs:[{
              title:"",
              description:""
            },
            {
              title:"",
              description:``
            }]
          } ;
        break;
        case 'BPM-List':
          this.componentData = {
            componentName: 'BPMListComponent',
            description: "BPM List",
            fileName: 'bpm-list-1',
            demos: [
              {
                component: CfDemoBPMList1,
                title: "Basic Usage",
                inputs: {
                  // themeName: this.configuration.theme
                }
              }
            ],
            docs:[{
              title:"",
              description:""
            },
            {
              title:"",
              description:``
            }]
          } ;
        break;
        default:
          console.error('Unknown component');
        break;
      }
    }

    ngOnInit(): void {
      this.setComponent("Weather");
    }
}
