import { Component, OnInit, Input } from '@angular/core';
import { Themes } from 'cedrus-fusion';
import { Configuration } from 'cedrus-fusion';

import { CfDemoButton1 } from '../demos/button/demo.button-1';
import { CfDemoButton2 } from '../demos/button/demo.button-2';
import { CfDemoButton3 } from '../demos/button/demo.button-3';
import { CfDemoIcon1 } from '../demos/icon/demo.icon-1';
import { CfDemoIcon2 } from '../demos/icon/demo.icon-2';
import { CfDemoIcon3 } from '../demos/icon/demo.icon-3';
import { CfDemoImage1 } from '../demos/image/demo.image-1';
import { CfDemoImage2 } from '../demos/image/demo.image-2';
import { CfDemoMenu1 } from '../demos/menu/demo.menu-1';
import { CfDemoMenu2 } from '../demos/menu/demo.menu-2';
import { CfDemoButtonMenu1 } from '../demos/button-menu/demo.button-menu-1';
import { CfDemoButtonMenu2 } from '../demos/button-menu/demo.button-menu-2';
import { CfDemoInput1 } from '../demos/input/demo.input-1';
import { CfDemoInput2 } from '../demos/input/demo.input-2';
import { CfDemoInput3 } from '../demos/input/demo.input-3';
import { CfDemoSelect1 } from '../demos/select/demo.select-1';
import { CfDemoSelect2 } from '../demos/select/demo.select-2';
import { CfDemoCheckbox1 } from '../demos/checkbox/demo.checkbox-1';
import { CfDemoCheckbox2 } from '../demos/checkbox/demo.checkbox-2';
import { CfDemoCheckbox3 } from '../demos/checkbox/demo.checkbox-3';
import { CfDemoRadio1 } from '../demos/radio/demo.radio-1';
import { CfDemoRadio2 } from '../demos/radio/demo.radio-2';
import { CfDemoRadio3 } from '../demos/radio/demo.radio-3';
import { CfDemoSwitch1 } from '../demos/switch/demo.switch-1';
import { CfDemoSwitch2 } from '../demos/switch/demo.switch-2';
import { CfDemoSwitch3 } from '../demos/switch/demo.switch-3';
import { CfDemoCard1 } from '../demos/card/demo.card-1';
import { CfDemoDatatable1 } from '../demos/datatable/demo.datatable-1';
import { CfDemoWeather1 } from '../demos/weather/demo.weather-1';
import { CfDemoNews1 } from '../demos/news/demo.news-1';
import { CfDemoList1 } from '../demos/list/demo.list-1';
import { CfDemoBpmList1 } from '../demos/bpm-list/demo.bpm-list-1';
import { CfDemoCustomerList1 } from '../demos/customer-list/demo.customer-list-1';
import { CfDemoCore1 } from '../demos/core/demo.core-1';
import { CfDemoCore2 } from '../demos/core/demo.core-2';
import { CfDemoCore3 } from '../demos/core/demo.core-3';
import { CfDemoSendMessage1 } from '../demos/send-message/demo.send-message-1';
import { CfDemoForm1 } from '../demos/form/demo.form-1';
import { CfDemoTabs1 } from '../demos/tabs/demo.tabs-1';
import { CfDemoWizard1 } from '../demos/wizard/demo.wizard-1';
import { CfDemoRating1 } from '../demos/rating/demo.rating-1';
import { CfDemoTreeview1 } from '../demos/treeview/demo.treeview-1';
import { CfDemoFab1 } from '../demos/fab/demo.fab-1';
import { CfDemoFab2 } from '../demos/fab/demo.fab-2';
import { CfDemoAlerts1 } from '../demos/alerts/demo.alerts-1';
import { CfDemoDialog1 } from '../demos/dialog/demo.dialog-1';
import { CfDemoBarChart1 } from '../demos/bar-chart/demo.bar-chart-1';
import { CfDemoLineChart1 } from '../demos/line-chart/demo.line-chart-1';
import { CfDemoAreaChart1 } from '../demos/area-chart/demo.area-chart-1';
import { CfDemoPieChart1 } from '../demos/pie-chart/demo.pie-chart-1';
import { CfDemoCalendar1 } from '../demos/calendar/demo.calendar-1';
import { CfDemoGallery1 } from '../demos/gallery/demo.gallery-1';
import { CfDemoToolbar1 } from '../demos/toolbar/demo.toolbar-1';
import { CfDemoGauge1 } from '../demos/gauge/demo.gauge-1';
import { CfDemoGoogleMaps1 } from '../demos/google-maps/demo.google-maps-1';
import { CfDemoFileUploader1 } from '../demos/file-uploader/demo.file-uploader-1';
// import { CfDemoSocket1 } from '../demos/sockets/demo.socket-1';
import { CfDemoAutocomplete1 } from '../demos/autocomplete/demo.autocomplete-1';
import { CfDemoAutocomplete2 } from '../demos/autocomplete/demo.autocomplete-2';
import { CfDemoAutocomplete3 } from '../demos/autocomplete/demo.autocomplete-3';

@Component({
  moduleId: module.id,
  selector: 'ui-library',
  templateUrl: './ui-library.component.html',
  styleUrls: ['./ui-library.component.css']
})

export class CfUiLibraryComponent implements OnInit {
    // title = 'Fusion Library';

    configuration = {
      'theme': Themes.default_theme
    };

    componentData = null;

    setComponent(name): void {
      switch (name) {
          case 'Autocomplete':
            this.componentData = {
              componentName: 'AutocompleteComponent',
              description: 'This component allows the user to subscribe to Autocomplete events based on user data or user server url for taking data.',
              fileName: 'autocomplete-1',
              demos:[
                {
                  component: CfDemoAutocomplete1,
                  title: 'Demo 1',
                  inputs: {},
                },
                {
                  component: CfDemoAutocomplete2,
                  title: 'Demo 2',
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoAutocomplete3,
                  title: 'Demo 3',
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs: [
                {
                  title: 'Autocomplete features:',
                  description: `
                    <ul>
                      <li>work with existing arrays with items or can call data from remote server;</li>
                      <li>multiselection by separating values by comma inside search input field;</li>
                      <li>highlighting of search value in each item label;</li>
                      <li>using chips for selection items;</li>
                      <li>read only property for chips;</li>
                      <li>templating system for autocomplete dropdown list items;</li>
                      <li>templateng system for selected chips;</li>
                      <li>dropdown stay opened on items selection.</li>
                    </ul>
                    <p>It is available two properties for templates: <b>index</b> and <b>item</b>. Using templates requires template marker id:</p>
                    <ul>
                      <li>for dropdown list items:
                        <pre><code><</code>ng-template <b>#dropdownItemTemplate</b> let-item="<b>item</b>"<code>></code> your html here <code><</code>/ng-template<code>></code></pre>
                      </li>  
                      <li>for selected items (chips):
                        <pre><code><</code>ng-template <b>#selectedItemTemplate</b> let-item="<b>item</b>" let-i="<b>index</b>"<code>></code> your html here <code><</code>/ng-template<code>></code></pre>
                      </li>
                    </ul>
                  `
                }
              ]
            } ;
            break;

          case 'Menu':
          this.componentData = {
            componentName: 'MenuComponent',
            description: 'This graphical control represents a Menu with extended attributes such as icon and notifications.',
            fileName: 'menu-1',
            demos: [{
              title:"Basic Usage",
              component: CfDemoMenu1,
              inputs: {
                themeName: this.configuration.theme
              },
            },
            {
              title:"Menu Styling",
              component: CfDemoMenu2,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          } ;
          break;
          case 'Button':
          this.componentData = {
            componentName: 'ButtonComponent',
            description: "CF Button has two features that makes it special. The fact that you can pass and icon name and position"+
                          " to the button and it renders is automatically, as well as having a waiting state.",
            fileName: 'button-1',
            demos:[{
              title: "Basic Usage",
              component: CfDemoButton1,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Button Styling",
              component: CfDemoButton2,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Waiting State",
              component: CfDemoButton3,
              inputs: {
                themeName: this.configuration.theme
              },
            }],
            docs:[{
              title:"Theming",
              description:"<p>To set the theme color of the button, you have to set the <i>themeColor</i> property in the <i>styling.button</i> object "+
                          "to either primary, accent or warn to apply the application's theme.</p>"
            },
            {
              title:"Templating System",
              description:`<p>To set a template for the icon from the cedrus fusion templates, you have to set the <i>compTemplate</i> attribute to the name of the template.</p>
              <p>"submitTemplate" is an example from the cedrus fusion library. Reference: <i>lib/src/templates/button.template.ts</i></p>
              <pre>
              <code><</code>cf-button compTemplate="submitTemplate"<code>></code><code><</code><code>/</code>cf-button<code>></code>
              </pre>
              <p>To create your own template, refer to the defined templates in the library, create your own object and <strong>bind</strong> it to the "compTemplate" attribute.</p>
              <pre>
              <code><</code>cf-button [compTemplate]="myTemplate"<code>></code><code><</code><code>/</code>cf-button<code>></code>
              </pre>`
            }]
          };
          break;
          case 'Fab':
          this.componentData = {
            componentName: 'FabComponent',
            description: 'This graphical control represents a Fab with extended attributes.',
            fileName: 'fab-1',
            demos: [{
              title:"Basic Usage",
              component: CfDemoFab1,
              inputs: {
                themeName: this.configuration.theme
              },
            },
            {
              title:"Fab Styling",
              component: CfDemoFab2,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          };
          break;
          case 'CoreClass':
          this.componentData = {
            componentName: 'CoreComponent',
            description: 'This example shows core class extension.',
            fileName: 'core-1',
            demos:  [{
              component: CfDemoCore1,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          };
          break;
          case 'i18n':
          this.componentData ={
            componentName: 'CoreComponent',
            description: 'This example shows messages and components internationalization.',
            fileName: 'core-2',
            demos:[{
              component: CfDemoCore2,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          };
          break;
          case 'ButtonMenu':
          this.componentData = {
            componentName: 'ButtonMenuComponent',
            description: 'This graphical control represents a button with extended attributes such as icon.',
            fileName: 'button-menu-1',
            demos: [{
              title:"Basic Usage",
              component: CfDemoButtonMenu1,
              inputs: {
                themeName: this.configuration.theme
              },
            },
            {
              title:"Button Menu Styling",
              component: CfDemoButtonMenu2,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          }
          break;
          case 'Icon':
          this.componentData = {
            componentName: 'IconComponent',
            description: "One feature of CF icons is when setting the name of the icon to a material icon or font awesome name it will render automatically"+
                          " without specifying the type. Another feature is the icon's toggle state, so when you click on an icon you can specify to what icon"+
                          " and value to change to.",
            fileName: 'icon-1',
            demos: [
              {
                component: CfDemoIcon1,
                title: "Basic Usage",
                inputs: {
                  themeName: this.configuration.theme
                }
              },
              {
                component: CfDemoIcon2,
                title: "Toggle Icon",
                inputs: {
                  themeName: this.configuration.theme
                }
              },
              {
                component: CfDemoIcon3,
                title: "Icon Styling",
                inputs: {
                  themeName: this.configuration.theme
                }
              }
            ],
            docs:[{
              title:"Theming",
              description:"<p>To set the theme color of the icon, you have to set the <i>themeColor</i> property in the <i>styling.icon</i> object "+
                          "to either primary, accent or warn to apply the application's theme.</p>"
            },
            {
              title:"Templating System",
              description:`<p>To set a template for the icon from the cedrus fusion templates, you have to set the <i>compTemplate</i> attribute to the name of the template.</p>
              <p>"closeTemplate" is an example from the cedrus fusion library. Reference: <i>lib/src/templates/icon.template.ts</i></p>
              <pre>
              <code><</code>cf-icon compTemplate="closeTemplate"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
              </pre>
              <p>To create your own template, refer to the defined templates in the library, create your own object and <strong>bind</strong> it to the "compTemplate" attribute.</p>
              <pre>
              <code><</code>cf-icon [compTemplate]="myTemplate"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
              </pre>`
            }]
          } ;
          break;
          case 'Image':
          this.componentData = {
            componentName: 'ImageComponent',
            description: `<p>Image component consists of two parts:</p>
                          <ul>
                          <li>Image</li>
                          <li>Label/Caption along with its relative position</li>
                          </ul>`,
            fileName: 'image-1',
            demos: [{
              title: "Basic Usage",
              component: CfDemoImage1,
              inputs: {
                themeName: this.configuration.theme
              },
            },
            {
              title:"Image Styling",
              component: CfDemoImage2,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          } ;
          break;
          case 'Gallery':
          this.componentData ={
            componentName: 'GalleryComponent',
            description: 'This graphical control represents an Gallery with extended options.',
            fileName: 'gallery-1',
            demos:[{
              component: CfDemoGallery1,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          };
          break;
          case 'Input':
          this.componentData = {
            componentName: 'InputComponent',
            description: 'This graphical control represents an Input with extended options.',
            fileName: 'input-1',
            demos: [
              {
                title: "Basic Usage",
                component: CfDemoInput1,
                inputs: {
                  themeName: this.configuration.theme
                },
              },
              {
                title: "Password Type",
                component: CfDemoInput3,
                inputs: {
                  themeName: this.configuration.theme
                },
              },
              {
                title: "Styling",
                component: CfDemoInput2,
                inputs: {
                  themeName: this.configuration.theme
                },
              }
            ]
          } ;
          break;
          case 'Select':
          this.componentData = {
            componentName: 'SelectComponent',
            description: 'This graphical control represents an Select with filterable dropdown list items.',
            fileName: 'select-1',
            demos: [{
              title: "Basic Usage",
              component: CfDemoSelect1,
              inputs: {
                themeName: this.configuration.theme
              },
            },
            {
              title:"Select Styling",
              component: CfDemoSelect2,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          } ;
          break;
          case 'Checkbox':
          this.componentData = {
            componentName: 'CheckboxComponent',
            description: 'This graphical control represents an Checkbox with extended options.',
            fileName: 'checkbox-1',
            demos:[{
              title:"Basic Usage",
              component: CfDemoCheckbox1,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Checkbox Styling",
              component: CfDemoCheckbox2,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Checkbox Group",
              component: CfDemoCheckbox3,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          } ;
          break;
          case 'Radio':
          this.componentData = {
            componentName: 'RadioComponent',
            description: 'This graphical control represents an Radio with extended options.',
            fileName: 'radio-1',
            demos:[{
              title:"Basic Usage",
              component: CfDemoRadio1,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Radio Styling",
              component: CfDemoRadio2,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Radio Group",
              component: CfDemoRadio3,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          } ;
          break;
          case 'Switch':
          this.componentData = {
            componentName: 'SwitchComponent',
            description: 'This graphical control represents an Switch with extended options.',
            fileName: 'switch-1',
            demos:[{
              title:"Basic Usage",
              component: CfDemoSwitch1,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Switch Styling",
              component: CfDemoSwitch2,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Switch Group",
              component: CfDemoSwitch3,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          } ;
          break;
          case 'Card':
          this.componentData ={
            componentName: 'CardComponent',
            description: 'This graphical control represents an Card with extended options.',
            fileName: 'card-1',
            demos:[{
              component: CfDemoCard1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Datatable':
          this.componentData = {
            componentName: 'DatatableComponent',
            description: 'This graphical control represents a Datatable with extended options.',
            fileName: 'datatable-1',
            demos:[{
              component: CfDemoDatatable1,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          } ;
          break;
          case 'List':
          this.componentData = {
            componentName: 'ListComponent',
            description: 'This graphical control represents a List with extended options.',
            fileName: 'list-1',
            demos:[{
              component: CfDemoList1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Forms':
          this.componentData = {
            componentName: 'FormComponent',
            description: 'This example shows the form generator',
            fileName: 'form-1',
            demos:[{
              component: CfDemoForm1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Rating':
          this.componentData = {
            componentName: 'RatingComponent',
            description: 'This graphical control represents a Rating with extended options.',
            fileName: 'rating-1',
            demos:[{
              component: CfDemoRating1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Tabs':
          this.componentData = {
            componentName: 'TabsComponent',
            description: 'This graphical control represents a Tabs with extended options.',
            fileName: 'tabs-1',
            demos:[{
              component: CfDemoTabs1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Wizard':
          this.componentData = {
            componentName: 'WizardComponent',
            description: 'This graphical control represents a Wizard with extended options.',
            fileName: 'wizard-1',
            demos:[{
              component: CfDemoWizard1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Treeview':
          this.componentData = {
            componentName: 'TreeviewComponent',
            description: 'This graphical control represents a Treeview with extended options.',
            fileName: 'treeview-1',
            demos:[
                         {
                component: CfDemoTreeview1,
                title: "Basic Usage",
                inputs: {
                  themeName: this.configuration.theme
                }
              },
            ]
          } ;
          break;
          case 'Alerts':
          this.componentData = {
            componentName: 'AlertsComponent',
            description: 'This example shows Alerts component with extended options.',
            fileName: 'alerts-1',
            demos:[{
              component: CfDemoAlerts1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Dialog':
          this.componentData = {
            componentName: 'DialogComponent',
            description: 'This example shows the CfDialog component usage.',
            fileName: 'dialog-1',
            demos:[{
              component: CfDemoDialog1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Animation':
          this.componentData = {
            componentName: 'CoreComponent',
            description: 'This example shows components animation.',
            fileName: 'core-3',
            demos:[{
              component: CfDemoCore3,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          } ;
          break;
          case 'BarChart':
          this.componentData = {
            componentName: 'BarChartComponent',
            description: 'This example shows the CfBarChart component usage.',
            fileName: 'bar-chart-1',
            demos:[{
              component: CfDemoBarChart1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'LineChart':
          this.componentData = {
            componentName: 'LineChartComponent',
            description: 'This example shows the CfLineChart component usage.',
            fileName: 'line-chart-1',
            demos:[{
              component: CfDemoLineChart1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'AreaChart':
          this.componentData = {
            componentName: 'AreaChartComponent',
            description: 'This example shows the CfAreaChart component usage.',
            fileName: 'area-chart-1',
            demos:[{
              component: CfDemoAreaChart1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'PieChart':
          this.componentData = {
            componentName: 'PieChartComponent',
            description: 'This example shows the CfPieChart component usage.',
            fileName: 'pie-chart-1',
            demos:[{
              component: CfDemoPieChart1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Calendar':
          this.componentData = {
            componentName: 'CalendarComponent',
            description: 'This example shows the calendar component usage.',
            fileName: 'calendar-1',
            demos:[{
              component: CfDemoCalendar1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Toolbar':
          this.componentData = {
            componentName: 'ToolbarComponent',
            description: 'This graphical control represents a Toolbar with extended options.',
            fileName: 'toolbar-1',
            demos:[{
              component: CfDemoToolbar1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'Gauge':
          this.componentData = {
            componentName: 'GaugeComponent',
            description: 'This graphical control represents a Gauge with extended options.',
            fileName: 'gauge-1',
            demos:[{
              component: CfDemoGauge1,
              inputs: {
              },
            }]
          } ;
          break;
          case 'GoogleMaps':
          this.componentData = {
            componentName: 'GoogleMapsComponent',
            description: 'This graphical control represents a GoogleMaps with extended options.',
            fileName: 'google-maps-1',
            demos:[{
              component: CfDemoGoogleMaps1,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          } ;
          break;
          case 'FileUploader':
          this.componentData = {
            componentName: 'FileUploaderComponent',
            description: 'This graphical control represents a File Uploader component with extended options.',
            fileName: 'file-uploader-1',
            demos:[{
              component: CfDemoFileUploader1,
              inputs: {
                themeName: this.configuration.theme
              },
            }]
          } ;
          break;
          // case 'Socket':
          // this.componentData = {
          //   componentName: 'SocketService',
          //   description: 'This service allows the user to subscribe to socket events from a server.',
          //   fileName: 'socket-1',
          //   demos:[{
          //     component: CfDemoSocket1,
          //     inputs: {},
          //   }]
          // } ;
          // break;
          default:
            console.error('Unknown component');
          break;
      }
    }

    ngOnInit(): void {
      this.setComponent("Icon");
    }
}
