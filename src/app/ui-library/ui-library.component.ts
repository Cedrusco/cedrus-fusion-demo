import { Component, OnInit, Input } from '@angular/core';
import { Themes } from 'cedrus-fusion';
import { Configuration } from 'cedrus-fusion';

import { CfDemoButton1 } from '../demos/button/demo.button-1';
import { CfDemoButton2 } from '../demos/button/demo.button-2';
import { CfDemoButton3 } from '../demos/button/demo.button-3';
import { CfDemoButton4 } from '../demos/button/demo.button-4';
import { CfDemoButton5 } from '../demos/button/demo.button-5';
import { CfDemoButton6 } from '../demos/button/demo.button-6';
import { CfDemoIcon1 } from '../demos/icon/demo.icon-1';
import { CfDemoIcon2 } from '../demos/icon/demo.icon-2';
import { CfDemoIcon3 } from '../demos/icon/demo.icon-3';
import { CfDemoIcon4 } from '../demos/icon/demo.icon-4';
import { CfDemoIcon5 } from '../demos/icon/demo.icon-5';
import { CfDemoIcon6 } from '../demos/icon/demo.icon-6';
import { CfDemoImage1 } from '../demos/image/demo.image-1';
import { CfDemoImage2 } from '../demos/image/demo.image-2';
import { CfDemoImage3 } from '../demos/image/demo.image-3';
import { CfDemoImage4 } from '../demos/image/demo.image-4';
import { CfDemoMenu1 } from '../demos/menu/demo.menu-1';
import { CfDemoMenu2 } from '../demos/menu/demo.menu-2';
import { CfDemoMenu3 } from '../demos/menu/demo.menu-3';
import { CfDemoMenu4 } from '../demos/menu/demo.menu-4';
import { CfDemoMenu5 } from '../demos/menu/demo.menu-5';
import { CfDemoButtonMenu1 } from '../demos/button-menu/demo.button-menu-1';
import { CfDemoButtonMenu2 } from '../demos/button-menu/demo.button-menu-2';
import { CfDemoButtonMenu3 } from '../demos/button-menu/demo.button-menu-3';
import { CfDemoButtonMenu4 } from '../demos/button-menu/demo.button-menu-4';
import { CfDemoInput1 } from '../demos/input/demo.input-1';
import { CfDemoInput2 } from '../demos/input/demo.input-2';
import { CfDemoInput3 } from '../demos/input/demo.input-3';
import { CfDemoInput4 } from '../demos/input/demo.input-4';
import { CfDemoSelect1 } from '../demos/select/demo.select-1';
import { CfDemoSelect2 } from '../demos/select/demo.select-2';
import { CfDemoSelect3 } from '../demos/select/demo.select-3';
import { CfDemoSelect4 } from '../demos/select/demo.select-4';
import { CfDemoCheckbox1 } from '../demos/checkbox/demo.checkbox-1';
import { CfDemoCheckbox2 } from '../demos/checkbox/demo.checkbox-2';
import { CfDemoCheckbox3 } from '../demos/checkbox/demo.checkbox-3';
import { CfDemoCheckbox4 } from '../demos/checkbox/demo.checkbox-4';
import { CfDemoCheckbox5 } from '../demos/checkbox/demo.checkbox-5';
import { CfDemoRadio1 } from '../demos/radio/demo.radio-1';
import { CfDemoRadio2 } from '../demos/radio/demo.radio-2';
import { CfDemoRadio3 } from '../demos/radio/demo.radio-3';
import { CfDemoRadio4 } from '../demos/radio/demo.radio-4';
import { CfDemoRadio5 } from '../demos/radio/demo.radio-5';
import { CfDemoSwitch1 } from '../demos/switch/demo.switch-1';
import { CfDemoSwitch2 } from '../demos/switch/demo.switch-2';
import { CfDemoSwitch3 } from '../demos/switch/demo.switch-3';
import { CfDemoSwitch4 } from '../demos/switch/demo.switch-4';
import { CfDemoSwitch5 } from '../demos/switch/demo.switch-5';
import { CfDemoCard1 } from '../demos/card/demo.card-1';
import { CfDemoDatatable1 } from '../demos/datatable/demo.datatable-1';
import { CfDemoDatatable2 } from '../demos/datatable/demo.datatable-2';
import { CfDemoDatatable3 } from '../demos/datatable/demo.datatable-3';
import { CfDemoDatatable4 } from '../demos/datatable/demo.datatable-4';
import { CfDemoDatatable5 } from '../demos/datatable/demo.datatable-5';
import { CfDemoList1 } from '../demos/list/demo.list-1';
import { CfDemoList2 } from '../demos/list/demo.list-2';
import { CfDemoList3 } from '../demos/list/demo.list-3';
import { CfDemoList4 } from '../demos/list/demo.list-4';
import { CfDemoList5 } from '../demos/list/demo.list-5';
import { CfDemoList6 } from '../demos/list/demo.list-6';
import { CfDemoCore1 } from '../demos/core/demo.core-1';
import { CfDemoCore2 } from '../demos/core/demo.core-2';
import { CfDemoCore3 } from '../demos/core/demo.core-3';
import { CfDemoForm1 } from '../demos/form/demo.form-1';
import { CfDemoTabs1 } from '../demos/tabs/demo.tabs-1';
import { CfDemoTabs2 } from '../demos/tabs/demo.tabs-2';
import { CfDemoTabs3 } from '../demos/tabs/demo.tabs-3';
import { CfDemoTabs4 } from '../demos/tabs/demo.tabs-4';
import { CfDemoTabs5 } from '../demos/tabs/demo.tabs-5';
import { CfDemoWizard1 } from '../demos/wizard/demo.wizard-1';
import { CfDemoWizard2 } from '../demos/wizard/demo.wizard-2';
import { CfDemoWizard3 } from '../demos/wizard/demo.wizard-3';
import { CfDemoWizard4 } from '../demos/wizard/demo.wizard-4';
import { CfDemoRating1 } from '../demos/rating/demo.rating-1';
import { CfDemoRating2 } from '../demos/rating/demo.rating-2';
import { CfDemoRating3 } from '../demos/rating/demo.rating-3';
import { CfDemoRating4 } from '../demos/rating/demo.rating-4';
import { CfDemoTreeview1 } from '../demos/treeview/demo.treeview-1';
import { CfDemoTreeview2 } from '../demos/treeview/demo.treeview-2';
import { CfDemoTreeview3 } from '../demos/treeview/demo.treeview-3';
import { CfDemoFab1 } from '../demos/fab/demo.fab-1';
import { CfDemoFab2 } from '../demos/fab/demo.fab-2';
import { CfDemoFab3 } from '../demos/fab/demo.fab-3';
import { CfDemoFab4 } from '../demos/fab/demo.fab-4';
import { CfDemoAlerts1 } from '../demos/alerts/demo.alerts-1';
import { CfDemoAlerts2 } from '../demos/alerts/demo.alerts-2';
import { CfDemoAlerts3 } from '../demos/alerts/demo.alerts-3';
import { CfDemoAlerts4 } from '../demos/alerts/demo.alerts-4';
import { CfDemoDialog1 } from '../demos/dialog/demo.dialog-1';
import { CfDemoDialog2 } from '../demos/dialog/demo.dialog-2';
import { CfDemoDialog3 } from '../demos/dialog/demo.dialog-3';
import { CfDemoDialog4 } from '../demos/dialog/demo.dialog-4';
import { CfDemoBarChart1 } from '../demos/bar-chart/demo.bar-chart-1';
import { CfDemoBarChart2 } from '../demos/bar-chart/demo.bar-chart-2';
import { CfDemoBarChart3 } from '../demos/bar-chart/demo.bar-chart-3';
import { CfDemoBarChart4 } from '../demos/bar-chart/demo.bar-chart-4';
import { CfDemoLineChart1 } from '../demos/line-chart/demo.line-chart-1';
import { CfDemoLineChart2 } from '../demos/line-chart/demo.line-chart-2';
import { CfDemoLineChart3 } from '../demos/line-chart/demo.line-chart-3';
import { CfDemoAreaChart1 } from '../demos/area-chart/demo.area-chart-1';
import { CfDemoAreaChart2 } from '../demos/area-chart/demo.area-chart-2';
import { CfDemoAreaChart3 } from '../demos/area-chart/demo.area-chart-3';
import { CfDemoPieChart1 } from '../demos/pie-chart/demo.pie-chart-1';
import { CfDemoPieChart2 } from '../demos/pie-chart/demo.pie-chart-2';
import { CfDemoPieChart3 } from '../demos/pie-chart/demo.pie-chart-3';
import { CfDemoCalendar1 } from '../demos/calendar/demo.calendar-1';
import { CfDemoGallery1 } from '../demos/gallery/demo.gallery-1';
import { CfDemoGallery2 } from '../demos/gallery/demo.gallery-2';
import { CfDemoGallery3 } from '../demos/gallery/demo.gallery-3';
import { CfDemoGallery4 } from '../demos/gallery/demo.gallery-4';
import { CfDemoToolbar1 } from '../demos/toolbar/demo.toolbar-1';
import { CfDemoToolbar2 } from '../demos/toolbar/demo.toolbar-2';
import { CfDemoToolbar3 } from '../demos/toolbar/demo.toolbar-3';
import { CfDemoToolbar4 } from '../demos/toolbar/demo.toolbar-4';
import { CfDemoToolbar5 } from '../demos/toolbar/demo.toolbar-5';
import { CfDemoToolbar6 } from '../demos/toolbar/demo.toolbar-6';
import { CfDemoGauge1 } from '../demos/gauge/demo.gauge-1';
import { CfDemoGauge2 } from '../demos/gauge/demo.gauge-2';
import { CfDemoGauge3 } from '../demos/gauge/demo.gauge-3';
import { CfDemoGauge4 } from '../demos/gauge/demo.gauge-4';
import { CfDemoGoogleMaps1 } from '../demos/google-maps/demo.google-maps-1';
import { CfDemoGoogleMaps2 } from '../demos/google-maps/demo.google-maps-2';
import { CfDemoFileUploader1 } from '../demos/file-uploader/demo.file-uploader-1';
import { CfDemoFileUploader2 } from '../demos/file-uploader/demo.file-uploader-2';
// import { CfDemoSocket1 } from '../demos/sockets/demo.socket-1';
import { CfDemoAutocomplete1 } from '../demos/autocomplete/demo.autocomplete-1';
import { CfDemoAutocomplete2 } from '../demos/autocomplete/demo.autocomplete-2';
import { CfDemoAutocomplete3 } from '../demos/autocomplete/demo.autocomplete-3';
import { CfDemoAutocomplete4 } from '../demos/autocomplete/demo.autocomplete-4';
import { CfDemoSidenav1 } from '../demos/sidenav/demo.sidenav-1';
import { CfDemoSidenav2 } from '../demos/sidenav/demo.sidenav-2';
import { CfDemoAvatar1 } from '../demos/avatar/demo.avatar-1';
import { CfDemoAvatar2 } from '../demos/avatar/demo.avatar-2';
import { CfDemoAvatar3 } from '../demos/avatar/demo.avatar-3';
import { CfDemoAvatar4 } from '../demos/avatar/demo.avatar-4';
import { CfDemoJsonEditor1 } from '../demos/json-editor/demo.json-editor-1';
import { CfDemoJsonEditor2 } from '../demos/json-editor/demo.json-editor-2';
import { CfDemoJsonEditor3 } from '../demos/json-editor/demo.json-editor-3';

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
    properties = null;

    setComponent(name): void {
      switch (name) {
          case 'Autocomplete':
            this.componentData = {
              componentName: 'AutocompleteComponent',
              description:`
                <p>The <b>cf-autocomplete</b> allows the user to subscribe to Autocomplete events based on user data or user server url for taking data. Data can be cached, prefetched, filtered and items can have highlighting of label, multiselection, working on chips layout. Typing process is based on <b>delay</b> (the amount of time from when the user stops typing to when the result is returned) and by default it is 250 milliseconds. More about component functionality is next:</p>
                <ul>
                  <li>Works with existing arrays of items or can call data from a remote server, when <b>serverUrl</b> exists. To work with remote servers there are such autocomplete properties: <b>prefetch</b> and <b>cache</b>.
                    <ol>
                      <li><b>prefetch</b> - if set to true and <b>serverUrl</b> exists, then on component init external service call will be made automatically and result will be cached</li>
                      <li><b>cache</b> - if set to true and <b>serverUrl</b> exists, then all requests will be cached</li>
                    </ol>
                  </li>
                  <li>Autocomplete filtering system requires to set what object property will be as <b>displayField</b> by which matching will be searched</li>
                  <li>Multiselection by separating values by comma inside search input field</li>
                  <li>Highlighting search value</li>
                  <li>Using chips for selection items together with 'single' / 'multiple' selection</li>
                  <li>Read only property for chips</li>
                  <li>Fusion templating system for autocomplete dropdown list items</li>
                  <li>Fusion templateng system for selected chips</li>
                  <li>Dropdown stays open on item selection</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'autocomplete-1',
              demos:[
                {
                  component: CfDemoAutocomplete1,
                  title: 'Basic usage',
                  inputs: {},
                },
                {
                  component: CfDemoAutocomplete2,
                  title: 'Remote data',
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoAutocomplete3,
                  title: 'Contacts template',
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Autocomplete Template",
                  component: CfDemoAutocomplete4,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-autocomplete by default is set to the <i>default template</i> under templates/default/autocomplete-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          displayField: "",
                          source: [],
                          serverUrl: "",
                          useChips: false,
                          chipsSelected: "multiple",
                          chipsReadOnly: false,
                          multiselection: false,
                          stayOpenedOnClick: false,
                          highlighting: false,
                          prefetch: false,
                          cache: false,
                          delay: 250
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one autocomplete template it should be named: <b>autocomplete-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-autocomplete compTemplate=“customDirectory/autocomplete-template.json”<code>></code><code><</code><code>/</code>cf-autocomplete<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the autocomplete-template.json </p>
                    <p> If you have more than one autocomplete template defined, then one should be name <b>autocomplete-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-autocomplete compTemplate="customDirectory/my-custom-autocomplete.json"<code>></code><code><</code><code>/</code>cf-autocomplete<code>></code>
                    </pre>
                    <p>Where <i>my-custom-autocomplete.json</i> is the custom name of the autocomplete template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
              ],
              docs: [
                {
                  title:"Usage",
                  description:`
                    <p>There are two available properties for ng-template used with cf-autocomplete: <b>index</b> and <b>item</b>. Using ng-templates requires template marker id:</p>
                    <pre>
                      <code><</code>cf-autocomplete<code>></code>\n
                        //for dropdown list items:
                        <code><</code>ng-template <b>#dropdownItemTemplate</b> let-item="<b>item</b>"<code>></code> your html here <code><</code>/ng-template<code>></code>\n
                        //for selected items (chips):
                        <code><</code>ng-template <b>#selectedItemTemplate</b> let-item="<b>item</b>" let-i="<b>index</b>"<code>></code> your html here <code><</code>/ng-template<code>></code>\n
                      <code><</code><code>/</code>cf-autocomplete<code>></code>
                    </pre>
                    <p>The cf-autocomplete has a property model to configure it and a styling model to style it</p> 
                    <p>By default the autocomplete is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-autocomplete<code>></code><code><</code><code>/</code>cf-autocomplete<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-autocomplete compTemplate="myAutocompleteTemplate"<code>></code><code><</code><code>/</code>cf-autocomplete<code>></code>
                    </pre>
                    <p>2- Pass a property autocomplete model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-autocomplete [properties]="myAutocompleteProperties"<code>></code><code><</code><code>/</code>cf-autocomplete<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the icon 
                    <pre>
                    <code><</code>cf-autocomplete display="true" disable="false" <code>></code><code><</code><code>/</code>cf-autocomplete<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-autocomplete [properties]="myAutocompleteProperties"<code>></code><code><</code><code>/</code>cf-autocomplete<code>></code>
                  </pre>
                  <pre>
                    <code>
                      {
                        // <b>Core Properties</b>
                        id: string,                      // Instance ID of the component
                        enabledI18N: boolean,            // Enables component internationalization
                        draggable: boolean,              // Enables component drag and drop
                        notification: NotificationModel, // Notification property object
                        compTemplate: string,            // Template name
                        display: boolean,                // true or false Default: true
                        disable: boolean,                // true or false Default: false
                        tooltip: any,                    // Tooltip on hover of the component
                      // <b>Autocomplete Properties</b>
                        displayField: string,       // Name of item property to be used as item label and selected value
                        source: any[],              // Array with items
                        serverUrl: string,          // Server url to fetch data from
                        useChips: boolean,          // Default: false
                        chipsSelected: string,      // Default: 'multiple'
                        chipsReadOnly: boolean,     // Default: false
                        multiselection: boolean,    // Default: false
                        stayOpenedOnClick: boolean, // Default: false
                        highlighting: boolean,      // Default: false
                        prefetch: boolean,          // Default: false
                        cache: boolean,             // Default: false
                        delay: number               // Default: 250
                      }
                    </code>
                    </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-autocomplete [styling]="myAutocompleteStyling"<code>></code><code><</code><code>/</code>cf-autocomplete<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                    <i>class</i>: string                                                            // Name of the css class selector
                    <i>themeColor</i>: string                                                       // primary/accent/warn

                    <code>
                    {
                      // Container surrounding the Autocomplete
                      container: { dynamicClass, class },

                      // Chips container styling
                      chipsContainer: { dynamicClass, class },

                      // Chips styling
                      chips: { dynamicClass, class },

                      // Search container styling with input and dropdown
                      searchContainer: { dynamicClass, class },

                      // Input container styling
                      inputContainer: { dynamicClass, class },

                      // Input element styling
                      input: { dynamicClass, class },

                      // Dropdown container styling
                      dropdownContainer: { dynamicClass, class },

                      // Dropdown item styling
                      dropdownItem: { dynamicClass, class }
                    }
                    </code>
                    </pre>`
                    
                },
              ]
            } ;
          break;
          case 'Menu':
            this.componentData = {
              componentName: 'MenuComponent',
              description:`
                <p>The <b>cf-menu</b> is build on top of the <a target="_blank" class='links' href='https://material.angular.io/components/menu/overview'>MD Menu</a> and extends it as following:</p>
                <p>It represents a Menu with extended attributes such as icon and notifications</p>
                <ul>
                  <li>The menu has a trigger icon and an array of menu items, meaning every item in that array will represent an item displayed in the list of the menu</li>
                  <li>A menu item is a button with the same functionalities of a cf-button and with the extended feature of a notification</li>
                  <li>The menu items can be set in two ways: from the menu model or from html by using <b>cf-menu-item</b> component</li>
                  <li>The menu items can be separated by dividers</li>
                  <li>Every menu item can be attached to an action</li>
                  <li>Fusion templating system for trigger icon</li>
                  <li>Fusion templating system for menu items</li>
                </ul>
                <p>List of exposed properties as separate inputs:</p>
                <ul>
                  <li>display</li>
                  <li>disable</li>
                  <li>itemsSource</li>
                  <li>menuItems (each item can be object of type <b>MenuItemModel</b> or <b>any object</b> or <b>mix of both previous</b>)</li>
                  <li>iconName (trigger icon name)</li>
                  <li>iconSize (trigger icon size)</li>
                </ul>
                <p>Menu items actions can be used in two ways:</p>
                <ul>
                  <li>if items goes from the menu model, then on <b>cf-menu</b> tag is needed to add <b>(onItemClick)="someFunc($event)"</b>, where <b>$event</b> object consists of two properties: <b>cfIndex</b>(index of item) and <b>cfItem</b>(item object itself).</li>
                  <li>if items goes from the html, then on each <b>cf-menu-item</b> tag is possible to add <b>(onClick)="someFunc($event)"</b>, where <b>$event</b> object contein just menu item object.</li>
                </ul>
                <p>Also, for items which goes from the model, it is possible to use html template (<b><code><</code>ng-template #itemsTemplate ...</b>), thru which all items will be rendered.</p>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'menu-1',
              files:"menu",
              demos: [
                {
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
                },
                {
                  title:"Menu with Actions",
                  component: CfDemoMenu3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  component: CfDemoMenu4,
                  title: "Menu Template",
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-menu by default is set to the <i>default template</i> under templates/default/menu-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          triggerIcon: { name: "more_vert", size: "30px" },
                          itemsSource: "fromModel",
                          menuItems: [
                            {   
                              buttonProperty: {		
                                label: "Profile",
                                iconProperty:{ name: 'fa-user', size: '24px' },
                                iconPosition:"left"
                              },
                              divider: true
                            },
                            {
                              buttonProperty:{		
                                label: "Settings",
                                iconProperty: { name: 'fa-cog', size: '24px' },
                                iconPosition:"left"
                              },
                              divider: true
                            },
                            {
                              buttonProperty:{		
                                label: "Log Out",
                                iconProperty:{ name: 'fa-sign-out', size: '24px' },
                                iconPosition:"left"
                              },
                              divider: true
                            }
                          ]
                        },
                        styling: {
                          iconStyling: {
                            themeColor:"accent"
                          },
                          menuItemStyling: {
                            buttonStyling: {
                              button: {
                                themeColor:"primary"
                              }
                            }
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one menu template it should be named: <b>menu-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-menu compTemplate=“customDirectory/menu-template.json”<code>></code><code><</code><code>/</code>cf-menu<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the menu-template.json </p>
                    <p> If you have more than one menu template defined, then one should be name <b>menu-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-menu compTemplate="customDirectory/my-custom-menu.json"<code>></code><code><</code><code>/</code>cf-menu<code>></code>
                    </pre>
                    <p>Where <i>my-custom-menu.json</i> is the custom name of the menu template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title:"Dynamic Menu",
                  component: CfDemoMenu5,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                  <p>The cf-menu has a property model to configure it and a styling model to style it</p> 
                  <p>By default the menu is packaged with default styling and properties so the component can simply be used in the following way : 
                  <pre>
                      <code><</code>cf-menu<code>></code><code><</code><code>/</code>cf-menu<code>></code>
                  </pre>
                  <p>The menu items are passed in the properties model of the component, where every item in that array will represent an item shown on click of the trigger icon</p>
                  <p>To override any of the default properties, you can:</p>
                  <p>1- Create a custom template and pass it as an input to the component: 
                  <pre>
                    <code><</code>cf-menu compTemplate="myMenuTemplate"<code>></code><code><</code><code>/</code>cf-menu<code>></code>
                  </pre>
                  <p>2- Pass a property menu model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-menu [properties]="myMenuProperties"<code>></code><code><</code><code>/</code>cf-menu<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the menu 
                  <pre>
                  <code><</code>cf-menu disable="true" <code>></code><code><</code><code>/</code>cf-menu<code>></code>
                  </pre>
                  <p>The hierarchy of the component's configuration is in the following order:</p>
                  <p>- Inputs override Property Model<p>
                  <p>- Property Model overrides Custom Template<p>
                  <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-menu [properties]="myMenuProperties"<code>></code><code><</code><code>/</code>cf-menu<code>></code>
                  </pre>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                      // Instance ID of the component
                      enabledI18N: boolean,            // Enables component internationalization
                      draggable: boolean,              // Enables component drag and drop
                      notification: NotificationModel, // Notification property object
                      compTemplate: string,            // Template name
                      display: boolean,                // true or false Default: true
                      disable: boolean,                // true or false Default: false
                      tooltip: any,                    // Tooltip on hover of the component
                      // <b>Menu Properties</b>
                      triggerIcon: IconModel        // Refer to icon component
                      itemsSource: string           // For current it has only one type: "fromModel"
                      menuItems: Object             // Array of menu items with type MenuItemModel or any object or mix of both
                    }
                    </code>
                  </pre> 
                  <p> Below is the structure of the <b>MenuItemModel</b></p>
                  <pre>
                    <code>
                    {
                      display: boolean,             // Default: true
                      disable: boolean,             // Default: false
                      buttonProperty: ButtonModel,  // Refer to button component
                      notification: string,         // Menu item notification
                    }
                    </code>
                  </pre>
                  <p>List of exposed properties as separate inputs:</p>
                  <ul>
                    <li>display</li>
                    <li>disable</li>
                    <li>label</li>
                    <li>iconName</li>
                    <li>iconSize</li>
                  </ul>       
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-menu [styling]="myMenuStyling"<code>></code><code><</code><code>/</code>cf-menu<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                    <i>class</i>: string                                                            // Name of the css class selector
                    <i>themeColor</i>: string                                                       // primary/accent/warn

                    <code>
                    {
                      // Container surrounding the Menu
                      container: {
                        dynamicClass,
                        class
                      },

                      // Trigger icon styling , Check Icon Component
                      iconStyling: IconStylingModel,

                      // Menu item styling
                      menuItemStyling:{
                        container: {
                          dynamicClass,
                          class,
                          themeColor
                        },
                        //Check Button Component
                        buttonStyling:ButtonStylingModel
                      }
                    }
                    </code>
                    </pre>`
                    
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the menu, you have to set the <i>themeColor</i> property in the <i>styling.menu</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            } ;
          break;
          case 'Button':
            this.componentData = {
              componentName: 'ButtonComponent',
              description:`
                <p>The <b>cf-button</b> is build on top of the <a target="_blank" class='links' href='https://material.angular.io/components/button/overview'>MD Button</a> and extends it as following:</p>
                <ul>
                  <li>Rendering automatically any icon name passed from both <a target="_blank" class='links' href='http://fontawesome.io/icons/'>Font Awesome</a> and <a class='links' href='https://material.io/icons/'>Material Icons</a> with its position.</li>
                  <li>Having a Waiting State</li>
                  <li>Fusion templating system for button and icon</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'button-1',
              demos:[
                {
                  title: "Basic Usage",
                  component: CfDemoButton1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                  modules:"CfButtonModule"
                },
                {
                  title:"Button Styling",
                  component: CfDemoButton2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                  modules:"CfButtonModule"
                },
                {
                  title:"Waiting State",
                  component: CfDemoButton3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Button Template",
                  component: CfDemoButton4,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-button by default is set to the <i>default template</i> under templates/default/button-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          display: true,
                          disable: false,
                          label: "CF BUTTON"
                        },
                        styling: {
                          button: {
                            themeColor:"primary"
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one icon template it should be named: <b>button-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-button compTemplate=“customDirectory/button-template.json”<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the button-template.json </p>
                    <p> If you have more than one button template defined, then one should be name <b>button-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-button compTemplate="customDirectory/my-custom-button.json"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <p>Where <i>my-custom-button.json</i> is the custom name of the button template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "Core Properties",
                  component: CfDemoButton5,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "Action Button",
                  component: CfDemoButton6,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-button has a property model to configure it and a styling model to style it</p> 
                    <p>By default the button is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-button<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-button compTemplate="myButtonTemplate"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <p>2- Pass a property button model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-button [properties]="myButtonProperties"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the button 
                    <pre>
                    <code><</code>cf-button label="Like" name="favorite" disable="false"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>` 
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-button [properties]="mybuttonProperties"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <pre>
                      <code>
                      {
                        // <b>Core Properties</b>
                        id: string,                      // Instance ID of the component
                        enabledI18N: boolean,            // Enables component internationalization
                        draggable: boolean,              // Enables component drag and drop
                        notification: NotificationModel, // Notification property object
                        compTemplate: string,            // Template name
                        display: boolean,                // true or false Default: true
                        disable: boolean,                // true or false Default: false
                        tooltip: any,                    // Tooltip on hover of the component
                        // <b>Button Properties</b>
                        iconPosition: string,            // Default: 'left', Possible: 'left', 'right'
                        label: string,                   // The text for the button
                        iconProperty: IconModel,         // Refer to icon component
                        waiting:{
                          value: boolean,                 // Whether the button is waiting
                          disabled: boolean,              // Whether the button is disabled while waiting
                          iconProperty: IconModel         // See Icon documentation
                        }
                      }
                      </code>
                      </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-button [styling]="mybuttonStyling"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn

                      <code>
                      {
                        //Container surrounding the Button
                        container: {
                          dynamicClass,
                          class
                        },

                        //md-button styling
                        button: {
                          dynamicClass,
                          class,
                          themeColor
                        },

                        //Check Icon Component
                        iconStyling: IconStylingModel
                      }
                      </code>
                    </pre>`     
                },
                {
                  title:"Theming",
                  description:`
                    <p>CF Components will automatically apply the application’s defined theme</p>
                    <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                    <p>Options: <i>primary, accent, warn</i></p>
                    <p>To set the theme color of the button, you have to set the <i>themeColor</i> property in the <i>styling.button</i> object
                    to either primary, accent or warn to apply the application's theme.</p>
                    <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                    `
                }
              ]
            };
          break;
          case 'ButtonMenu':
            this.componentData = {
              componentName: 'ButtonMenuComponent',
              description:`
                <p>The <b>cf-button-menu</b> is build on top of <i>cf-button</i> and <i>cf-menu</i></p>
                <ul>
                  <li>The button-menu has a trigger icon and an array of menu items, meaning every item in that array will represent an item displayed in the list of the menu</li>
                  <li>It has a trigger button that can have an action seperate of the icontrigger menu</li>
                  <li>A menu item is a button with the same functionalities of a cf-button and with the extended feature of a notification</li>
                  <li>The menu items can be separated by dividers</li>
                  <li>Every menu item can be attached to an action</li>
                  <li>Fusion templating system for button</li>
                  <li>Fusion templating system for trigger icon</li>
                  <li>Fusion templateng system for menu items</li>
                </ul>    
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'button-menu-1',
              demos:[
                {
                  title: "Basic Usage",
                  component: CfDemoButtonMenu1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "Styling",
                  component: CfDemoButtonMenu2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"ButtonMenu Template",
                  component: CfDemoButtonMenu3,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-button-menu by default is set to the <i>default template</i> under templates/default/button-menu-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          display: true,
                          disable: false,
                          buttonProperty: {
                            label: "Apple Products",
                            iconProperty: {
                              display: true,
                              name: "fa-apple",
                              size: "16px"
                            }
                          },
                          menuProperty: {
                            triggerIcon: {
                              name: "keyboard_arrow_down",
                              size: "30px"
                            },
                            menuItems: [
                              {
                                buttonProperty": {
                                  label: "iPhone",
                                  iconProperty: {
                                    name: "fa-mobile",
                                    size: "24px"
                                  },
                                  iconPosition": "left"
                                },
                                divider: true
                              },
                              {
                                buttonProperty: {
                                  label: "iPad",
                                  iconProperty: {
                                    name: "fa-tablet",
                                    size: "24px"
                                  },
                                  iconPosition: "left"
                                },
                                divider: true
                              },
                              {
                                buttonProperty: {
                                  label: "Mac",
                                  iconProperty: {
                                    name: "fa-laptop",
                                    size: "24px"
                                  },
                                  iconPosition: "left"
                                },
                                divider: true
                              }
                            ]
                          }
                        },
                        styling: {
                          buttonStyling: {
                            container: {
                              class: "default-container"
                            },
                            button: {
                              themeColor: "primary"
                            }
                          },
                          menuStyling: {
                            iconStyling: {
                              icon: {
                                themeColor: "accent"
                              }
                            },
                            menuItemStyling: {
                              buttonStyling: {
                                button: {
                                  themeColor: "primary"
                                }
                              }
                            }
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one icon template it should be named: <b>button-menu-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-button-menu compTemplate=“customDirectory/button-menu-template.json”<code>></code><code><</code><code>/</code>cf-button-menu<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the button-menu-template.json </p>
                    <p> If you have more than one button-menu template defined, then one should be name <b>button-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-button-menu compTemplate="customDirectory/my-custom-button-menu.json"<code>></code><code><</code><code>/</code>cf-button-menu<code>></code>
                    </pre>
                    <p>Where <i>my-custom-button-menu.json</i> is the custom name of the button-menu template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "ButtonMenu Actions",
                  component: CfDemoButtonMenu4,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-button-menu has a property model to configure it and a styling model to style it</p> 
                    <p>By default the button-menu is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-button-menu<code>></code><code><</code><code>/</code>cf-button-menu<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-button-menu compTemplate="myButtonMenuTemplate"<code>></code><code><</code><code>/</code>cf-button-menu<code>></code>
                    </pre>
                    <p>2- Pass a property button-menu model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-button-menu [properties]="myButtonMenuProperties"<code>></code><code><</code><code>/</code>cf-button-menu<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the button-menu 
                    <pre>
                    <code><</code>cf-button-menu disable="false"<code>></code><code><</code><code>/</code>cf-button-menu<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                    ` 
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-button-menu [properties]="mybuttonmenuProperties"<code>></code><code><</code><code>/</code>cf-button-menu<code>></code>
                    </pre>
                    <pre>
                      <code>
                      {
                       // <b>Core Properties</b>
                       id: string,                      // Instance ID of the component
                       enabledI18N: boolean,            // Enables component internationalization
                       draggable: boolean,              // Enables component drag and drop
                       notification: NotificationModel, // Notification property object
                       compTemplate: string,            // Template name
                       display: boolean,                // true or false Default: true
                       disable: boolean,                // true or false Default: false
                       tooltip: any,                    // Tooltip on hover of the component
                       // <b>ButtonMenu Properties</b>
                       buttonProperty: ButtonModel,    // Refer to button component
                       menuProperty: MenuModel         // Refer to menu component
                      }
                      </code>
                      </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-button [styling]="mybuttonStyling"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                      <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn

                      <code>
                      {
                        //Container surrounding the ButtonMenu
                        container: {
                          dynamicClass,
                          class
                        },

                        //cf-button styling Check Button Component
                        buttonStyling: buttonStylingModel 

                        //cf-menu styling Check Menu Component
                        menuStyling: MenuStylingModel
                      }
                      </code>
                      </pre>`
                      
                },
                {
                  title:"Theming",
                  description:`
                    <p>CF Components will automatically apply the application’s defined theme</p>
                    <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                    <p>Options: <i>primary, accent, warn</i></p>
                    <p>To set the theme color of the button, you have to set the <i>themeColor</i> property in the <i>styling.button</i> object
                    to either primary, accent or warn to apply the application's theme.</p>
                    <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                    `
                }
              ]
            };
          break;
          case 'Fab':
            this.componentData = {
              componentName: 'FabComponent',
              description:`
                <p>The <b>cf-fab</b> is an implementation of the Floating Action Button as described in the Material Design language specifications.</p> 
                <p>Each Fab component is composed of a trigger button (the large, primary button), which may display a number of smaller buttons when clicked, each of which should be given an action.</p>  
                <p>The properties of the Fab in general are defined by the FabModel, and each button of the fab is defined a FabButtonModel, so each constituent button may be customized.</p> 
                <p>Options for the Fab include:</p>
                  <ul>
                    <li>Specify the direction of smaller action buttons</li>
                    <li>Have the smaller action buttons shown or hidden by default</li>
                    <li>Control whether the expanded buttons remain expanded or close when one is clicked</li>
                    <li>Define the icon, action, tooltip, and tooltip location for each button</li>
                    <li>Control whether each button is disabled or hidden</li>
                    <li>Implementing the Template System of this library</li>
                  </ul>
                <p><i>Check <strong>Examples</strong> tab for demonstrations of the CfFab in action.</i></p>`,
              fileName: 'fab-1',
              demos: [
                {
                  title:"Basic Usage",
                  component: CfDemoFab1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Changing Fab actions",
                  component: CfDemoFab2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Dynamic menu options",
                  component: CfDemoFab3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Fab Template",
                  component: CfDemoFab4,
                  description:`
                    <p>Please Refer to <a href="/guide/template" class="links" target="_blank">Template System</a></p>
                    <p>The cf-fab by default is set to the <i>default template</i> under templates/default/fab-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          direction: "right",
                          showButtons: false,
                          stayOpened: false,
                          trigger: {
                            button: { 
                              label: "Trigger",
                              iconProperty: { name: "menu" }
                            },
                            tooltipPosition: "above"
                          },
                          actionButtons: [
                            { 
                              button: {
                                label: "Action item",
                                iconProperty: { "name": "home" }
                              },
                              tooltipPosition: "above"
                            } 
                          ]
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one icon template it should be named: <b>fab-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-fab compTemplate=“customDirectory/fab-template.json”<code>></code><code><</code><code>/</code>cf-fab<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the fab-template.json </p>
                    <p> If you have more than one fab template defined, then one should be name <b>fab-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-fab compTemplate="customDirectory/my-custom-fab.json"<code>></code><code><</code><code>/</code>cf-fab<code>></code>
                    </pre>
                    <p>Where <i>my-custom-fab.json</i> is the custom name of the fab template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-fab has a properties model to configure it and a styling model to style it</p> 
                    <p>By default the fab is packaged with default styling and properties so the component can simply be used in the following ways : 
                    <pre>
                        <code><</code>cf-fab<code>></code><code><</code><code>/</code>cf-fab<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-fab compTemplate="myFabTemplate"<code>></code><code><</code><code>/</code>cf-fab<code>></code>
                    </pre>
                    <p>2- Pass a properties FabModel object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-fab [properties]="myFabProperties"<code>></code><code><</code><code>/</code>cf-fab<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the button 
                    <pre>
                      <code><</code>cf-fab disable="true"<code>></code><code><</code><code>/</code>cf-fab<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>`
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>FabModel</h4>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                         // Instance ID of the component
                      enabledI18N: boolean,               // Enables component internationalization
                      draggable: boolean,                 // Enables component drag and drop
                      notification: NotificationModel,    // Notification property object
                      compTemplate: string,               // Template name
                      display: boolean,                   // true or false Default: true
                      disable: boolean,                   // true or false Default: false
                      tooltip: any,                       // Tooltip on hover of the component
                      // <b>Fab Properties</b>
                      direction: string,                  // Default: 'down' Options: 'up', 'right', 'down', 'left'
                      showButtons: boolean,               // Default: false
                      stayOpened: boolean,                // Default: false
                      triggerButton: FabButtonModel,      // Defines main fab button
                      actionButtons: FabButtonModel[],    // Defines action fab buttons
                    }
                    </code>
                  </pre> 
                  <h4>FabButtonModel</h4>
                  <pre>
                    <code>
                    {
                      button: ButtonModel,                // ButtonModel for the button (trigger or fab action).
                      tooltipPosition: string,            // Position of the button tooltip. Can be: above, below, left, right. Default: above
                    }
                    </code>
                  </pre>
                  <h4>FabStylingModel</h4>
                  <pre>
                    {
                      trigger?: FabButtonStylingModel;    // FabButtonStylingModel for trigger icon
                      itemsContainer?: {                  // Styling for fab action items container
                        class?: string;                   // Classes for itemsContainer section
                        dynamicClass?: any;               // Dynamic classes for itemsContainer section
                        item?: FabButtonStylingModel;     // FabButtonStylingModel for each mini fab action item
                      };
                    }
                  </pre>
                  <h4>FabButtonStylingModel</h4>
                  <pre>
                    {
                      button: ButtonStylingModel;         // ButtonStylingModel for fab button
                      tooltip: StylingModel;              // StylingModel for fab button tooltip
                    }
                  </pre>
                  `
                },
              ]
            };
          break;
          case 'Icon':
            this.componentData = {
              componentName: 'IconComponent',
              description:`
                <p>The <b>cf-icon</b> is build on top of the <a target="_blank" class='links' href='https://material.angular.io/components/icon/overview'>MD Icon</a> and extends it as following:</p>
                <ul>
                  <li>CF Icon supports both <a target="_blank" class='links' href='http://fontawesome.io/icons/'>Font Awesome</a> and <a target="_blank" class='links' href='https://material.io/icons/'>Material Icons</a></li>
                  <li>Having a toggle state</li>
                  <li>Implementing the Template System of this library</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'icon-1',
              demos: [
                {
                  component: CfDemoIcon1,
                  title: "Basic Usage",
                  inputs: {
                    themeName: this.configuration.theme
                  },
                  modules:"CfIconModule"
                },
                {
                  component: CfDemoIcon2,
                  title: "Toggle Icon",
                  inputs: {
                    themeName: this.configuration.theme
                  },
                  modules:"CfIconModule,CfInputModule"
                },
                {
                  component: CfDemoIcon3,
                  title: "Icon Styling",
                  inputs: {
                    themeName: this.configuration.theme
                  },
                  modules:"CfIconModule"
                },
                {
                  component: CfDemoIcon4,
                  title: "Icon Template",
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-icon by default is set to the <i>default template</i> under templates/default/icon-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          display: true,
                          name: "cloud",
                          size: "24px",
                          value: "icon"
                        },
                        styling: {
                          icon: {
                            themeColor:"primary"
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one icon template it should be named: <b>icon-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-icon compTemplate=“customDirectory/icon-template.json”<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the icon-template.json </p>
                    <p> If you have more than one icon template defined, then one should be name <b>icon-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-icon compTemplate="customDirectory/my-custom-icon.json"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>
                    <p>Where <i>my-custom-icon.json</i> is the custom name of the icon template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoIcon5,
                  title: "Core Properties",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoIcon6,
                  title: "Icon Dynamic Styling",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-icon has a property model to configure it and a styling model to style it</p> 
                    <p>By default the icon is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-icon<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-icon compTemplate="myIconTemplate"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>
                    <p>2- Pass a property icon model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-icon [properties]="myIconProperties"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the icon 
                    <pre>
                    <code><</code>cf-icon name="favorite" disable="true" <code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-icon [properties]="myIconProperties"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>
                    <pre>
                      <code>
                      {
                       // <b>Core Properties</b>
                       id: string,                      // Instance ID of the component
                       enabledI18N: boolean,            // Enables component internationalization
                       draggable: boolean,              // Enables component drag and drop
                       notification: NotificationModel, // Notification property object
                       compTemplate: string,            // Template name
                       display: boolean,                // true or false Default: true
                       disable: boolean,                // true or false Default: false
                       tooltip: any,                    // Tooltip on hover of the component
                       // <b>Icon Properties</b>
                       name: string,                    // Default: 'Home'
                       size: string,                    // Default: '24px'
                       value: any,                      // Value emitted on click
                        toggle: {                       // Toggling icon state
                          name: string,                 // Name of icon toggled
                          size: string,                 // Size of icon toggled
                          value: any                    // Value of icon toggled
                        }
                      }
                      </code>
                      </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-icon [styling]="myIconStyling"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>
                      <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn

                      <code>
                      {
                        //Container surrounding the Icon
                        container: {
                          dynamicClass,
                          class
                        },

                        //md-icon styling
                        icon: {
                          dynamicClass,
                          class,
                          themeColor
                        },

                        //Toggle Icon styling with same structure as above
                        toggleIcon: {
                          container: {},
                          icon: {}
                        }
                      }
                      </code>
                      </pre>`
                    
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the icon, you have to set the <i>themeColor</i> property in the <i>styling.icon</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            } ;
          break;
          case 'Image':
            this.componentData = {
              componentName: 'ImageComponent',
              description: `
                <p>The <b>cf-image</b> component consists of two parts:</p>
                <ul>
                  <li>Image to display</li>
                  <li>Label/Caption along with its relative position</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'image-1',
              demos: [
                {
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
                },
                {
                  title:"Image styling contingent upon user selection",
                  component: CfDemoImage3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Image Template",
                  component: CfDemoImage4,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-image by default is set to the <i>default template</i></p>
                    <pre>
                      <code class="json">
                        properties: {
                          label: 'Figure 1: Default Caption',
                          labelPosition: 'bottom',
                          url: 
                        },
                        styling: {
                          icon: {
                            themeColor:"primary"
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one image template it should be named: <b>image-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-image compTemplate=“customDirectory/image-template.json”<code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the image-template.json </p>
                    <p> If you have more than one image template defined, then one should be name <b>image-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-image compTemplate="customDirectory/my-custom-image.json"<code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                    <p>Where <i>my-custom-image.json</i> is the custom name of the image template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }
              ],
              docs: [
                {
                  title:"Usage",
                  description:`
                    <p>The cf-image has a property model to configure it and a styling model to style it</p> 
                    <p>By default the image is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-image<code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-image compTemplate="myImageTemplate"<code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                    <p>2- Pass a property image model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-image [properties]="myImageProperties"<code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the image 
                    <pre>
                    <code><</code>cf-image name="favorite" disable="true" <code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-image [properties]="myImageProperties"<code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                    <pre>
                      <code>
                        {
                         // <b>Core Properties</b>
                         id: string,                      // Instance ID of the component
                         enabledI18N: boolean,            // Enables component internationalization
                         draggable: boolean,              // Enables component drag and drop
                         notification: NotificationModel, // Notification property object
                         compTemplate: string,            // Template name
                         display: boolean,                // true or false Default: true
                         disable: boolean,                // true or false Default: false
                         tooltip: any,                    // Tooltip on hover of the component
                         // <b>Image Properties</b>
                         url: string,                     // URL for the image
                         label: string,                   // The caption for the image
                         labelPosition: string,           // The position of the caption, Default: 'bottom' Options:'bottom','left','right','top'
                        }
                      </code>
                    </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-image [styling]="myImageStyling"<code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                      <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn

                      <code>
                      {
                        //Container surrounding the Image
                        container: {
                          dynamicClass,
                          class
                        },

                        //image styling
                        image: {
                          dynamicClass,
                          class
                        },

                        //label styling
                        label: {
                          dynamicClass,
                          class
                        },
                      }
                      </code>
                      </pre>
                  `   
                }
              ]
            } ;
          break;
          case 'Gallery':
            this.componentData ={
              componentName: 'GalleryComponent',
              description: `
                <p>The <b>cf-gallery</b> has three main parts to display images and fullscreen working mode.<p>
                <p>Main features are:</p>
                <ul>
                  <li>Main block to preview current image</li>
                  <li>Thumbnails with all images list</li>
                  <li>Popup element to open current image with it's title</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'gallery-1',
              demos:[
                {
                  title:"Basic Usage",
                  component: CfDemoGallery1,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title:"Gallery Template",
                  component: CfDemoGallery2,
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-gallery by default is set to the <i>default template</i> under templates/default/gallery-template.json</p>
                    <pre>
                      <code>
                        property: {
                          images: [
                            {
                              "small": "https://i1.wallpaperscraft.com/image/nature_waterfall_summer_lake_trees_90400_300x168.jpg",
                              "medium": "https://i1.wallpaperscraft.com/image/nature_waterfall_summer_lake_trees_90400_602x339.jpg",
                              "big": "https://wallpaperscraft.com/image/nature_waterfall_summer_lake_trees_90400_1920x1080.jpg",
                              "description": "Nature waterfall summer lake_trees"
                            }
                            .
                            .
                            .  
                          ],
                          options: {
                            width: "100%",
                            imagePercent: 75,
                            imageArrowsAutoHide: true,
                            thumbnailsPercent: 25,
                            thumbnailsColumns: 3,
                            thumbnailMargin: 8,
                            thumbnailsMargin: 8,
                            thumbnailsArrowsAutoHide: true,
                            previewFullscreen: true
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one gallery template it should be named: <b>gallery-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-gallery compTemplate=“customDirectory/gallery-template.json”<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the gallery-template.json </p>
                    <p> If you have more than one gallery template defined, then one should be name <b>gallery-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-gallery compTemplate="customDirectory/my-custom-gallery.json"<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
                    </pre>
                    <p>Where <i>my-custom-gallery.json</i> is the custom name of the gallery template file found under your custom directory</p>`,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title:"Gallery without thumbnails and with `rotate` animation",
                  component: CfDemoGallery3,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title:"Gallery without main image block and with custom styling",
                  component: CfDemoGallery4,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>To display a cf-gallery you need to pass an array of images as well as an object with the gallery options</p>
                    <p>An image is defined by these 4 properties</p>
                    <ul>
                      <li><b>small</b> - image url address to be used in thumbnails</li>
                      <li><b>medium</b> - image url address to be used in main image block</li>
                      <li><b>big</b> - image url address to be used in preview</li>
                      <li><b>description</b> - description text to be used in preview</li>
                    </ul>  
                    <p>The cf-gallery has a property model to configure it and a styling model to style it</p> 
                    <p>By default the gallery is packaged with default styling and properties so the component can simply be used with your array with images objects (described above) in the following way:
                    <pre>
                        <code><</code>cf-gallery [images]="arrayWithImages"<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
                    </pre>
                    where <b>arrayWithImages</b> can be like this:
                    <pre>
                      arrayWithImages = [
                        {
                          small: 'url_to_the_thumbnail_image',
                          medium: 'url_to_the_main_block_image',
                          big: 'url_to_the_popup_image',
                          description: 'Text description to the image'
                        },
                        ...
                      ];
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1 - Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-gallery compTemplate="myGalleryTemplate"<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
                    </pre>
                    <p>2 - Pass a property gallery model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-gallery [properties]="mygalleryProperties"<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
                    </pre>
                    <p>3 - Pass the properties attributes as seperate inputs to the gallery 
                    <pre>
                    <code><</code>cf-gallery [images]="myImages" [options]="myOptions" <code>></code><code><</code><code>/</code>cf-gallery<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title: "Properties and Styling",
                  description: `
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-gallery [properties]="myGalleryProperties"<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
                    </pre>
                    <pre>
                      <code>
                        {
                         // <b>Core Properties</b>
                         id: string,                      // Instance ID of the component
                         enabledI18N: boolean,            // Enables component internationalization
                         draggable: boolean,              // Enables component drag and drop
                         notification: NotificationModel, // Notification property object
                         compTemplate: string,            // Template name
                         display: boolean,                // true or false Default: true
                         disable: boolean,                // true or false Default: false
                         tooltip: any,                    // Tooltip on hover of the component
                         // <b>Gallery Properties</b>
                         images: [],                      // Default: [] - each array element is an object of type GalleryModel.image
                         options: object,                 // Default: object with default properties from GalleryModel.options
                        }
                      </code>
                    </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-gallery [styling]="myGalleryStyling"<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
                    </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn
                    <code>
                      {
                        // styling of the gallery container
                        container: {
                          dynamicClass,
                          class
                        }
                      }
                    </code>  
                    </pre>
                    <h4>Examples:</h4>
                    <pre>
                      myOptions = {
                        width: '100%',
                        imagePercent: 75,
                        imageArrowsAutoHide: true,
                        thumbnailsPercent: 25,
                        thumbnailsColumns: 3,
                        thumbnailMargin: 8,
                        thumbnailsMargin: 8,
                        thumbnailsArrowsAutoHide: true,
                        previewFullscreen: true
                      };

                      myImages = [
                        {
                          small: 'https://i1.wallpaperscraft.com/image/sea_sand_palm_trees_surf_84649_300x168.jpg',
                          medium: 'https://i1.wallpaperscraft.com/image/sea_sand_palm_trees_surf_84649_602x339.jpg',
                          big: 'https://wallpaperscraft.com/image/sea_sand_palm_trees_surf_84649_1920x1080.jpg',
                          description: 'Sea sand palm trees surf'
                        },
                        ...
                      ];

                      myStyling = {
                        container: {
                          class: 'my-gallery'
                        }
                      };
                    </pre>`
                }
              ]
            };
          break;
          case 'Input':
            this.componentData = {
              componentName: 'InputComponent',
              description: `
                <p>The <b>cf-input</b> is build on top of the <a target="_blank" class='links' href='https://material.angular.io/components/input/overview'>MD Input</a> and extends it as following:</p>
                <ul>
                  <li>Specify password or text type</li>
                  <li>Display an icon alongside the input text</li>
                  <li>Define a hint to be displayed for the user</li>
                  <li>May define a hint to be displayed for the user</li>
                  <li>May set a maximum length</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'input-1',
              demos: [
                {
                  title: "Basic Usage",
                  component: CfDemoInput1,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Custom properties, styling and function to update elements colors",
                  component: CfDemoInput2,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Input with type password and menu depending on it",
                  component: CfDemoInput3,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Input Template",
                  component: CfDemoInput4,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-input by default is set to the <i>default template</i> under templates/default/input-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          display: true,
                          type: "text",
                          placeholder: "Input value",
                          hint: {
                            "text": "",
                            "align": ""
                          },
                          "iconProperty": {
                            "display": true,
                            "name": "thumb_up",
                            "size": "24px",
                            "value": "icon"
                          },
                          "iconPosition": "right"
                        },
                        styling: {
                          input: {
                            themeColor:"primary"
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one input template it should be named: <b>input-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-input compTemplate=“customDirectory/input-template.json”<code>></code><code><</code><code>/</code>cf-input<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the input-template.json </p>
                    <p> If you have more than one input template defined, then one should be name <b>input-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-input compTemplate="customDirectory/my-custom-input.json"<code>></code><code><</code><code>/</code>cf-input<code>></code>
                    </pre>
                    <p>Where <i>my-custom-input.json</i> is the custom name of the input template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-input has a property model to configure it and a styling model to style it</p> 
                    <p>By default the input is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-input<code>></code><code><</code><code>/</code>cf-input<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-input compTemplate="myInputTemplate"<code>></code><code><</code><code>/</code>cf-input<code>></code>
                    </pre>
                    <p>2- Pass a property input model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-input [properties]="myInputProperties"<code>></code><code><</code><code>/</code>cf-input<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the input 
                    <pre>
                    <code><</code>cf-input placeholder="Hello world" disable="true" <code>></code><code><</code><code>/</code>cf-input<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>`
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-input [properties]="myInputProperties"<code>></code><code><</code><code>/</code>cf-input<code>></code>
                  </pre>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                      // Instance ID of the component
                      enabledI18N: boolean,            // Enables component internationalization
                      draggable: boolean,              // Enables component drag and drop
                      notification: NotificationModel, // Notification property object
                      compTemplate: string,            // Template name
                      display: boolean,                // true or false Default: true
                      disable: boolean,                // true or false Default: false
                      tooltip: any,                    // Tooltip on hover of the component
                      // <b>Input Properties</b>
                      type: string,                    // Default: 'text', Valid: 'text', 'password'
                      prefix: string,                  // Text displayed before the input
                      suffix: string,                  // Text displayed after the input
                      maxlength: string,               // Default: '10'
                      dividerColor: string,            // The color of the divider
                      menu: MenuModel,                 // See the Menu documentation
                      icon: IconModel,                 // See the Icon documentation
                      value: any,                      // Value of the input
                      iconPosition: string,            // Default: 'left', Valid 'left', 'right'
                      hint: {
                        text: string,                  // Text of the hint; may be set with the hintText input
                        align: string,                 // Default: 'start', Valid: 'start', 'end'
                      }
                    }
                    </code>
                  </pre>
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-input [styling]="myInputStyling"<code>></code><code><</code><code>/</code>cf-input<code>></code>
                  </pre>
                  <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn

                    <code>
                    {
                      //Container surrounding the Input
                      container: {
                        dynamicClass,
                        class
                      },

                      //md-input styling
                      input: {
                        dynamicClass,
                        class,
                        themeColor
                      },

                      //hint styling
                      hint: {
                        dynamicClass,
                        class,
                        themeColor
                      },

                      iconStyling: IconStylingModel, // See Icon documentation

                      menuStyling: MenuStylingModel  // See Menu documentation
                    }
                    </code>
                  </pre>`
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the input, you have to set the <i>themeColor</i> property in the <i>styling.input</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Select':
            this.componentData = {
              componentName: 'SelectComponent',
              description: `
                <p>The <b>cf-select</b> is build on top of the <a target="_blank" class='links' href='https://material.angular.io/components/select/overview'>MD Select</a> and was enriched with many possibilities. List of main options:</p>
                <ul>
                  <li>Allows the user to pick from several items in a dropdown list</li>
                  <li>It includes an optional filter to make it easier to find a given selection</li>
                  <li>Placeholder may have icon</li>
                  <li>Select may have <b>staticPlaceholder</b>, which means like 'static' selected value</li>
                  <li>Multiselection</li>
                  <li>Options can go <b>fromModel</b> or as <b>cf-select-option</b></li>
                  <li>Each select option may be object of four properties: <b>value</b>, <b>label</b>, <b>icon</b>, <b>item</b>(mainly as any html content)</li>
                  <li>Also there is option to make dropdown panel to be under select trigger</li>
                </ul>
                <p>Select option can be set as child component inside cf-select html tags:</p>
                <pre>
                  <code><</code>cf-select-option *ngFor="let opt of myOptions" [value]="opt.someValue" [label]="opt.someLabel" [icon]="opt.someIcon"<code>></code>
                    <code><</code>i [innerHtml]="opt.someItem"<code>></code><code><</code>/<code>i<code>></code>
                  <code><</code><code>/</code>cf-select-option<code>></code>
                </pre>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'select-1',
              demos: [
                {
                  title: "Basic usage with filter",
                  component: CfDemoSelect1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Select with cf-select-option childrens",
                  component: CfDemoSelect2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Select with custom styling and dropdownUnder is set to true",
                  component: CfDemoSelect3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "Select Template",
                  component: CfDemoSelect4,
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-select by default is set to the <i>default template</i> under templates/default/select-template.json</p>
                    <pre>
                      <code>// cf-select template
                        "property": {
                          "display": true,
                          "disable": false,
                          "required": false,
                          "multiple": false,
                          "dropdownUnder": false,
                          "placeholder": "Select: ",
                          "staticPlaceholder": "",
                          "options": [],
                          "optionsSource": "",
                          "showFilter": false,
                          "showIcon": false,
                          "iconChangeable": false,
                          "iconProperty": {
                              "name": "view_list",
                              "size": "20px"
                          },
                          "selected": "",
                          "optionValueField": "value",
                          "optionLabelField": "label",
                          "optionItemField": "item",
                          "optionIconField": "icon",
                        },
                        "style": {
                        }
                      // cf-select-option template
                        "property": {
                          "display": true,
                          "disable": false,
                          "option": null,
                          "option": null,
                          "value": null,
                          "label": null,
                          "item": null,
                          "icon": null,
                          "optionValueField": "value",
                          "optionLabelField": "label",
                          "optionItemField": "item",
                          "optionIconField": "icon",
                        },
                        "style": {
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one select template it should be named: <b>select-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-select compTemplate=“customDirectory/select-template.json”<code>></code><code><</code><code>/</code>cf-select<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the select-template.json </p>
                    <p> If you have more than one select template defined, then one should be name <b>select-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-select compTemplate="customDirectory/myCustomJsonEditor.json"<code>></code><code><</code><code>/</code>cf-select<code>></code>
                    </pre>
                    <p>Where <i>my-custom-select.json</i> is the custom name of the json-editor template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-select has a property model to configure it and a styling model to style it</p> 
                    <p>By default the select is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-select<code>></code><code><</code><code>/</code>cf-select<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-select compTemplate="mySelectTemplate"<code>></code><code><</code><code>/</code>cf-select<code>></code>
                    </pre>
                    <p>2- Pass a property input model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-select [properties]="mySelectProperties"<code>></code><code><</code><code>/</code>cf-select<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the select 
                    <pre>
                    <code><</code>cf-select [display]="true" <code>></code><code><</code><code>/</code>cf-select<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>`
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-select [properties]="mySelectProperties"<code>></code><code><</code><code>/</code>cf-select<code>></code>
                  </pre>
                  <pre>
                    <code>
                      {
                        // <b>Core Properties</b>
                        id: string,                      // Instance ID of the component
                        enabledI18N: boolean,            // Enables component internationalization
                        draggable: boolean,              // Enables component drag and drop
                        notification: NotificationModel, // Notification property object
                        compTemplate: string,            // Template name
                        display: boolean,                // true or false Default: true
                        disable: boolean,                // true or false Default: false
                        tooltip: any,                    // Tooltip on hover of the component
                        // <b>Select Properties</b>
                        placeholder: string,             // Placeholder text
                        staticPlaceholder: string,       // Not changable static placeholder text
                        optionsSource: string            // Options source type
                        options: any[],                  // Array with options
                        selected: any,                   // Select component must have some selected item and it is value of item property described in <b>itemValue</b>
                        showFilter: boolean,             // Show/Hide filter
                        showIcon: boolean,               // Show/Hide icon
                        iconProperty: IconModel,         // Icon
                        iconChangeable: boolean,         // If main icon can be changed with selected option icon
                        required: boolean,               // Required
                        multiple: boolean,               // Options multipleselection
                        dropdownUnder: boolean,          // If select dropdown must be under it placeholder
                        optionValueField: string,        // Option property name to be used as option value
                        optionLabelField: string,        // Option property name to be used as select text when option is selected and as option text if item property is not specified
                        optionItemField: string,         // Option property name to be used as option item
                        optionIconField: string,         // Option property name to be used as option icon
                      }
                    </code>
                  </pre>
                  <p>Below is the SelectOptionModel</p>
                  <pre>
                    <code>
                      {
                        option: any,                     // Option object        
                        value: any,                      // Option value       
                        optionValueField: string,        // Option property name to be used as option value                     
                        label: any,                      // Option label       
                        optionLabelField: string,        // Option property name to be used as select text when option is selected and as option text if item property is not specified                     
                        item: any,                       // Option item      
                        optionItemField: string,         // Option property name to be used as option item                    
                        icon: IconModel,                 // Option icon            
                        optionIconField: string,         // Option property name to be used as option icon                    
                      }
                    </code>
                  </pre>
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-select [styling]="mySelectStyling"<code>></code><code><</code><code>/</code>cf-select<code>></code>
                  </pre>
                  <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn
                      
                    <b>for cf-select:</b>
                    <code>
                    {
                      //Container surrounding the Select
                      container: { dynamicClass, class },

                      //md-select styling
                      select: { dynamicClass, class, or
                      },

                      //filter styling
                      filter: { dynamicClass, class },

                      //options styling
                      options: { dynamicClass, class },

                      //staticPlaceholder styling
                      staticPlaceholder: { dynamicClass, class },

                      //dropdownPanel styling
                      dropdownPanel: { dynamicClass, class },
                    }
                    </code>
                    <b>for cf-select-option:</b>
                    <code>
                    {
                      // option icon styling
                      icon: IconStylingModel,

                      // option label styling
                      label: StylingModel,

                      // option item styling
                      item: StylingModel,
                    }
                    </code>
                  </pre>`
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the select, you have to set the <i>themeColor</i> property in the <i>styling.select</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Checkbox':
            this.componentData = {
              componentName: 'CheckboxComponent',
              description: `
                <p>The <b>cf-checkbox</b> is build on top of the <a target="_blank" class='links' href='https://material.angular.io/components/checkbox/overview'>MD Checkbox</a> and extends it as following:</p>
                <ul>
                  <li>A checkbox which may be checked or not</li>
                  <li>When in a group, the maximum and minimum number of checkboxes may be specified</li>
                  <li>A text label or any HTML may be connected to the checkbox and clicked to select it</li>
                  <li>Output of the group is the items selected</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'checkbox-1',
              files:'selectable',
              demos:[
                {
                  title:"Basic Usage",
                  component: CfDemoCheckbox1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Checkbox Styling",
                  component: CfDemoCheckbox2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Checkbox Group",
                  component: CfDemoCheckbox3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Customize Styling",
                  component: CfDemoCheckbox4,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Checkbox Template",
                  component: CfDemoCheckbox5,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-checkbox by default is set to the <i>default template</i> under templates/default/checkbox-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          display: true,
                          disable: false,
                          value: "checkbox",
                          item: "Default Checkbox",
                          checked: false,
                          itemPosition: "after"
                        },
                        styling: {
                          checkbox: {
                            themeColor: "primary"
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one checkbox template it should be named: <b>checkbox-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-checkbox compTemplate=“customDirectory/checkbox-template.json”<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the checkbox-template.json </p>
                    <p> If you have more than one checkbox template defined, then one should be name <b>checkbox-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-checkbox compTemplate="customDirectory/my-custom-checkbox.json"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                    </pre>
                    <p>Where <i>my-custom-checkbox.json</i> is the custom name of the checkbox template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs: [
                {
                  title:"Usage",
                  description:`
                    <p>The cf-checkbox has a property model to configure it and a styling model to style it</p> 
                    <p>By default the checkbox is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-checkbox<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-checkbox compTemplate="myCheckboxTemplate"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                    </pre>
                    <p>2- Pass a property selectable model object where any attribute defined in the model will override the default 
                    <pre>
                    <code><</code>cf-checkbox [properties]="myCheckboxProperties"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the checkbox 
                    <pre>
                    <code><</code>cf-checkbox itemPosition="before" [(checked)]="true" disable="true" <code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>`
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-checkbox [properties]="myCheckboxProperties"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                  </pre>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                      // Instance ID of the component
                      enabledI18N: boolean,            // Enables component internationalization
                      draggable: boolean,              // Enables component drag and drop
                      notification: NotificationModel, // Notification property object
                      compTemplate: string,            // Template name
                      display: boolean,                // true or false Default: true
                      disable: boolean,                // true or false Default: false
                      tooltip: any,                    // Tooltip on hover of the component
                      // <b>Checkbox Properties</b>
                      value: string,                   // Default: '', Value emitted on click
                      item: any,                       // Default: 'Checkbox', An item displayed alongside the control. Usually a string or HTML template.
                      checked: boolean,                // Default: false
                      itemPosition: string             // Default: 'after', The location of the item relative to the control: 'before' or 'after'
                    }
                    </code>
                    </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-checkbox [styling]="myCheckboxStyling"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                  </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn

                    <code>
                    {
                      //Container surrounding the Checkbox
                      container: {
                        dynamicClass,
                        class
                      },

                      //md-checkbox styling
                      checkbox: {
                        dynamicClass,
                        class,
                        themeColor
                      }
                    }
                    </code>
                    </pre>`
                    
                },
                {
                  title:"Template Item",
                  description:`
                  <p>The item along side the control of the checkbox is not limited to a simple string.</p>
                  <p>The user can pass any html template as following:</p>
                  <pre>
                      <code><</code>cf-checkbox itemPosition="after"<code>></code>
                        <code><</code>template<code>></code>
                          <code><</code>cf-image [url]="...jpg"<code>></code><code><</code><code>/</code>cf-image<code>></code>
                        <code><</code><code>/</code>template<code>></code>
                      <code><</code><code>/</code>cf-checkbox<code>></code>
                  </pre>
                  `
                },
                {
                  title:"Grouping",
                  description:`
                  <p>The checkbox component adopts the cf grouping property where the user can make his checkboxes follow some rules such as max and min selected by surrounding them with a cf-group component and pass the required rules to it</p>
                  <p>The user can register to the "onSelect" event emiiter on the group to get the index of the selected checkboxes dynamically.</p>
                  <p>Example using the grouping property:</p>
                  <pre>
                      <code><</code>cf-group minSelected="1" maxSelected="2"<code>></code>
                        <code><</code>cf-checkbox [item]="item1"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                        <code><</code>cf-checkbox [item]="item2"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                        <code><</code>cf-checkbox [item]="item3"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                      <code><</code><code>/</code>cf-group<code>></code>
                  </pre>
                  <p>Or using *ngFor as following:</p>
                  <pre>
                      <code><</code>cf-group minSelected="1" maxSelected="2"<code>></code>
                        <code><</code>cf-checkbox *ngFor="let item of items" [item]="item"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                      <code><</code><code>/</code>cf-group<code>></code>
                  </pre>
                  `
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the checkbox, you have to set the <i>themeColor</i> property in the <i>styling.checkbox</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Radio':
            this.componentData = {
              componentName: 'SelectableModel',
              description: `
                <p>The <b>cf-radio</b> is build on top of the <a target="_blank" class='links' href='https://material.angular.io/components/radio/overview'>MD Radio</a></p>
                <ul>
                  <li>By convention, in a Group of radio buttons exactly one must be selected and it can be used as a stand alone component</li>
                  <li>A text label or any HTML may be connected to the radio button and clicked to select it</li>
                  <li>Output of the group is the items selected</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'radio-1',
              files:'selectable',
              demos:[
                {
                  title:"Basic Usage",
                  component: CfDemoRadio1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Radio Styling",
                  component: CfDemoRadio2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Radio Group",
                  component: CfDemoRadio3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Checking all radio states",
                  component: CfDemoRadio4,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "Radio Template",
                  component: CfDemoRadio5,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-radio by default is set to the <i>default template</i> under templates/default/radio-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          display: true,
                          disable: false,
                          value: "radio",
                          item: "Radio Button",
                          checked: false,
                          itemPosition: "after"
                        },
                        styling: {
                          radio: {
                            checkbox: {
                              themeColor: "primary"
                            }
                          }
                        }  
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one radio template it should be named: <b>radio-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-radio compTemplate=“customDirectory/radio-template.json”<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the radio-template.json </p>
                    <p> If you have more than one radio template defined, then one should be name <b>radio-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-radio compTemplate="customDirectory/my-custom-radio.json"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                    </pre>
                    <p>Where <i>my-custom-radio.json</i> is the custom name of the radio template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs: [
                {
                  title:"Usage",
                  description:`
                    <p>The cf-radio has a property model to configure it and a styling model to style it</p> 
                    <p>By default the radio is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-radio<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-radio compTemplate="myRadioTemplate"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                    </pre>
                    <p>2- Pass a property selectable model object where any attribute defined in the model will override the default 
                    <pre>
                    <code><</code>cf-radio [properties]="myRadioProperties"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the radio 
                    <pre>
                    <code><</code>cf-radio itemPosition="before" [(checked)]="true" disable="true" <code>></code><code><</code><code>/</code>cf-radio<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>`
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-radio [properties]="myRadioProperties"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                  </pre>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                      // Instance ID of the component
                      enabledI18N: boolean,            // Enables component internationalization
                      draggable: boolean,              // Enables component drag and drop
                      notification: NotificationModel, // Notification property object
                      compTemplate: string,            // Template name
                      display: boolean,                // true or false Default: true
                      disable: boolean,                // true or false Default: false
                      tooltip: any,                    // Tooltip on hover of the component
                      // <b>Radio Properties</b>
                      value: string,                   // Default: '', Value emitted on click
                      item: any,                       // Default: 'Radio', An item displayed alongside the control. Usually a string or HTML template.
                      checked: boolean,                // Default: false
                      itemPosition: string             // Default: 'after', The location of the item relative to the control: 'before' or 'after'
                    }
                    </code>
                    </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-radio [styling]="myRadioStyling"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                  </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn

                    <code>
                    {
                      //Container surrounding the Radio
                      container: {
                        dynamicClass,
                        class
                      },

                      //md-radio styling
                      radio: {
                        dynamicClass,
                        class,
                        themeColor
                      }
                    }
                    </code>
                    </pre>`
                    
                },
                {
                  title:"Template Item",
                  description:`
                  <p>The item along side the control of the radio is not limited to a simple string.</p>
                  <p>The user can pass any html template as following:</p>
                  <pre>
                      <code><</code>cf-radio itemPosition="after"<code>></code>
                        <code><</code>template<code>></code>
                          <code><</code>cf-image [url]="...jpg"<code>></code><code><</code><code>/</code>cf-image<code>></code>
                        <code><</code><code>/</code>template<code>></code>
                      <code><</code><code>/</code>cf-radio<code>></code>
                  </pre>
                  `
                },
                {
                  title:"Grouping",
                  description:`
                  <p>The radio component adopts the cf grouping property where the user can make his checkboxes follow some rules such as max and min selected by surrounding them with a cf-group component and pass the required rules to it</p>
                  <p>The user can register to the "onSelect" event emiiter on the group to get the index of the selected radio dynamically.</p>
                  <p>Example using the grouping property:</p>
                  <pre>
                      <code><</code>cf-group minSelected="1" maxSelected="2"<code>></code>
                        <code><</code>cf-radio [item]="item1"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                        <code><</code>cf-radio [item]="item2"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                        <code><</code>cf-radio [item]="item3"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                      <code><</code><code>/</code>cf-group<code>></code>
                  </pre>
                  <p>or using *ngFor as following:</p>
                  <pre>
                      <code><</code>cf-group minSelected="1" maxSelected="2"<code>></code>
                        <code><</code>cf-radio *ngFor="let item of items" [item]="item"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                      <code><</code><code>/</code>cf-group<code>></code>
                  </pre>
                  `
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the radio, you have to set the <i>themeColor</i> property in the <i>styling.radio</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Switch':
            this.componentData = {
              componentName: 'SwitchComponent',
              description: `
                <p>The <b>cf-switch</b> A switch that can be toggled on or off</p>
                <ul>
                  <li>When put in a Group, the number of required switches or maximum "on" switches allowed may be specified</li>
                  <li>A text label or any HTML may be connected to the switch and clicked to select it</li>
                  <li>Output of the group is the items selected</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'switch-1',
              files:'selectable',
              demos:[
                {
                  title:"Basic Usage",
                  component: CfDemoSwitch1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Switch Styling",
                  component: CfDemoSwitch2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Switch Group",
                  component: CfDemoSwitch3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Switch Styles",
                  component: CfDemoSwitch4,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "Switch Template",
                  component: CfDemoSwitch5,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-switch by default is set to the <i>default template</i> under templates/default/switch-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          display: true,
                          disable: false,
                          value: "switch",
                          item: "Cf Switch",
                          checked: false,
                          itemPosition: "after"
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one switch template it should be named: <b>switch-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-switch compTemplate=“customDirectory/switch-template.json”<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the switch-template.json </p>
                    <p> If you have more than one switch template defined, then one should be name <b>switch-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-switch compTemplate="customDirectory/my-custom-switch.json"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                    </pre>
                    <p>Where <i>my-custom-switch.json</i> is the custom name of the switch template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs: [
                {
                  title:"Usage",
                  description:`
                    <p>The cf-switch has a property model to configure it and a styling model to style it</p> 
                    <p>By default the switch is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-switch<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-switch compTemplate="mySwitchTemplate"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                    </pre>
                    <p>2- Pass a property selectable model object where any attribute defined in the model will override the default 
                    <pre>
                    <code><</code>cf-switch [properties]="mySwitchProperties"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the switch 
                    <pre>
                    <code><</code>cf-switch itemPosition="before" [(checked)]="true" disable="true" <code>></code><code><</code><code>/</code>cf-switch<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>`
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-switch [properties]="mySwitchProperties"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                  </pre>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                      // Instance ID of the component
                      enabledI18N: boolean,            // Enables component internationalization
                      draggable: boolean,              // Enables component drag and drop
                      notification: NotificationModel, // Notification property object
                      compTemplate: string,            // Template name
                      display: boolean,                // true or false Default: true
                      disable: boolean,                // true or false Default: false
                      tooltip: any,                    // Tooltip on hover of the component
                      // <b>Switch Properties</b>
                      value: string,                   // Default: '', Value emitted on click
                      item: any,                       // Default: 'Switch', An item displayed alongside the control. Usually a string or HTML template.
                      checked: boolean,                // Default: false
                      itemPosition: string             // Default: 'after', The location of the item relative to the control: 'before' or 'after'
                    }
                    </code>
                    </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-switch [styling]="mySwitchStyling"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                  </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn

                    <code>
                    {
                      //Container surrounding the Switch
                      container: {
                        dynamicClass,
                        class
                      },

                      //md-switch styling
                      switch: {
                        dynamicClass,
                        class,
                        themeColor
                      }
                    }
                    </code>
                    </pre>`
                    
                },
                {
                  title:"Template Item",
                  description:`
                  <p>The item along side the control of the switch is not limited to a simple string.</p>
                  <p>The user can pass any html template as following:</p>
                  <pre>
                      <code><</code>cf-switch itemPosition="after"<code>></code>
                        <code><</code>template<code>></code>
                          <code><</code>cf-image [url]="...jpg"<code>></code><code><</code><code>/</code>cf-image<code>></code>
                        <code><</code><code>/</code>template<code>></code>
                      <code><</code><code>/</code>cf-switch<code>></code>
                  </pre>
                  `
                },
                {
                  title:"Grouping",
                  description:`
                  <p>The switch component adopts the cf grouping property where the user can make his checkboxes follow some rules such as max and min selected by surrounding them with a cf-group component and pass the required rules to it</p>
                  <p>The user can register to the "onSelect" event emiiter on the group to get the index of the selected switch dynamically.</p>
                  <p>Example using the grouping property:</p>
                  <pre>
                      <code><</code>cf-group minSelected="1" maxSelected="2"<code>></code>
                        <code><</code>cf-switch [item]="item1"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                        <code><</code>cf-switch [item]="item2"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                        <code><</code>cf-switch [item]="item3"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                      <code><</code><code>/</code>cf-group<code>></code>
                  </pre>
                  <p>or using *ngFor as following:</p>
                  <pre>
                      <code><</code>cf-group minSelected="1" maxSelected="2"<code>></code>
                        <code><</code>cf-switch *ngFor="let item of items" [item]="item"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                      <code><</code><code>/</code>cf-group<code>></code>
                  </pre>
                  `
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the switch, you have to set the <i>themeColor</i> property in the <i>styling.switch</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Datatable':
            this.componentData = {
              componentName: 'DatatableComponent',
              description:`
                <p>The <b>cf-datatable</b> is built using <a class="links" href="https://github.com/swimlane/ngx-datatable" target="_blank"><b>ngx-datatable</b></a> library, <b>cf-icon</b> and <b>cf-input</b> components.</p>
                <p>Datatable systems:</p>
                <ol>
                  <li>Columns definition and their templates</li>
                  <li>Row details definition with their templates are working based on Expandable system</b></li>
                  <li>Datatable sub-components:
                    <ul>
                      <li>cf-datatable-header</li>
                      <li>cf-datatable-footer</li>
                      <li>cf-datatable-filter (can be used inside header or footer tags and mixed with your custom html)</li>
                      <li>cf-datatable-pager (can be used inside header or footer tags and mixed with your custom html)</li>
                      <li>cf-datatable-rows-expander (can be used inside header or footer tags and mixed with your custom html)</li>
                    </ul>
                  </li>
                  <li>Rows pagination system</li>
                  <li>Rows filtering system</li>
                  <li>Rows selecting system</li>
                  <li>Rows sorting system</li>
                </ol>
                <h4>1. Columns definition and their templates</h4>
                <p>Each column can be represented inside <b>cf-datatable</b> html tags in the following way (here are used all column properties to describe their functionality):</p>
                <pre>
                  <code><</code>cf-datatable-column 
                    name="Column Name"
                    sortBy="somePropertyNameOfRow"
                    headerId="someHeaderId" 
                    contentId="someContentId" 
                    width="25%"
                    headerAlignment="center"
                    cellAlignment="end"<code>></code>

                    <code><</code>ng-template #someHeaderId let-row="cfRow"<code>></code>
                      <code><</code>span<code>></code>{{row.name}}<code><</code><code>/</code>span<code>></code>
                    <code><</code><code>/</code>ng-template<code>></code>

                    <code><</code>ng-template #someContentId let-row="cfRow"<code>></code>
                      <code><</code>span<code>></code>{{row.description}}<code><</code><code>/</code>span<code>></code>
                    <code><</code><code>/</code>ng-template<code>></code>

                  <code><</code>cf-datatable-column<code>></code>
                </pre>
                <p>where:</p>
                <ul> 
                  <li>column received name <b>Column Name</b>;</li> 
                  <li>column received sortBy <b>somePropertyNameOfRow</b>, which means that this property exists in rows objects and by this property rows will be sorted;</li> 
                  <li>column received headerId <b>someHeaderId</b>, which means that ng-template tag with such mark will be as html content for the column header cell;</li> 
                  <li>column received contentId <b>someContentId</b>, which means that another ng-template tag with such mark will be as html content for the column rows cells;</li> 
                  <li>column received width <b>25%</b> of row width. <b>IMPORTANT:</b> column width is working only when datatable property <b>columnMode = 'standard'.</b></li>
                  <li>column received headerAlignment <b>center</b>, which means to align it content by center. Also can be: start(default) or end.</li>
                  <li>column received cellAlignment <b>end</b>, which means to align it content to the end. Also can be: start(default) or center.</li>
                  <li>let-<b>row</b>="<b>cfRow</b>" - is the declaration of variable <b>row</b> with value <b>cfRow</b>, which is the json object of that row;</li>
                  <li>everything inside <b>ng-template</b> tags is this column cells html representation.</li>
                </ul> 
                <h4>2. Row details and Expandable system</h4>
                <p>By default all rows are not expanded and default height <b>rowHeight</b>(for not expanded state) is <b>50</b>(means pixels) and can be also <b>auto</b>, but must be set as number for correct work together with expandable system.</p>
                <p>To use rows details templating with expandable system it is needed to do such steps:</p>
                <ol>
                  <li>Set property <b>expandable</b> to true.</li>
                  <li>Next it is required to set <b>detailsHeight</b>, which is <b>130</b>(means pixels) by default and can be changed if needed.</li>
                  <li>Next is to create one general template for row details inside which you can use <b>*ngIf</b> syntax to specify how to display each row details based on some row property value or properties values. Example of row details template:
                    <pre>
                      <code><</code>ng-template <b>#detailsTemplate</b> let-<b>detailsData</b>="<b>cfRow</b>"<code>></code>

                        <code><</code>span<code>></code>{{detailsData.name}}<code><</code><code>/</code>span<code>></code>
                      
                      <code><</code><code>/</code>ng-template<code>></code>
                    </pre>
                    <p>where:</p>
                    <ul>
                      <li>let-<b>detailsData</b>="<b>cfRow</b>" - is the declaration of variable <b>detailsData</b> with value <b>cfRow</b>, which is the json object of that row;</li> 
                      <li><b>NOTE:</b> ng-template must have required attribute <b>#detailsTemplate</b></li>
                      <li>everything inside <b>ng-template</b> tags is this row details html representation.</li>
                    </ul>
                  </li>
                </ol>
                <p>As a result each row will have arrow icon on the row start. You can customize those icons by using <b>expandIcon / collapseIcon</b> of datatable properties. You can customize those icons by using <b>expandAllIcon / collapseAllIcon</b> of <b>cf-datatable-rows-expander</b> properties. 
                <p>Another special property of datatable is <b>rowExpand</b>, which can be <b>single</b> or <b>multiple</b>(default) and means how many rows can be expanded at the same time.</p>
                <h4>3. Pagination system</h4>
                <p>Datatable can be with or without rows pagination by specifying <b>limit</b> property. It can be any number which means rows per page or <b>undefined</b> to work without paging. Pagination sub-component can be simply used inside header/footer html tags just like this: <b><code><</code>cf-datatable-pager<code>></code><code><</code><code>/</code>cf-datatable-pager<code>></code></b>. It didn't expose any public inputs/outputs.</p>
                <h4>4. Filtering system</h4>
                <p>To use filtering it is needed to set property <b>filterable</b> to true and then on top of table it will be displayed filtering input, which is <b>cf-input</b> component so you can specify it as usual (look to cf-input documentation) by passing object into <b>filterProperty</b> property. With typing text inside that input - rows will be filtered by all their properties values and table will start display results from first page. Filtering sub-component can be simply used inside header/footer html tags just like this: <b><code><</code>cf-datatable-filter<code>></code><code><</code><code>/</code>cf-datatable-filter<code>></code></b>. It is based on <b>cf-input</b> component, so you can specify it by customize <b>inputProperty</b> of filter properties.</p>
                <h4>5. Selecting system</h4>
                <p>To use selecting system it is needed to set property <b>selectable</b> to true. In that case it will be displayed checkboxes on each row start and one general checkbox on table header for select/unselect all rows. Also if it is needed to have some selected rows by default, then you must put those rows data objects inside <b>selected</b> array of cf-datatable. Example:<p>
                <pre>
                  {
                    rows: this.rowsData,
                    selectable: true,
                    selected: [ this.rowsData[0], this.rowsData[5], this.rowsData[17] ]
                  }
                </pre>
                <p>where selected by default will be rows with indexes: 0, 5, 17.</p>
                <h4>6. Sorting system</h4>
                <p>Sorting system is always enabled and is using multisorting so rows can be sorted by many columns. Sorting system requries to set property <b>sortBy</b> for each column. It is row property. If <b>sortBy</b> is not provided, as sorting property will be used camelcased <b>name</b> value. By click on each column header - column can be in three sorting states:<p>
                <ul>
                  <li><b>asc</b> - rows are sorted in ascending order (and column header will display arrow top icon)</li>
                  <li><b>desc</b> - rows are sorted in descending order (and column header will display arrow down icon)</li>
                  <li><b>undefined</b>(default) - rows are not sorted (and column header will be without icon)</li>
                </ul>
                <p>If it is needed to be datatable sorted by default, then you can specify default sorting with property <b>sorted</b> in this way:</p>
                <pre>
                  {
                    sorted: [ { prop: 'name', dir: 'desc' } ],
                  }
                </pre>
                <p>where default sorting will be by rows property <b>name</b>(so column header in that case must also have same name) and in descending direction. As you can see that property sorted is an array, so you can set there many sorting objects.</p>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'datatable-1',
              demos:[
                {
                  title: 'Basic usage',
                  component: CfDemoDatatable1,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },{
                  title: 'Datatable without pagination and with expanded rows details',
                  component: CfDemoDatatable2,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: 'All datatable systems usage',
                  component: CfDemoDatatable3,                  
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: 'Datatable with sub-components',
                  component: CfDemoDatatable4,                  
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: 'Datatable Template',
                  component: CfDemoDatatable5,                  
                  inputs: {
                    themeName: this.configuration.theme
                  },
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-datatable by default is set to the <i>default template</i></p>
                    <pre>{
                      "property": {
                        "showTableFooter": true,
                        "showTableCount": true,
                        "showTablePager": true,
                        "headerHeight": 42,
                        "footerHeight": 42,
                        "rows": [],
                        "rowHeight": 50,
                        "columnMode": "force",
                        "limit": 3,
                        "expandable": false,
                        "rowExpand": "multiple",
                        "detailsHeight": 130,
                        "expandIcon": { "name": "keyboard_arrow_right", "size": "16px" },
                        "collapseIcon": { "name": "keyboard_arrow_down", "size": "16px" },
                        "selectable": false,
                        "sorted": [],
                        "selected": []
                      },
                      "style": {         
                          "expandIcon": { "icon": { "themeColor": "primary" } },
                          "collapseIcon": { "icon": { "themeColor": "primary" } }
                      }
                    }</pre>
                    <p>In your custom template directory, if you have one datatable template it should be named: <b>datatable-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-datatable compTemplate=“customDirectory/datatable-template.json”<code>></code><code><</code><code>/</code>cf-datatable<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the datatable-template.json </p>
                    <p> If you have more than one datatable template defined, then one should be name <b>datatable-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-datatable compTemplate="customDirectory/my-custom-datatable.json"<code>></code><code><</code><code>/</code>cf-datatable<code>></code>
                    </pre>
                    <p>Where <i>my-custom-datatable.json</i> is the custom name of the area-chart template file found under your custom directory</p>
                  `
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-datatable has a property model to configure it and a styling model to style it</p> 
                    <p>By default the datatable is packaged with default styling and properties so the component can simply be used in the following way with rows array and it is requred to specify each column name/template as described above: 
                    <pre>
                        <code><</code>cf-datatable [rows]="rows"<code>></code><code><</code><code>/</code>cf-datatable<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-datatable compTemplate="myDatatableTemplate"<code>></code><code><</code><code>/</code>cf-datatable<code>></code>
                    </pre>
                    <p>2- Pass a property datatable model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-datatable [properties]="myDatatableProperties"<code>></code><code><</code><code>/</code>cf-datatable<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the datatable 
                    <pre>
                    <code><</code>cf-datatable [rows]="rows"<code>></code><code><</code><code>/</code>cf-datatable<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                    ` 
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-datatable [properties]="myDatatableProperties"<code>></code><code><</code><code>/</code>cf-datatable<code>></code>
                    </pre>
                    <pre>
                      {
                       // <b>Core Properties</b>
                       id: string,                        // Instance ID of the component
                       enabledI18N: boolean,              // Enables component internationalization
                       draggable: boolean,                // Enables component drag and drop
                       notification: NotificationModel,   // Notification property object
                       compTemplate: string,              // Template name
                       display: boolean,                  // true or false Default: true
                       disable: boolean,                  // true or false Default: false
                       tooltip: any,                      // Tooltip on hover of the component
                       // <b>Datatable Properties</b>                
                        showTableFooter: boolean,         // If to show ngx-datatable footer
                        showTableCount: boolean,          // If to show ngx-datatable footer count text
                        showTablePager: boolean,          // If to show ngx-datatable footer pager
                        headerHeight: any,                // The height of the header in pixels. Type any. Optional. Pass a false for no header. Default: 42.
                        footerHeight: any,                // The height of the footer in pixels. Type any. Optional. Pass a false for no footer. Default: 42.
                        rows: any[],                      // It is array with rows json objects. Optional.
                        rowHeight: any,                   // It is height of each row. Can be numeric (nember will be transformed to pixels) or 'auto'. Optional. Default: 50.
                        columnMode: string,               // The mode which the columns are distributed across the table. Type string. Optional. Can be: flex, force, standard. Default: force.
                        limit: any,                       // It is rows quontity per page. Type number. Optional. Default: undefined.
                        expandable: boolean,              // It is boolean value to use or not row details section. Optional. Default: false.
                        rowExpand: string,                // Means how rows can be expanded at one time. Optional. Default: 'multiple'. Can be: 'multiple' or 'single'.
                        detailsHeight: number,            // It is height of row in pixels. Type number. Optional. Default: 130.
                        expandIcon: IconModel,            // CfIcon component for the row expanding icon. Optional.
                        collapseIcon: IconModel,          // CfIcon component for the row collapsing icon. Optional.
                        selectable: boolean,              // It is boolean value to show or not rows section checkboxes. Optional. Default: false.
                        sorted: any[],                    // Array with sorting objects. Optional. Default: []. Rows can sorted by multipe columns. Each sorting object is a json object with two properties: <b>prop</b>(property name by which to sort rows) and <b>dir</b>(sort direction. Can be: <b>asc</b> or <b>desc</b>).
                        selected: any[],                  // Array for selected items. Optional.
                      }
                    </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-datatable [styling]="myDatatableStyling"<code>></code><code><</code><code>/</code>cf-datatable<code>></code>
                    </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn
                     {
                      // Container surrounding the all datatable elelemnts
                      container: {
                        dynamicClass,
                        class
                      },
                      // Header
                      header: {
                        dynamicClass,
                        class
                      },
                      // Ngx-datatable elelemnt
                      table: {
                        dynamicClass,
                        class
                      },
                      // Each cell container
                      tableCell: {
                        dynamicClass,
                        class
                      },
                      // Each row details section
                      tableRowDetails: {
                        dynamicClass,
                        class
                      }
                      // Row expanding icon styling
                      expandIcon: IconStylingModel, //refer to icon component
                      // Row collapsing icon styling
                      collapseIcon: IconStylingModel, //refer to icon component
                      // Footer
                      footer: {
                        dynamicClass,
                        class
                      },
                    }
                    </pre>`
                }
              ]
            };
          break;
          case 'List':
            this.componentData = {
              componentName: 'ListComponent',
              description:`
                <p>The <b>cf-list</b> allows you to create a list using statically or dynamically defined items (or both).</p> 
                <p>Each <em>cf-list</em> contains a number of <em>cf-item</em>s, which will be presented with several options that the user can pass in.</p>
                <ul>
                  <li>Items can be given checkboxes and the list will track items checked</li>
                  <li>Each item can be given a "details" section that is only displayed when expanded</li>
                  <li>List items can include any HTML you like</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'list-1',
              demos:[
                {
                  title:"Basic Usage",
                  component: CfDemoList1,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                // {
                //   title:"List Styling",
                //   component: CfDemoList2,
                //   inputs: {
                //     themeName: this.configuration.theme
                //   }
                // },
                {
                  title: "List Template",
                  component: CfDemoList3,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-list and cf-item by default is set to the <i>default template</i> under templates/default/list-template.json and templates/default/item-template.json respectively</p>
                    <pre>
                      <code class="json">
                        //<b>List</b>
                        properties: {
                          title: "My List"
                        }
                        //<b>Item</b>
                        styling: {
                          item: {
                            class:"item"
                          },
                          selectedItem: {
                            class: "itemSelected"
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one list/item template it should be named: <b>list-template.json</b> and <b>item-template.json</b> <p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-list compTemplate=“customDirectory/item-template.json”<code>></code>
                        <code><</code>cf-item compTemplate=“customDirectory/item-template.json”<code>></code>
                        <code><</code><code>/</code>cf-item<code>></code>
                      <code><</code><code>/</code>cf-list<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the list-template.json and item-template.json </p>
                    <p> If you have more than one list/item template defined, then one should be name <b>list-template.json</b>/<b>item-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-list compTemplate="customDirectory/my-custom-list.json"<code>></code>
                        <code><</code>cf-item compTemplate="customDirectory/my-custom-item.json"<code>></code>
                        <code><</code><code>/</code>cf-item<code>></code>
                      <code><</code><code>/</code>cf-list<code>></code>
                    </pre>
                    <p>Where <i>my-custom-list.json</i> and <i>my-custom-item.json</i> are the custom name of the list/item template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title:"Dynamic selectable List",
                  component: CfDemoList4,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title:"\"My Dashboard\" example",
                  component: CfDemoList5,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title:"Dynamic List with using Toasts, Dialogs, Sidenavs and Form validation",
                  component: CfDemoList6,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>For the list to show, the user must provide at least one <b>cf-item</b> inside the list in the following manner:</p>
                    <pre>
                      <code><</code>cf-list<code>></code>
                        <code><</code>cf-item<code>></code><b>ANY HTML CONTENT</b><code><</code><code>/</code>cf-item<code>></code>
                      <code><</code><code>/</code>cf-list<code>></code>
                    </pre>
                    <p>Under cf-item tag a user can provide any html content<p>
                    <p>The cf-list has a property model to configure it and a styling model to style it</p> 
                    <p>By default the list is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                      <code><</code>cf-list<code>></code>
                        <code><</code>cf-item<code>></code>Hello World<code><</code><code>/</code>cf-item<code>></code>
                      <code><</code><code>/</code>cf-list<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-list compTemplate="myListTemplate"<code>></code>
                        <code><</code>cf-item<code>></code>Hello World<code><</code><code>/</code>cf-item<code>></code>
                      <code><</code><code>/</code>cf-list<code>></code>
                    </pre>
                    <p>2- Pass a property list model object where any attributes defined in the model will override the default 
                    <pre>
                      <code><</code>cf-list [properties]="myListProperties"<code>></code>
                        <code><</code>cf-item<code>></code>Hello World<code><</code><code>/</code>cf-item<code>></code>
                      <code><</code><code>/</code>cf-list<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the list 
                    <pre>
                      <code><</code>cf-list display="false"<code>></code>
                        <code><</code>cf-item<code>></code>Hello World<code><</code><code>/</code>cf-item<code>></code>
                      <code><</code><code>/</code>cf-list<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-list [properties]="myListProperties"<code>></code><code><</code><code>/</code>cf-list<code>></code>
                    </pre>
                    <h5>ListModel</h5>
                    <pre>
                      <code>
                      {
                       // <b>Core Properties</b>
                       id: string,                        // Instance ID of the component
                       enabledI18N: boolean,              // Enables component internationalization
                       draggable: boolean,                // Enables component drag and drop
                       notification: NotificationModel,   // Notification property object
                       compTemplate: string,              // Template name
                       display: boolean,                  // true or false Default: true
                       disable: boolean,                  // true or false Default: false
                       tooltip: any,                      // Tooltip on hover of the component
                       // <b>List Properties</b>     
                       title: string,                     // The title of the list
                      }
                      </code>
                    </pre>  
                    <h5>ItemModel</h5>
                    <pre>
                      <code>
                      {
                       // <b>Core Properties</b>
                       id: string,                        // Instance ID of the component
                       enabledI18N: boolean,              // Enables component internationalization
                       draggable: boolean,                // Enables component drag and drop
                       notification: NotificationModel,   // Notification property object
                       compTemplate: string,              // Template name
                       display: boolean,                  // true or false Default: true
                       disable: boolean,                  // true or false Default: false
                       tooltip: any,                      // Tooltip on hover of the component
                       // <b>List Properties</b>     
                       details: boolean,                  // Default: false
                       selectable: boolean,               // Default: false
                       withCheckbox: boolean              // Default: false
                      }
                      </code>
                    </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-list [styling]="myListStyling"<code>></code>
                        <code><</code>cf-item [styling]="myItemStyling"<code>></code>Hello World<code><</code><code>/</code>cf-item<code>></code>
                      <code><</code><code>/</code>cf-list<code>></code>
                    </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn
                      <h5>ListStylingModel</h5>
                      <code>
                        {
                          //Container Surrounding the List
                          container: {
                            dynamicClass,
                            class
                          },

                          //List title styling
                          title: {
                            dynamicClass,
                            class,
                            themeColor
                          }
                        }
                      </code>
                      <h5>ItemStylingModel</h5>
                      <code>
                        {
                          //Container styling surroung the item
                          container: {
                            dynamicClass,
                            class
                          }

                          //Item styling
                          item: {
                            dynamicClass,
                            class,
                            themeColor
                          },

                          //Selected item styling
                          selectedItem: {
                            dynamicClass,
                            class,
                            themeColor
                          }
                        }
                      </code>
                    </pre>`
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the list, you have to set the <i>themeColor</i> property in the <i>styling.icon</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          //LATER
          case 'Forms':
            this.componentData = {
              componentName: 'FormComponent',
              description: 'This example shows the form generator',
              fileName: 'form-1',
              demos:[
                {
                  component: CfDemoForm1,
                  inputs: {
                  },
                }
              ]
            };
          break;
          case 'Rating':
            this.componentData = {
              componentName: 'RatingComponent',
              description:`
                <p>The <b>cf-rating</b> is a numbered rating, displayed using highlighted icons. Its main features include:</p>
                <ul>
                  <li>Custom icons--hearts, stars, thumbs-ups, or anything else</li>
                  <li>Display icons vertically or horizontally and count from left, right, top, or bottom</li>
                  <li>No limit to the number of icons</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'rating-1',
              demos:[
                {
                  title: "Basic ratings",
                  component: CfDemoRating1,
                  inputs: {
                  },
                },
                {
                  title: "Rating with custom styling",
                  component: CfDemoRating2,
                  inputs: {
                    },
                },
                {
                  title: "Rating with possible additional input",
                  component: CfDemoRating3,
                  inputs: {}
                },
                {
                  title: "Rating Template",
                  component: CfDemoRating4,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-rating by default is set to the <i>default template</i> under templates/default/rating-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          label: "Rating label",
                          icon: "stars",
                          value: 1,
                          max: 5,
                          countFromEnd: false,
                          iconsVertical: false,
                          disabled: false
                        },
                        styling: {
                          container: {
                            class: "cf-rating-container"
                          },
                          label: {
                            class: "cf-rating-label"
                          },
                          item: {
                            class: "cf-rating-item-icon"
                          },
                          iconSize": "30px",
                          filledColor: "lightseagreen",
                          emptyColor: "darkseagreen"
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one rating template it should be named: <b>rating-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-rating compTemplate=“customDirectory/rating-template.json”<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the rating-template.json </p>
                    <p> If you have more than one rating template defined, then one should be name <b>rating-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-rating compTemplate="customDirectory/my-custom-rating.json"<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                    </pre>
                    <p>Where <i>my-custom-rating.json</i> is the custom name of the rating template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-rating has a property model to configure it and a styling model to style it</p> 
                    <p>By default the rating is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-rating<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an rating to the component: 
                    <pre>
                      <code><</code>cf-rating compTemplate="myRatingTemplate"<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                    </pre>
                    <p>2- Pass a property rating model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-rating [properties]="myRatingProperties"<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate ratings to the rating 
                    <pre>
                    <code><</code>cf-rating display="true"<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-rating [properties]="myRatingProperties"<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                  </pre>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                        // Instance ID of the component
                      enabledI18N: boolean,              // Enables component internationalization
                      draggable: boolean,                // Enables component drag and drop
                      notification: NotificationModel,   // Notification property object
                      compTemplate: string,              // Template name
                      display: boolean,                  // true or false Default: true
                      disable: boolean,                  // true or false Default: false
                      tooltip: any,                      // Tooltip on hover of the component
                      // <b>Rating Properties</b>     
                      label: string,                     // Text label for the rating
                      icon: string,                      // Name of the md or cf icon to be used
                      value: number,                     // Current number value of the rating
                      max: number,                       // Total number of icons shown, maximum value
                      countFromEnd: boolean,             // Whether to count from the opposite of the usual end
                      iconsVertical: boolean             // Whether to display the icons vertically
                    }
                    </code>
                  </pre>
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-rating [styling]="myRatingStyling"<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                  </pre>
                  <pre>
                    <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                    <i>class</i>: string                                                            // Name of the css class selector
                    <i>themeColor</i>: string                                                       // primary/accent/warn

                    <code>
                        {
                          //Container styling surrounding the rating
                          container: {
                            dynamicClass,
                            class
                          },

                          //Label styling
                          label: {
                            dynamicClass,
                            class,
                            themeColor
                          },

                          //Item styling
                          item: {
                            dynamicClass,
                            class,
                            themeColor
                          },

                          icon: IconStylingModel, // See Icon documentation
                          iconSize: string,       // Valid css size of icon
                          emptyColor: string,     // Valid css color of icon when empty
                          filledColor: string     // Valid css color of icon when filled
                        }
                    </code>
                  </pre>`
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the rating, you have to set the <i>themeColor</i> property in the <i>styling.item</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Tabs':
            this.componentData = {
              componentName: 'TabsComponent',
              description:`
                <p>The <b>cf-tabs</b> is composed of two parts, a <em>cf-tabs</em> element that defines the whole and the <em>cf-tabs-card</em>s that define each tab.</p> 
                <p>Together they provide a convenient way to display information or provide functionality divided in manner of your choosing.</p>
                <ul>
                  <li>The tabs component may number each tab with an icon or a text prefix</li>
                  <li>You may define the header of each tabs card with custom html content</li>
                  <li>You may define the content of each tabs card with custom html</li>
                  <li>You may set header to be vertical and set it position (left or right)</li>
                  <li>You may define horizontal / vertical sizes to tabs 2 main block: header, content</li>
                  <li>Implementing the Template System of this library</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'tabs-1',
              demos:[
                {
                  title: "Basic tabs component",
                  component: CfDemoTabs1,
                  inputs: {
                  },
                },
                {
                  title: "Tabs cards disabling with simple validation",
                  component: CfDemoTabs2,
                  inputs: {
                    },
                  },
                  {
                    title: "Tabs elements custom styles and remote switch of tabs and their height",
                    component: CfDemoTabs3,
                    inputs: {
                    },
                },
                {
                  title: "Dynamic content generated tabs with header position and horizontal sizes",
                  component: CfDemoTabs4,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Tabs Template",
                  component: CfDemoTabs5,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-tabs and cf-tabs-card by default is set to the <i>default template</i> under templates/default/tabs-template.json and templates/default/tabs-card-template.json respectively</p>
                    <pre>
                      <code class="json">
                        //<b>Tabs</b>
                        properties: {
                          showCardNumberAsIcon: true,
                          showCardNumberAsPrefix: false,
                          indexBefore: true,
                          headerVertical: false,
                          headerPosition: 'left',
                          horizontalSizes: '',
                          verticalSizes: ''
                        }
                        //<b>Tab Card</b>
                        properties: {
                          header: { label: "TabCard" },
                          headerId: '',
                          contentId: ''
                        },
                        styling: {
                          header: {
                            container:{
                             class:"cf-tabs-card-header-button"
                            }
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one tabs/tabs-card template it should be named: <b>tabs-template.json</b> and <b>tabs-card-template.json</b> <p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-tabs compTemplate=“customDirectory/tabs-template.json”<code>></code>
                        <code><</code>cf-tabs-card compTemplate=“customDirectory/tabs-card-template.json”<code>></code>
                        <code><</code><code>/</code>cf-tabs-card<code>></code>
                      <code><</code><code>/</code>cf-tabs<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the tabs-template.json and tabs-card-template.json </p>
                    <p> If you have more than one tabs/tabs-card template defined, then one should be name <b>tabs-template.json</b>/<b>tabs-card-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-tabs compTemplate="customDirectory/my-custom-tabs.json"<code>></code>
                        <code><</code>cf-tabs-card compTemplate="customDirectory/my-custom-tabs-card.json"<code>></code>
                        <code><</code><code>/</code>cf-tabs-card<code>></code>
                      <code><</code><code>/</code>cf-tabs<code>></code>
                    </pre>
                    <p>Where <i>my-custom-tabs.json</i> and <i>my-custom-tabs-card.json</i> are the custom name of the tabs/tabs-card template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-tabs and cf-tabs-card have a property model to configure it and a styling model to style it</p> 
                    <p>By default the cf-tabs is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-tabs<code>></code><code><</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-tabs compTemplate="myTabsTemplate"<code>></code><code><</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs<code>></code>
                    </pre>
                    <p>2- Pass a property tabs model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-tabs [properties]="myTabsProperties"<code>></code><code><</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the tabs 
                    <pre>
                    <code><</code>cf-tabs disable="true" <code>></code><code><</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-tabs [properties]="myTabsProperties"<code>></code>
                      <code><</code>cf-tabs-card [properties]="myTabsCardProperties"<code>></code><code><</code><code>/</code>cf-tabs-card<code>></code>
                    <code><</code><code>/</code>cf-tabs<code>></code>
                  </pre>
                  <pre>
                    <h5>TabsModel</h5>
                    <code>
                      { 
                        // <b>Core Properties</b>
                        id: string,                        // Instance ID of the component
                        enabledI18N: boolean,              // Enables component internationalization
                        draggable: boolean,                // Enables component drag and drop
                        notification: NotificationModel,   // Notification property object
                        compTemplate: string,              // Template name
                        display: boolean,                  // true or false Default: true
                        disable: boolean,                  // true or false Default: false
                        tooltip: any,                      // Tooltip on hover of the component
                        // <b>Tabs Properties</b>  
                        showCardNumberAsIcon: boolean,     // Show card number as icon. Default: true
                        showCardNumberAsPrefix: boolean,   // Show card number as prefix. Default: false
                        indexBefore: boolean,              // Show card number before the label. Default: true
                        headerVertical: boolean,           // To make header vertical. Default: false
                        headerPosition: string,            // Position of header vertical. Default: 'left'
                        horizontalSizes: string,           // Css values for tabs grid. Default: ''
                        verticalSizes: string,             // Css values for tabs grid. Default: ''
                      }
                    </code>
                  </pre>
                  <pre>
                    <h5>TabsCardsModel</h5>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                        // Instance ID of the component
                      enabledI18N: boolean,              // Enables component internationalization
                      draggable: boolean,                // Enables component drag and drop
                      notification: NotificationModel,   // Notification property object
                      compTemplate: string,              // Template name
                      display: boolean,                  // true or false Default: true
                      disable: boolean,                  // true or false Default: false
                      tooltip: any,                      // Tooltip on hover of the component
                      // <b>TabsCards Properties</b>  
                      header: ButtonModel,               // ButtonModel object
                      headerId: string,                  // <b>ng-template id (#)</b> inside component tags to be used as header html content
                      contentId: string,                 // <b>ng-template id (#)</b> inside component tags to be used as html for card content
                    }
                    </code>
                  </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-tabs [styling]="myTabsStyling"<code>></code>
                      <code><</code>cf-tabs-card [styling]="myTabsCardStyling"<code>></code><code><</code><code>/</code>cf-tabs-card<code>></code>
                    <code><</code><code>/</code>cf-tabs<code>></code>
                  </pre>
                  <pre>
                    <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                    <i>class</i>: string                                                            // Name of the css class selector
                    <i>themeColor</i>: string                                                       // primary/accent/warn
                    <h5>TabsStylingModel</h5>
                    <code>
                      {
                        //Container styling surrounding the Tabs
                        container: {
                          dynamicClass,
                          class
                        }
                      }
                    </code>
                    <h5>TabsCardStylingModel</h5>
                    <code>
                      {
                        //Container styling surrounding tabs card
                        container: {
                          dynamicClass,
                          class
                        },

                        //icon index styling
                        iconIndex: {
                          dynamicClass,
                          class,
                          themeColor
                        },

                        //prefix index styling
                        prefixIndex: {
                          dynamicClass,
                          class,
                          themeColor
                        },

                        header: ButtonStylingModel // See Button documentation
                      }
                    </code>
                  </pre>
                  `
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the tabs, you have to set the <i>themeColor</i> in the styling model of the card under the property <i>styling.prefixIndex</i> and <i>styling.iconIndex</i>
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Wizard':
            this.componentData = {
              componentName: 'WizardComponent',
              description:`
                <p>The <b>cf-wizard</b> component is composed of two main parts, a <em>cf-wizard</em> element that defines the whole and the <em>cf-wizard-step</em>s that define each step. Also there are four optional sub-componets to help you customize footer:</p>
                <ul>
                  <li>cf-footer (it is parent for three next)
                    <ul>
                      <li>cf-back</li>
                      <li>cf-next</li>
                      <li>cf-finish</li>
                    </ul>
                  </li>
                </ul>
                <p>Together they allow you to guide the user through a series of steps</p>
                <ul>
                  <li>The cf-wizard-step component may number each tab with an icon or a text prefix</li>
                  <li>You may check if a given wizard step is valid</li>
                  <li>You may customize the wizard's buttons with an IconModel</li>
                  <li>You may define the header of each wizard step with custom html content</li>
                  <li>You may define the content of each wizard step with custom html</li>
                  <li>You may set header or footer or both to be vertical and give them positions (left or right)</li>
                  <li>You may customize wizard footer by using <b>cf-footer</b> and inside it mix your custom html with <b>cf-back</b>, <b>cf-next</b>, <b>cf-finish</b></li>
                  <li>You may define horizontal / vertical sizes to wizard 3 main block: header, content, footer</li>
                  <li>Implementing the Template System of this library</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'wizard-1',
              demos:[
                {
                  title: "Basic wizard",
                  component: CfDemoWizard1,
                  inputs: {
                  },
                },
                {
                  title: "Wizard with steps validation and submit action",
                  component: CfDemoWizard2,
                  inputs: {
                  },
                },
                {
                  title: "Wizard elements custom styles and remote switch of steps and their height",
                  component: CfDemoWizard3,
                  inputs: {
                  },
                },
                {
                  title: "Wizard Template",
                  component: CfDemoWizard4,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-wizard and cf-wizard-step by default is set to the <i>default template</i> under templates/default/wizard-template.json and templates/default/wizard-step-template.json respectively</p>
                    <pre>
                      <code class="json">
                        //<b>Wizard</b>
                        properties: {
                          showStepNumberAsIcon: true,
                          showStepNumberAsPrefix: false,
                          indexBefore: true,
                          previousButton: { label: "Back" },
                          nextButton: { label: "Next" },
                          finishButton: { label: "Finish" },
                          headerVertical: false,
                          headerPosition: 'left',
                          headerFullHeight: false,
                          footerVertical: false,
                          footerPosition: 'right',
                          footerFullHeight: false,
                          horizontalSizes: '',
                          verticalSizes: ''
                        }
                        //<b>Wizard Step</b>
                        properties: {
                          header: { label: "Step" },
                          isValid:true,
                          headerId: '',
                          contentId: ''
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one wizard/wizard-step template it should be named: <b>wizard-template.json</b> and <b>wizard-step-template.json</b> <p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-wizard compTemplate=“customDirectory/wizard-template.json”<code>></code>
                        <code><</code>cf-wizard-step compTemplate=“customDirectory/wizard-step-template.json”<code>></code>
                        <code><</code><code>/</code>cf-rating<code>></code>
                      <code><</code><code>/</code>cf-wizard<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the wizard-template.json and wizard-step-template.json </p>
                    <p> If you have more than one wizard/wizard-step template defined, then one should be name <b>wizard-template.json</b>/<b>wizard-step-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-wizard compTemplate="customDirectory/my-custom-wizard.json"<code>></code>
                        <code><</code>cf-wizard-step compTemplate="customDirectory/my-custom-wizard-step.json"<code>></code>
                        <code><</code><code>/</code>cf-cf-wizard-step <code>></code>
                      <code><</code><code>/</code>cf-wizard<code>></code>
                    </pre>
                    <p>Where <i>my-custom-tabs.json</i> and <i>my-custom-wizard-step.json</i> are the custom name of the tabs/wizard-step template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-wizard and cf-wizard-step have a property model to configure it and a styling model to style it</p> 
                    <p>By default the cf-wizard is packaged with default styling and properties so the component can simply be used in the following way : 
                    <pre>
                        <code><</code>cf-wizard<code>></code><code><</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-wizard compTemplate="myWizardTemplate"<code>></code><code><</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                    </pre>
                    <p>2- Pass a property wizard model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-wizard [properties]="myWizardProperties"<code>></code><code><</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the wizard 
                    <pre>
                    <code><</code>cf-wizard [showStepNumberAsIcon]="false"<code>></code><code><</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-wizard [properties]="myWizardProperties"<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                  </pre>
                  <h5>WizardModel</h5>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                        // Instance ID of the component
                      enabledI18N: boolean,              // Enables component internationalization
                      draggable: boolean,                // Enables component drag and drop
                      notification: NotificationModel,   // Notification property object
                      compTemplate: string,              // Template name
                      display: boolean,                  // true or false Default: true
                      disable: boolean,                  // true or false Default: false
                      tooltip: any,                      // Tooltip on hover of the component
                      // <b>Wizard Properties</b>  
                      showStepNumberAsIcon: boolean,     // Show step number as icon. Default: true
                      showStepNumberAsPrefix: boolean,   // Show step number as prefix. Default: false
                      indexBefore: boolean,              // Show step number before the label. Default: true
                      previousButton: ButtonModel,       // ButtonModel
                      nextbutton: ButtonModel,           // ButtonModel
                      finishButton: ButtonModel,         // ButtonModel
                      headerVertical: boolean,           // To make header vertical. Default: false
                      headerPosition: string,            // Position of header vertical. Default: 'left'
                      headerFullHeight: boolean,         // Full height of vertical header. Default: false
                      footerVertical: boolean,           // To make footer vertical. Default: false
                      footerPosition: string,            // Position of header vertical. Default: 'right'
                      footerFullHeight: boolean,         // Full height of vertical footer. Default: false
                      horizontalSizes: string,           // Css values for wizard grid. Default: ''
                      verticalSizes: string,             // Css values for wizard grid. Default: ''
                    }
                    </code>
                  </pre>
                  <h5>WizardStepModel</h5>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                        // Instance ID of the component
                      enabledI18N: boolean,              // Enables component internationalization
                      draggable: boolean,                // Enables component drag and drop
                      notification: NotificationModel,   // Notification property object
                      compTemplate: string,              // Template name
                      display: boolean,                  // true or false Default: true
                      disable: boolean,                  // true or false Default: false
                      tooltip: any,                      // Tooltip on hover of the component
                      // <b>WizardStep Properties</b>  
                      header: string,                    // The text to show on the tab
                      isValid: boolean,                  // Whether the step is valid
                      headerId: string,                  // <b>ng-template id (#)</b> inside component tags to be used as header html content
                      contentId: string,                 // <b>ng-template id (#)</b> inside component tags to be used as html for step content
                    }
                    </code>
                  </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-wizard [styling]="myWizardStyling"<code>></code><code><</code>cf-wizard-step [styling]="myWizardStepStyling"<code>></code><code><</code><code>/</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                  </pre>
                  <h5>WizardStylingModel</h5>
                  <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn
                    <code>
                    {
                      container: {
                        dynamicClass,
                        class
                      },
                      previousButton: ButtonStylingModel, // See Button documentation
                      nextButton: ButtonStylingModel,
                      finishButton: ButtonStylingModel
                    }
                    </code>
                  </pre>
                  <h5>WizardStepStylingModel</h5>
                  <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn

                    <code>
                    {
                      header: ButtonStylingModel, // See Button documentation
                      container: {
                        dynamicClass,
                        class
                      },
                      iconIndex: {
                        dynamicClass,
                        class,
                        themeColor
                      },
                      prefixIndex: {
                        dynamicClass,
                        class,
                        themeColor
                      }
                    }
                    </code>
                  </pre>`
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Treeview':
            this.componentData = {
              componentName: 'TreeviewComponent',
              description:`
                <p>The <b>cf-treeview</b> component displays a set of items, which may have children and may be selectable</p> 
                <p>Selected items are available by their assigned ID</p>
                <p>Main Features are:</p>
                <ul>
                  <li>Selectable items</li>
                  <li>Selected items are available by their assigned ID</li>
                  <li>Dragable items to rearrange order of nodes</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'treeview-1',
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-treeview has a property model to configure it and a styling model to style it</p> 
                    <p>By default the treeview is packaged with default styling and properties so the component can simply be used in the following way: 
                    <pre>
                      <code>
                        <code><</code>cf-treeview<code>></code>
                        <code><</code>template #itemTpl let-item="item"<code>></code>
		                    <code><</code>i<code>></code>{{ item._name }}<code><</code>/i<code>></code>
	                      <code><</code>/template<code>></code>
                        <code><</code><code>/</code>cf-treeview<code>></code>
                      </code>
                    </pre>
                    <p>item will refer to the items list passed in the properties model of the component</p>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-treeview compTemplate="myTreeViewTemplate"<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
                    </pre>
                    <p>2- Pass a property TreeView model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-treeview [properties]="myTreeViewProperties"<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the treeview 
                    <pre>
                    <code><</code>cf-treeview display="true"<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  ` 
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-treeview [properties]="myTreeViewProperties"<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
                    </pre>
                    <pre>
                      <code>
                      {
                       // <b>Core Properties</b>
                       id: string,                        // Instance ID of the component
                       enabledI18N: boolean,              // Enables component internationalization
                       draggable: boolean,                // Enables component drag and drop
                       notification: NotificationModel,   // Notification property object
                       compTemplate: string,              // Template name
                       display: boolean,                  // true or false Default: true
                       disable: boolean,                  // true or false Default: false
                       tooltip: any,                      // Tooltip on hover of the component
                       // <b>Treeview Properties</b>  
                       items: [],                         // Array of items to display          
                       options:{
                        idField: string,                  // Key in the items array to refer to as the id of the item Default: 'id'
                        displayField: string,             // Key in the items array to refer to as the display of the item Default: 'name'
                        childrenField: string,            // Key in the items array to refer to as the id of the item Default: 'children'
                        isExpandedField: string,          // Key in the items array to refer to as the id of the item Default: 'expanded'
                        selectable: boolean,              // Whether the items are selectable or not Default: true
                        allowDrag: boolean,               // Whether the items are draggable or not Default: true
                        animateExpand: boolean            // Enable or disable animation Default: false
                       }
                      }
                      </code>
                      </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-treeview [styling]="mytreeviewStyling"<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
                    </pre>
                      <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn

                      <code>
                      {
                        //Container surrounding the TreeView
                        container: {
                          dynamicClass,
                          class
                        },

                        //Styling of every item
                        item: {
                          dynamicClass,
                          class,
                          themeColor
                        }
                      }
                      </code>
                      </pre>`    
                },
                {
                  title:"Theming",
                  description:`
                    <p>CF Components will automatically apply the application’s defined theme</p>
                    <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                    <p>Options: <i>primary, accent, warn</i></p>
                    <p>To set the theme color of the treeview, you have to set the <i>themeColor</i> property in the <i>styling.item</i> object
                    to either primary, accent or warn to apply the application's theme.</p>
                    <p>For more information on theming <a class="links" target="_blank" href="/guide/theming">Theming and Styling</a></p>
                    `
                }
              ],
              demos:[
                {
                  component: CfDemoTreeview1,
                  title: "Basic Usage",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoTreeview2,
                  title: "List display of selected items",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoTreeview3,
                  title: "TreeView Template",
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-treeview by default is set to the <i>default template</i> under templates/default/treeview-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          items: [
                            {
                                _id: '1',
                                _name: 'Root 1',
                                _expanded: true,
                                _children: [
                                { 
                                    _id: '2', 
                                    _expanded: false,
                                    _name: 'Child 1' 
                                },
                                { 
                                    _id: '3', 
                                    _expanded: false,
                                    _name: 'Child 2' 
                                }
                                ]
                            },
                            {
                                _id: '4',
                                _expanded: false,
                                _name: 'Root 2',
                                _children: [
                                { 
                                    _id: '5', 
                                    _expanded: false,
                                    _name: 'Child 1' 
                                },
                                {
                                    _id: '6',
                                    _expanded: false,
                                    _name: 'Child 2',
                                    _children: [
                                    { 
                                        _id: '7', 
                                        _expanded: false,
                                        _name: 'Child 3' 
                                    }
                                    ]
                                }
                                ]
                            }
                          ],
                          options: {
                            idField: '_id',
                            displayField: '_name',
                            childrenField: '_children',
                            isExpandedField: '_expanded',
                            selectable: true,
                            allowDrag: true,
                            animateExpand: true
                          }
                        },
                        styling: {
                          item: {
                            themeColor:"primary"
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one treeview template it should be named: <b>treeview-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-treeview compTemplate=“customDirectory/treeview-template.json”<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the treeview-template.json </p>
                    <p> If you have more than one treeview template defined, then one should be name <b>treeview-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-treeview compTemplate="customDirectory/my-custom-treeview.json"<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
                    </pre>
                    <p>Where <i>my-custom-treeview.json</i> is the custom name of the treeview template file found under your custom directory</p>
                  `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
              ]
            };
          break;
          case 'Alerts':
            this.componentData = {
              componentName: 'AlertsComponent',
              description:`<p>Alerts are working based on <b><a target="_blank" class="links" href="https://github.com/scttcper/ngx-toastr" target="_blank">Ngx-toastr</a></b>. It is a container where is possible to create many html <b>ng-template</b>\'s to use them as a html content inside single alert component. Many alerts can be opened at the same moment. For current time it is possible to set four positions for displaying alert components:</p> 
                <ul>
                  <li><b>top-left</b></li>
                  <li><b>top-right</b></li>
                  <li><b>bottom-left</b></li>
                  <li><b>bottom-right</b></li>
                </ul>
                <p>Layout of each alert is customizable and has 4 main parts inside it container (which has row layout):</p>
                <ul>
                  <li><b>info icon</b>: optional and may emit inform action</li>
                  <li><b>content</b>: optional (which has column layout), in which three elements may be displayed:
                    <ul>
                      <li>title</li>
                      <li>message</li>
                      <li>custom html template</li>
                    </ul>
                  </li>
                  <li><b>confirm icon</b>: optional and may emit confirm action</li>
                  <li><b>cancel icon</b>: optional and may emit cancel action</li>
                </ul>
                <p>On the <b>cf-alerts</b> component it is possible to use such methods for displaying/closing single alert messages:</p>
                <ul>
                  <li><b>showMessage(properties, styling)</b> - displays alert with Angular Material "primary" type (for color of text/icons and background)</li>
                  <li><b>showWarning(properties, styling)</b> - displays alert with Angular Material "accent" type (for color of text/icons and background)</li>
                  <li><b>showError(properties, styling)</b> - displays alert with Angular Material "warn" type (for color of text/icons and background)</li>
                  <li><b>clearAll()</b> - clear all alerts</li>
                  <li><b>clearLast()</b> - clear last alert</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information</i></p>
              `,
              fileName: 'alerts-1',
              demos: [
                {
                  component: CfDemoAlerts1,
                  title: "Basic usage",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoAlerts2,
                  title: "Alerts types, positioning, timeouts, templates and styling",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoAlerts3,
                  title: "Alerts with actions",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoAlerts4,
                  title: "Alert Template",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-alert has a property model to configure it and a styling model to style it</p> 
                    <p>By default the alert is packaged with default styling and properties so the component can simply be used in the following way with specified properties: 
                    <pre>
                        <code><</code>cf-alerts #myAlerts <code>></code><code><</code><code>/</code>cf-alerts<code>></code>
                        <code><</code>cf-button label="Show alert" (onClick)="myAlerts.showMessage({ content: { message: 'I'm alert message }})"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an <b>compTemplate</b> property of AlertModel:                     
                    <p>2- Pass a property alert model object where any attributes defined in the model will override the default 
                    <pre>
                    <code>myAlert = new AlertModel({
                      content: { message: 'Message text' },
                      ...
                    });</code>                        
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties of single Alert object",
                  description:`
                    <p>Alerts are working in three types: info, warning, error. Descriptiond of all options with default values:</p>
                    <pre>
                      {
                        compTemplate?: string;              // Component template.
                        id?: string;                        // Alert id. Optional, but must be set for correct work with alerts actions events.
                        content?: {                         // Optional content section.
                          title?: string;                   // Title of alert. Optional.
                          message?: string;                 // Message of alert. Optional.
                          templateName?: string;            // Alert html ng-template name.
                        }
                        position?: string;                  // Alert position. Optional. Can be: 'top-left', 'top-right', 'bottom-left', 'bottom-right'. Default: 'top-right'.
                        timeOut?: number;                   // Alert timeout.
                        extendedTimeOut?: number;           // Alert timeout after hover on alert.
                        inform?: {                          // Optional inform section.
                          show?: boolean;                   // If to show inform icon.
                          icon?: IconModel;                 // Alert inform icon model. Optional. Default must be specified in corresponding template.
                        };
                        cancel?: {                          // Optional cancel section.
                          show?: boolean;                   // If to show cancel icon.
                          icon?: IconModel;                 // Alert cancel icon model. Optional. Default must be specified in corresponding template.
                        };
                        confirm?: {                         // Optional confirm section.
                          show?: boolean;                   // If to show confirm icon.
                          icon?: IconModel;                 // Alert confirm icon model. Optional. Default must be specified in corresponding template.
                        }
                        progressBar?: boolean;              // If to show progressBar.
                        progressAnimation?: string;         // ProgressBar animation: increasing/decreasing. Optional. Default: decreasing..
                        autoDismiss?: boolean;              // Class for alert title.
                        maxOpened?: number;                 // Maximum number of alerts opened.
                        newestOnTop?: boolean;              // If to open newest alert on top of other alerts.
                        onActivateTick?: boolean;           // Fire ApplicationRef.tick() from the toast component when activated. Helps show toast from a websocket event.
                        tapToDismiss?: boolean;             // Close on click.
                        preventDuplicates?: boolean;        // To prevent duplicates.
                      }</pre> 
                    <h4>Styling</h4>                    
                    <pre>                      
                      {
                        container?: StylingModel;
                        toolbar?: {                         // Styling for the alert toolbar element.
                          class?: string;                   // Classes for toolbar section.
                          dynamicClass?: any;               // Dynamic classes for toolbar section.
                          inform?: {                        // Styling for inform icon section.
                            class?: string;                 // Classes for inform icon section.
                            dynamicClass?: any;             // Dynamic classes for inform icon section.
                            icon?: IconStylingModel;        // IconStylingModel for the alert informIcon element.
                          };
                          content?: {                       // Styling for the alert content element.
                            class?: string;                 // Classes for content section.
                            dynamicClass?: any;             // Dynamic classes for content section.
                            title?: StylingModel;           // StylingModel for the alert title element.
                            message?: StylingModel;         // StylingModel for the alert message element.
                            template?: StylingModel;        // StylingModel for the alert html template element.
                          };
                          cancel?: {                        // Styling for cancel icon section.
                            class?: string;                 // Classes for cancel icon section.
                            dynamicClass?: any;             // Dynamic classes for cancel icon section.
                            icon?: IconStylingModel;        // IconStylingModel for the alert cancelIcon element.
                          };
                          confirm?: {                       // Styling for confirm icon section.
                            class?: string;                 // Classes for confirm icon section.
                            dynamicClass?: any;             // Dynamic classes for confirm icon section.
                            icon?: IconStylingModel;        // IconStylingModel for the alert confirmIcon element.
                          };
                        };
                        progressBar?: StylingModel;         // StylingModel for the alert progressBar element.
                      }
                    </pre>                       
                  `
                },
                {
                  title:"Templating System",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-alert with <b>info</b> type by default is set to the <i>default template</i> under templates/default/alert-template.json</p>
                    <pre>
                      <code>
                        property: {
                          "id": "",
                          "compTemplate": "default/alert-template",
                          "content": {
                              "title": "",
                              "message": "",
                              "templateName": ""
                          },
                          "position": "top-right",
                          "timeOut": 3000,
                          "extendedTimeOut": 500,
                          "inform": {
                              "show": true,
                              "icon": { "name": "info" }
                          },
                          "confirm": {
                              "show": true,
                              "icon": { "name": "check" }
                          },
                          "cancel": {
                              "show": true,
                              "icon": { "name": "close" }
                          },
                          "progressBar": true,
                          "progressAnimation": "decreasing",
                          "autoDismiss": false,
                          "maxOpened": 0,
                          "newestOnTop": true,
                          "onActivateTick": false,
                          "tapToDismiss": false,
                          "preventDuplicates": false
                        }
                      </code>
                    </pre>
                    <p>The cf-alert with <b>warning</b> type by default is set to the <i>default template</i> under templates/default/alert-warning-template.json</p>
                    <pre>
                      <code>
                        property: {
                          "id": "",
                          "compTemplate": "default/alert-warning-template",
                          "content": {
                              "title": "",
                              "message": "",
                              "templateName": ""
                          },
                          "position": "top-right",
                          "timeOut": 3000,
                          "extendedTimeOut": 500,
                          "inform": {
                              "show": true,
                              "icon": { "name": "warning" }
                          },
                          "confirm": {
                              "show": true,
                              "icon": { "name": "check" }
                          },
                          "cancel": {
                              "show": true,
                              "icon": { "name": "close" }
                          },
                          "progressBar": true,
                          "progressAnimation": "decreasing",
                          "autoDismiss": false,
                          "maxOpened": 0,
                          "newestOnTop": true,
                          "onActivateTick": false,
                          "tapToDismiss": false,
                          "preventDuplicates": false
                        }
                      </code>
                    </pre>
                    <p>The cf-alert with <b>error</b> type by default is set to the <i>default template</i> under templates/default/alert-error-template.json</p>
                    <pre>
                      <code>
                        property: {
                          "id": "",
                          "compTemplate": "default/alert-error-template",
                          "content": {
                              "title": "",
                              "message": "",
                              "templateName": ""
                          },
                          "position": "top-right",
                          "timeOut": 3000,
                          "extendedTimeOut": 500,
                          "inform": {
                              "show": true,
                              "icon": { "name": "error" }
                          },
                          "confirm": {
                              "show": true,
                              "icon": { "name": "check" }
                          },
                          "cancel": {
                              "show": true,
                              "icon": { "name": "close" }
                          },
                          "progressBar": true,
                          "progressAnimation": "decreasing",
                          "autoDismiss": false,
                          "maxOpened": 0,
                          "newestOnTop": true,
                          "onActivateTick": false,
                          "tapToDismiss": false,
                          "preventDuplicates": false
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one alert template it should be named: <b>alert-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <code>myAlert = new AlertModel({
                      compTemplate: "default/alert-template",
                      ...
                    });</code>
                    <p> Or by just specifying the template directory, which by default will set the alert-template.json </p>
                    <p> If you have more than one alert template defined, then one should be name <b>alert-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <code>myAlert = new AlertModel({
                      compTemplate: "customDirectory/my-custom-alert.json",
                      ...
                    });</code>
                    <p>Where <i>my-custom-alert.json</i> is the custom name of the alert template file found under your custom directory</p>`
                }
              ]
            };
          break;
          case 'Animation':
            this.componentData = {
              componentName: 'CoreComponent',
              description: 'This example shows components animation.',
              fileName: 'core-3',
              demos:[
                {
                  component: CfDemoCore3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }]
              };
          break;
          case 'BarChart':
            this.componentData = {
              componentName: 'BarChartComponent',
              description:`
                <p>CfBarChart component is created based on <b><a target="_blank" class="links" href="https://github.com/swimlane/ngx-charts" target="_blank">Ngx-charts</a></b> and data for all area charts is an array with objects like in examples:</p> 
                <table>
                <tr><th>Data for standard bar chart (not grouped chart)</th><th>Data for grouped chart</th></tr>
                <tr><td><pre>
                  data = [
                    { "name": "Germany", "value": 8940000 },
                    { "name": "USA", "value": 5000000 },
                    { "name": "France", "value": 7200000 }
                  ]
                <pre></td>
                <td><pre>  
                  data = [
                    {
                      "name": "Germany",
                      "series": [
                        { "name": "2010", "value": 7300000 },
                        { "name": "2011", "value": 8940000 }
                      ]
                    },
                    {
                      "name": "USA",
                      "series": [
                        { "name": "2010", "value": 7870000 },
                        { "name": "2011", "value": 8270000 }
                      ]
                    },
                    {
                      "name": "France",
                      "series": [
                        { "name": "2010", "value": 5000002 },
                        { "name": "2011", "value": 5800000 }
                      ]
                    }
                  ]
                <pre></td></tr></table>
                <p><i>Check <strong>Examples</strong> tab for more information</i></p>`,
              fileName: 'bar-chart-1',
              demos:[
                {
                  title:"Default Bar Chart (vertical orienation)",
                  component: CfDemoBarChart1,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                title:"Horizontal Bar Chart",
                component: CfDemoBarChart2,
                inputs: {
                  themeName: this.configuration.theme
                }
                },
                {
                  title:"Grouped Vertical Bar Chart",
                  component: CfDemoBarChart3,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title:"Grouped Horizontal Bar Chart",
                  component: CfDemoBarChart4,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-bar-chart has a property model to configure it and a styling model to style it</p> 
                    <p>By default the bar-chart is packaged with default styling and properties so the component can simply be used in the following way with it data object: 
                    <pre>
                        <code><</code>cf-bar-chart [data]="data"<code>></code><code><</code><code>/</code>cf-bar-chart<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-bar-chart compTemplate="myBarChartTemplate"<code>></code><code><</code><code>/</code>cf-bar-chart<code>></code>
                    </pre>
                    <p>2- Pass a property bar-chart model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-bar-chart [properties]="myBarChartProperties"<code>></code><code><</code><code>/</code>cf-bar-chart<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the bar-chart 
                    <pre>
                    <code><</code>cf-bar-chart [data]="data" [stacked]="true" <code>></code><code><</code><code>/</code>cf-bar-chart<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-bar-chart [properties]="myBarChartProperties"<code>></code><code><</code><code>/</code>cf-bar-chart<code>></code>
                    </pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <pre>{
                      <b>data</b>: any[],                    // Data to show
                      <b>gradient</b>: boolean,              // Fill elements with a gradient instead of a solid color. Default: false.
                      <b>showLegend</b>: boolean,            // If to show the legend. Default: true.
                      <b>colorScheme</b>: ChartsColorScheme, // It must be property <b>domain</b> with array of string css color values for each data item. Default: domain: [].
                      <b>colorSchemeName</b>: string,        // Color scheme name. Default: forest. See all list below.
                      <b>showXAxis</b>: boolean,             // If to show the x axis. Default: true.
                      <b>showYAxis</b>: boolean,             // If to show the y axis. Default: true.
                      <b>showXAxisLabel</b>: boolean,        // If to show the x axis label. Default: true.
                      <b>showYAxisLabel</b>: boolean,        // If to show the y axis label. Default: true.
                      <b>xAxisLabel</b>: string,             // The x axis label
                      <b>yAxisLabel</b>: string,             // The y axis label
                      <b>orientation</b>: string,            // Horizontal or vertical bar chart orientation. Default: 'vertical'.
                      <b>grouped</b>: boolean,               // If to show bar chart in grouped mode. Default: false.
                      <b>legendPosition</b>: string,         // Legend position. Can be: top, right, bottom, left. Default: right.
                      <b>chartAlignment</b>: string,         // Alignment of chart. Can be: start, center, end. Default: start.
                    }</pre>  
                    <p>List of charts color schemes:</p>
                    <ul><li>air</li><li>aqua</li><li>cool</li><li>fire</li><li>flame</li><li>forest</li><li>horizon</li><li>natural</li><li>neons</li><li>night</li><li>nightLights</li><li>ocean</li><li>picnic</li><li>solar</li><li>vivid</li></ul>
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-bar-chart [styling]="myBarChartStyling"<code>></code><code><</code><code>/</code>cf-bar-chart<code>></code>
                    </pre>
                    <pre>{
                      barsContainerWidth: string,      // It is css value for chart bars container width. Default: '100%'.
                      barsContainerHeight: string,    // It is css value for chart bars container height. Default: '200px.
                      container: StylingObject,        // Styling of chart container
                    }</pre>
                  `
                },
                {
                  title: "Template",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-bar-chart by default is set to the <i>default template</i></p>
                    <pre>{
                      "property": {
                        "orientation": "vertical",
                        "grouped": false,
                        "gradient": false,
                        "showLegend": true,
                        "colorScheme": { "domain": [] },
                        "colorSchemeName": "forest",
                        "showXAxis": true,
                        "showYAxis": true,
                        "showXAxisLabel": true,
                        "showYAxisLabel": true,
                        "xAxisLabel": "",
                        "yAxisLabel": "",
                        "legendPosition": "right",
                        "chartAlignment": "start"
                      },
                      "style": {
                        "barsContainerWidth": "100%",
                        "barsContainerHeight": "200px"
                      }
                    }</pre>
                    <p>In your custom template directory, if you have one bar-chart template it should be named: <b>bar-chart-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-bar-chart compTemplate=“customDirectory/bar-chart-template.json”<code>></code><code><</code><code>/</code>cf-bar-chart<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the bar-chart-template.json </p>
                    <p> If you have more than one bar-chart template defined, then one should be name <b>bar-chart-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-bar-chart compTemplate="customDirectory/my-custom-bar-chart.json"<code>></code><code><</code><code>/</code>cf-bar-chart<code>></code>
                    </pre>
                    <p>Where <i>my-custom-bar-chart.json</i> is the custom name of the area-chart template file found under your custom directory</p>
                  `,
                }
              ]
            };
          break;
          case 'LineChart':
            this.componentData = {
              componentName: 'LineChartComponent',
              description:`<p>CfLineChart component is created based on <b><a target="_blank" class="links" href="https://github.com/swimlane/ngx-charts" target="_blank">Ngx-charts</a></b> and data for all area charts is an array with objects like in example:</p> 
                <pre>
                  data = [
                    {
                      "name": "Germany",
                      "series": [
                        { "name": "2010", "value": 7300000 },
                        { "name": "2011", "value": 8940000 }
                      ]
                    },
                    {
                      "name": "USA",
                      "series": [
                        { "name": "2010", "value": 7870000 },
                        { "name": "2011", "value": 8270000 }
                      ]
                    },
                    {
                      "name": "France",
                      "series": [
                        { "name": "2010", "value": 5000002 },
                        { "name": "2011", "value": 5800000 }
                      ]
                    }
                  ]
                <pre>          `,
              fileName: 'line-chart-1',
              demos:[
                {
                  title:"Standard Line Chart",
                  component: CfDemoLineChart1,
                  inputs: {
                  },
                },{
                  title:"Chart styling",
                  component: CfDemoLineChart2,
                  inputs: {
                  },
                },{
                  title:"Chart events",
                  component: CfDemoLineChart3,
                  inputs: {
                  },
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                  <p>The cf-line-chart has a property model to configure it and a styling model to style it</p> 
                  <p>By default the line-chart is packaged with default styling and properties so the component can simply be used in the following way with it data object: 
                  <pre>
                      <code><</code>cf-line-chart [data]="data"<code>></code><code><</code><code>/</code>cf-line-chart<code>></code>
                  </pre>
                  <p>To override any of the default properties, you can:</p>
                  <p>1- Create a custom template and pass it as an input to the component: 
                  <pre>
                    <code><</code>cf-line-chart compTemplate="myLineChartTemplate"<code>></code><code><</code><code>/</code>cf-line-chart<code>></code>
                  </pre>
                  <p>2- Pass a property line-chart model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-line-chart [properties]="myLineChartProperties"<code>></code><code><</code><code>/</code>cf-line-chart<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the line-chart 
                  <pre>
                  <code><</code>cf-line-chart [data]="data" [stacked]="true" <code>></code><code><</code><code>/</code>cf-line-chart<code>></code>
                  </pre>
                  <p>The hierarchy of the component's configuration is in the following order:</p>
                  <p>- Inputs override Property Model<p>
                  <p>- Property Model overrides Custom Template<p>
                  <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-line-chart [properties]="myLineChartProperties"<code>></code><code><</code><code>/</code>cf-line-chart<code>></code>
                    </pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <pre>{
                      <b>data</b>: any[],                    // Data to show
                      <b>gradient</b>: boolean,              // Fill elements with a gradient instead of a solid color. Default: false.
                      <b>showLegend</b>: boolean,            // If to show the legend. Default: true.
                      <b>colorScheme</b>: ChartsColorScheme, // It must be property <b>domain</b> with array of string css color values for each data item. Default: domain: [].
                      <b>colorSchemeName</b>: string,        // Color scheme name. Default: forest. See all list below.
                      <b>showXAxis</b>: boolean,             // If to show the x axis. Default: true.
                      <b>showYAxis</b>: boolean,             // If to show the y axis. Default: true.
                      <b>showXAxisLabel</b>: boolean,        // If to show the x axis label. Default: true.
                      <b>showYAxisLabel</b>: boolean,        // If to show the y axis label. Default: true.
                      <b>xAxisLabel</b>: string,             // The x axis label
                      <b>yAxisLabel</b>: string,             // The y axis label
                      <b>autoScale</b>: boolean,             // Set the minimum value of the y axis to the minimum value in the data, instead of 0. Default: false.
                      <b>legendPosition</b>: string,         // Legend position. Can be: top, right, bottom, left. Default: right.
                      <b>chartAlignment</b>: string,         // Alignment of chart. Can be: start, center, end. Default: start.
                    }</pre>  
                    <p>List of charts color schemes:</p>
                    <ul><li>air</li><li>aqua</li><li>cool</li><li>fire</li><li>flame</li><li>forest</li><li>horizon</li><li>natural</li><li>neons</li><li>night</li><li>nightLights</li><li>ocean</li><li>picnic</li><li>solar</li><li>vivid</li></ul>
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-line-chart [styling]="myLineChartStyling"<code>></code><code><</code><code>/</code>cf-line-chart<code>></code>
                    </pre>
                    <pre>{
                      barsContainerWidth: string,               // It is css value for chart bars container width. Default: '100%'.
                      barsContainerHeight: string',             // It is css value for chart bars container height. Default: '200px.
                      container: StylingObject,    // Styling of chart container
                    }</pre>
                  `
                },
                {
                  title: "Template",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-line-chart by default is set to the <i>default template</i></p>
                    <pre>{
                      "property": {
                        "autoScale": true,
                        "gradient": false,
                        "showLegend": true,
                        "colorScheme": { "domain": [] },
                        "colorSchemeName": "forest",
                        "showXAxis": true,
                        "showYAxis": true,
                        "showXAxisLabel": true,
                        "showYAxisLabel": true,
                        "xAxisLabel": "",
                        "yAxisLabel": "",
                        "legendPosition": "right",
                        "chartAlignment": "start"
                      },
                      "style": {
                        "barsContainerWidth": "100%",
                        "barsContainerHeight": "200px"
                      }
                    }</pre>
                    <p>In your custom template directory, if you have one line-chart template it should be named: <b>line-chart-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-line-chart compTemplate=“customDirectory/line-chart-template.json”<code>></code><code><</code><code>/</code>cf-line-chart<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the line-chart-template.json </p>
                    <p> If you have more than one line-chart template defined, then one should be name <b>line-chart-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-line-chart compTemplate="customDirectory/my-custom-line-chart.json"<code>></code><code><</code><code>/</code>cf-line-chart<code>></code>
                    </pre>
                    <p>Where <i>my-custom-line-chart.json</i> is the custom name of the area-chart template file found under your custom directory</p>
                  `,
                }
              ]
            };
          break;
          case 'AreaChart':
            this.componentData = {
              componentName: 'AreaChartComponent',
              description:`<p>CfAreaChart component is created based on <b><a target="_blank" class="links" href="https://github.com/swimlane/ngx-charts" target="_blank">Ngx-charts</a></b> and data for all area charts is an array with objects like in example:</p> 
                <pre>
                  data = [
                    {
                      "name": "Germany",
                      "series": [
                        { "name": "2010", "value": 7300000 },
                        { "name": "2011", "value": 8940000 }
                      ]
                    },
                    {
                      "name": "USA",
                      "series": [
                        { "name": "2010", "value": 7870000 },
                        { "name": "2011", "value": 8270000 }
                      ]
                    },
                    {
                      "name": "France",
                      "series": [
                        { "name": "2010", "value": 5000002 },
                        { "name": "2011", "value": 5800000 }
                      ]
                    }
                  ]
                <pre>           
                <p><i>Check <strong>Examples</strong> tab for more information</i></p>
              `,
              fileName: 'area-chart-1',
              demos: [
                {
                  component: CfDemoAreaChart1,
                  title: "Standard Area Chart",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoAreaChart2,
                  title: "Stacked Area Chart with styling",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoAreaChart3,
                  title: "Chart events",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                  <p>The cf-area-chart has a property model to configure it and a styling model to style it</p> 
                  <p>By default the area-chart is packaged with default styling and properties so the component can simply be used in the following way with it data object: 
                  <pre>
                      <code><</code>cf-area-chart [data]="data"<code>></code><code><</code><code>/</code>cf-area-chart<code>></code>
                  </pre>
                  <p>To override any of the default properties, you can:</p>
                  <p>1- Create a custom template and pass it as an input to the component: 
                  <pre>
                    <code><</code>cf-area-chart compTemplate="myAreaChartTemplate"<code>></code><code><</code><code>/</code>cf-area-chart<code>></code>
                  </pre>
                  <p>2- Pass a property area-chart model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-area-chart [properties]="myAreaChartProperties"<code>></code><code><</code><code>/</code>cf-area-chart<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the area-chart 
                  <pre>
                  <code><</code>cf-area-chart [data]="data" [stacked]="true" <code>></code><code><</code><code>/</code>cf-area-chart<code>></code>
                  </pre>
                  <p>The hierarchy of the component's configuration is in the following order:</p>
                  <p>- Inputs override Property Model<p>
                  <p>- Property Model overrides Custom Template<p>
                  <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-area-chart [properties]="myAreaChartProperties"<code>></code><code><</code><code>/</code>cf-area-chart<code>></code>
                    </pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <pre>{
                        <b>data</b>: any[],                     // Data to show
                        <b>gradient</b>: boolean,               // Fill elements with a gradient instead of a solid color. Default: false.
                        <b>showLegend</b>: boolean,             // If to show the legend. Default: true.
                        <b>colorScheme</b>: ChartsColorScheme,  // It must be property <b>domain</b> with array of string css color values for each data item. Default: domain: [].
                        <b>colorSchemeName</b>: string,         // Color scheme name. Default: forest. See all list below.
                        <b>showXAxis</b>: boolean,              // If to show the x axis. Default: true.
                        <b>showYAxis</b>: boolean,              // If to show the y axis. Default: true.
                        <b>showXAxisLabel</b>: boolean,         // If to show the x axis label. Default: true.
                        <b>showYAxisLabel</b>: boolean,         // If to show the y axis label. Default: true.
                        <b>xAxisLabel</b>: string,              // The x axis label
                        <b>yAxisLabel</b>: string,              // The y axis label
                        <b>autoScale</b>: boolean,              // Set the minimum value of the y axis to the minimum value in the data, instead of 0. Default: false.
                        <b>stacked</b>: boolean,                // If area chart is show in stacked mode. Default: false.
                        <b>legendPosition</b>: string,          // Legend position. Can be: top, right, bottom, left. Default: right.
                        <b>chartAlignment</b>: string,          // Alignment of chart. Can be: start, center, end. Default: start.
                      }</pre>  
                      <p>List of charts color schemes:</p>
                      <ul><li>air</li><li>aqua</li><li>cool</li><li>fire</li><li>flame</li><li>forest</li><li>horizon</li><li>natural</li><li>neons</li><li>night</li><li>nightLights</li><li>ocean</li><li>picnic</li><li>solar</li><li>vivid</li></ul>
                      <h4>Styling</h4>
                      <pre>
                        <code><</code>cf-area-chart [styling]="myAreaChartStyling"<code>></code><code><</code><code>/</code>cf-area-chart<code>></code>
                      </pre>
                      <pre>{
                        barsContainerWidth: string,               // It is css value for chart bars container width. Default: '100%'.
                        barsContainerHeight: string',             // It is css value for chart bars container height. Default: '200px.
                        container: StylingObject,    // Styling of chart container
                    }</pre>
                  `
                },
                {
                  title: "Template",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-area-chart by default is set to the <i>default template</i></p>
                    <pre>{
                      "property": {
                        "autoScale": false,
                        "stacked": false,
                        "gradient": false,
                        "showLegend": true,
                        "colorScheme": { "domain": [] },
                        "colorSchemeName": "forest",
                        "showXAxis": true,
                        "showYAxis": true,
                        "showXAxisLabel": true,
                        "showYAxisLabel": true,
                        "xAxisLabel": "",
                        "yAxisLabel": "",
                        "legendPosition": "right",
                        "chartAlignment": "start"
                      },
                      "style": {
                        "barsContainerWidth": "100%",
                        "barsContainerHeight": "200px"
                      }
                    }</pre>
                    <p>In your custom template directory, if you have one area-chart template it should be named: <b>area-chart-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-area-chart compTemplate=“customDirectory/area-chart-template.json”<code>></code><code><</code><code>/</code>cf-area-chart<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the area-chart-template.json </p>
                    <p> If you have more than one area-chart template defined, then one should be name <b>area-chart-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-area-chart compTemplate="customDirectory/my-custom-area-chart.json"<code>></code><code><</code><code>/</code>cf-area-chart<code>></code>
                    </pre>
                    <p>Where <i>my-custom-area-chart.json</i> is the custom name of the area-chart template file found under your custom directory</p>
                  `,
                }
              ]
            };
          break;
          case 'PieChart':
            this.componentData = {
              componentName: 'PieChartComponent',
              description:`<p>CfPieChart component is created based on <b><a target="_blank" class="links" href="https://github.com/swimlane/ngx-charts" target="_blank">Ngx-charts</a></b> and data for all area charts is an array with objects like in example:</p> 
                <pre>
                  data = [
                    { "name": "Germany", "value": 8940000 },
                    { "name": "USA", "value": 5000000 },
                    { "name": "France", "value": 7200000 }
                  ]
                <pre>           
                <p><i>Check <strong>Examples</strong> tab for more information</i></p>`,
              fileName: 'pie-chart-1',
              demos:[
                {
                title:"Pie Chart",
                component: CfDemoPieChart1,
                inputs: {
                  themeName: this.configuration.theme
                }
                },
                {
                  title:"Donut Pie Chart with styling",
                  component: CfDemoPieChart2,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },{
                  title:"Pie Chart with events",
                  component: CfDemoPieChart3,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                  <p>The cf-pie-chart has a property model to configure it and a styling model to style it</p> 
                  <p>By default the pie-chart is packaged with default styling and properties so the component can simply be used in the following way with it data object: 
                  <pre>
                      <code><</code>cf-pie-chart [data]="data"<code>></code><code><</code><code>/</code>cf-pie-chart<code>></code>
                  </pre>
                  <p>To override any of the default properties, you can:</p>
                  <p>1- Create a custom template and pass it as an input to the component: 
                  <pre>
                    <code><</code>cf-pie-chart compTemplate="myPieChartTemplate"<code>></code><code><</code><code>/</code>cf-pie-chart<code>></code>
                  </pre>
                  <p>2- Pass a property pie-chart model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-pie-chart [properties]="myPieChartProperties"<code>></code><code><</code><code>/</code>cf-pie-chart<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the pie-chart 
                  <pre>
                  <code><</code>cf-pie-chart [data]="data" [stacked]="true" <code>></code><code><</code><code>/</code>cf-pie-chart<code>></code>
                  </pre>
                  <p>The hierarchy of the component's configuration is in the following order:</p>
                  <p>- Inputs override Property Model<p>
                  <p>- Property Model overrides Custom Template<p>
                  <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-pie-chart [properties]="myPieChartProperties"<code>></code><code><</code><code>/</code>cf-pie-chart<code>></code>
                    </pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <pre>{
                      <b>data</b>: any[],                    // Data to show
                      <b>gradient</b>: boolean,              // Fill elements with a gradient instead of a solid color. Default: false.
                      <b>showLegend</b>: boolean,            // If to show the legend. Default: true.
                      <b>colorScheme</b>: ChartsColorScheme, // It must be property <b>domain</b> with array of string css color values for each data item. Default: domain: [].
                      <b>colorSchemeName</b>: string,        // Color scheme name. Default: forest. See all list below.
                      <b>showXAxis</b>: boolean,             // If to show the x axis. Default: true.
                      <b>showYAxis</b>: boolean,             // If to show the y axis. Default: true.
                      <b>showXAxisLabel</b>: boolean,        // If to show the x axis label. Default: true.
                      <b>showYAxisLabel</b>: boolean,        // If to show the y axis label. Default: true.
                      <b>xAxisLabel</b>: string,             // The x axis label
                      <b>yAxisLabel</b>: string,             // The y axis label
                      <b>donut</b>: boolean,                 // Should pie chart to be like normal circle (true) or filled circle(false). Default: false.
                      <b>showLabels</b>: boolean,            // Show or hide the labels. Default: true.
                      <b>explodeSlices</b>: boolean,         // Make the radius of each slice proportional to it's value. Default: false.
                      <b>legendPosition</b>: string,         // Legend position. Can be: top, right, bottom, left. Default: right.
                      <b>chartAlignment</b>: string,         // Alignment of chart. Can be: start, center, end. Default: start.
                    }</pre>  
                    <p>List of charts color schemes:</p>
                    <ul><li>air</li><li>aqua</li><li>cool</li><li>fire</li><li>flame</li><li>forest</li><li>horizon</li><li>natural</li><li>neons</li><li>night</li><li>nightLights</li><li>ocean</li><li>picnic</li><li>solar</li><li>vivid</li></ul>
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-pie-chart [styling]="myPieChartStyling"<code>></code><code><</code><code>/</code>cf-pie-chart<code>></code>
                    </pre>
                    <pre>{
                      barsContainerWidth: string,               // It is css value for chart bars container width. Default: '100%'.
                      barsContainerHeight: string',             // It is css value for chart bars container height. Default: '200px.
                      container: StylingObject,    // Styling of chart container
                    }</pre>
                  `
                },
                {
                  title: "Template",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-pie-chart by default is set to the <i>default template</i></p>
                    <pre>{
                      "property": {
                        "donut": false,
                        "showLabels": true,
                        "explodeSlices": false,
                        "gradient": false,
                        "showLegend": true,
                        "colorScheme": { "domain": [] },
                        "colorSchemeName": "forest",
                        "showXAxis": true,
                        "showYAxis": true,
                        "showXAxisLabel": true,
                        "showYAxisLabel": true,
                        "xAxisLabel": "",
                        "yAxisLabel": "",
                        "legendPosition": "right",
                        "chartAlignment": "start",
                      },
                      "style": {
                        "barsContainerWidth": "100%",
                        "barsContainerHeight": "200px"
                      }
                    }</pre>
                    <p>In your custom template directory, if you have one pie-chart template it should be named: <b>pie-chart-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-pie-chart compTemplate=“customDirectory/pie-chart-template.json”<code>></code><code><</code><code>/</code>cf-pie-chart<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the pie-chart-template.json </p>
                    <p> If you have more than one pie-chart template defined, then one should be name <b>pie-chart-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-pie-chart compTemplate="customDirectory/my-custom-pie-chart.json"<code>></code><code><</code><code>/</code>cf-pie-chart<code>></code>
                    </pre>
                    <p>Where <i>my-custom-pie-chart.json</i> is the custom name of the area-chart template file found under your custom directory</p>
                  `,
                }
              ]
            };
          break;
          case 'Toolbar':
            this.componentData = {
              componentName: 'Toolbar Component',
              description: `
                <p>The <b>cf-toolbar</b> is a component that allows the user to define a toolbar composed of several sections in a user-selected order</p>
                <p>These sections include info, content, actions, help, close, maximization, and expandable</p>
                <ul>
                  <li>Each section takes an <em>order</em> number to tell the toolbar which order to put the sections in</li>
                  <li>The content section provides a place for user-defined HTML to be displayed</li>
                  <li>The info and help sections can provide helpful information about the toolbar's purpose</li>
                  <li>The actions section allows you to define a menu of actions that may be taken from the toolbar</li>
                  <li>The close, maximization, and expandable allow you to let the user take these actions on the toolbar itself</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'toolbar-1',
              demos: [
                {
                  title: "Basic usage displaying all toolbar sections in default order",
                  component: CfDemoToolbar1,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Demo of maximization, expandable and close functionality",
                  component: CfDemoToolbar2,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Styling examples",
                  component: CfDemoToolbar3,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Toolbar's generated from JSON with cf-image as inner content component",
                  component: CfDemoToolbar4,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Toolbar's generated from JSON with cf-fab as inner content component",
                  component: CfDemoToolbar5,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Toolbar Template",
                  component: CfDemoToolbar6,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-toolbar by default is set to the <i>default template</i> under templates/default/toolbar-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          "type": "info",
                          "info": {
                            "show": true,
                            "icon": {"name": "info"},
                            "order": 0
                          },
                          "content": {
                            "show": true,
                            "title": "Toolbar title",
                            "template": null,
                            "order": 1
                          },
                          "actions": {
                            "show": true,
                            "menu": {
                              "triggerIcon": { "name": "more_vert" },
                              "itemsSource": "fromModel",
                              "menuItems": [
                                {
                                  "buttonProperty": {
                                    "label": "Menu item",  
                                    "iconProperty": null,
                                  },
                                  "notification": null,
                                  "divider": false
                                }
                              ]
                            },
                            "order": 2
                          },
                          "help": {
                            "show": true,
                            "icon": {"name": "help"},
                            "order": 3
                          },
                          "close": {
                            "show": true,
                            "icon": {"name": "close"},
                            "order": 4
                          },
                          "maximization": {
                            "show": true,
                            "maximized": false,
                            "minimizeIcon": {"name": "remove"},
                            "maximizeIcon": {"name": "web_asset"},
                            "order": 5
                          },
                          "expandable": {
                            "show": true,
                            "expanded": true,
                            "icon": {"name": "arrow_drop_down"},
                            "order": 6
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one toolbar template it should be named: <b>toolbar-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-toolbar compTemplate=“customDirectory/toolbar-template.json”<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the toolbar-template.json </p>
                    <p> If you have more than one toolbar template defined, then one should be name <b>toolbar-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-toolbar compTemplate="customDirectory/my-custom-toolbar.json"<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                    </pre>
                    <p>Where <i>my-custom-toolbar.json</i> is the custom name of the toolbar template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                  <p>The cf-toolbar has a property model to configure it and a styling model to style it</p> 
                  <p>By default the toolbar is packaged with default styling and properties so the component can simply be used in the following way : 
                  <pre>
                      <code><</code>cf-toolbar<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                  </pre>
                  <p>To override any of the default properties, you can:</p>
                  <p>1- Create a custom template and pass it as an input to the component: 
                  <pre>
                    <code><</code>cf-toolbar compTemplate="myToolbarTemplate"<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                  </pre>
                  <p>2- Pass a property input model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-toolbar [properties]="myToolbarProperties"<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the toolbar 
                  <pre>
                  <code><</code>cf-toolbar content="myToolbarContent" info="myToolbarInfo"<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                  </pre>
                  <p>The hierarchy of the component's configuration is in the following order:</p>
                  <p>- Inputs override Property Model<p>
                  <p>- Property Model overrides Custom Template<p>
                  <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code><</code>cf-toolbar [properties]="myToolbarProperties"<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                  </pre>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                        // Instance ID of the component
                      enabledI18N: boolean,              // Enables component internationalization
                      draggable: boolean,                // Enables component drag and drop
                      notification: NotificationModel,   // Notification property object
                      compTemplate: string,              // Template name
                      display: boolean,                  // true or false Default: true
                      disable: boolean,                  // true or false Default: false
                      tooltip: any,                      // Tooltip on hover of the component
                      // <b>Toolbar Properties</b> 
                        type?: string;                   // Toolbar type. Can be: info, warning, error.
                        info?: {                         // Optional info section.
                          show?: boolean;                // To show / hide info section.
                          icon?: IconModel;              // IconModel data for info icon.
                          order?: number;                // Order of info section. Means flex system order property. Order numbers can be: 0, 1, 2, 3, 4, 5, 6.
                        };
                        content?: {                      // Optional content section.
                          show?: boolean;                // To show / hide toolbar content section.
                          title?: string;                // Title for content section.
                          template?: TemplateRef<any>;   // Toolbar template.
                          order?: number;                // Order of content section. Means flex system order property. Order numbers can be: 0, 1, 2, 3, 4, 5, 6.
                        };
                        actions?: {                      // Optional actions section.
                          show?: boolean;                // To show / hide actions section.
                          menu?: MenuModel;              // MenuModel component for actions section.
                          order?: number;                // Order of actions section. Means flex system order property. Order numbers can be: 0, 1, 2, 3, 4, 5, 6.
                        }
                        close?: {                        // Optional close icon section.
                          show?: boolean;                // To show / hide close icon section.
                          icon?: IconModel;              // IconModel data for close icon.
                          order?: number;                // Order of close icon section. Means flex system order property. Order numbers can be: 0, 1, 2, 3, 4, 5, 6.
                        };
                        help?: {                         // Optional help icon section.
                          show?: boolean;                // To show / hide help icon section.
                          icon?: IconModel;              // IconModel data for help icon.
                          order?: number;                // Order of help icon section. Means flex system order property. Order numbers can be: 0, 1, 2, 3, 4, 5, 6.
                        };
                        maximization?: {                 // Optional maximize/minimize icons section.
                          show?: boolean;                // To show / hide maximize/minimize icons section.
                          maximized?: boolean;           // Whether toolbar must be maximized.
                          minimizeIcon?: IconModel;      // IconModel data for minimizeIcon.
                          maximizeIcon?: IconModel;      // IconModel data for maximizeIcon.
                          order?: number;                // Order of maximize/minimize icons section. Means flex system order property. Order numbers can be: 0, 1, 2, 3, 4, 5, 6.
                        };
                        expandable?: {                   // Optional expandable icon section.
                          show?: boolean;                // To show / hide expandable icon section.
                          expanded?: boolean;            // To set toolbar to be expanded.
                          icon?: IconModel;              // IconModel data for expandable icon.
                          order?: number;                // Order of expandable icon section. Means flex system order property. Order numbers can be: 0, 1, 2, 3, 4, 5, 6.
                        }
                    }
                    </code>
                  </pre>
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-toolbar [styling]="myToolbarStyling"<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

                    <code>
                    {
                      container?: {                                 
                        class?: string;                          // Classes for main container
                        dynamicClass?: any;                      // Dynamic classes for main container
                      };
                      toolbar?: {                                // Styling for md-toolbar
                        class?: string;                          // Classes for md-toolbar
                        dynamicClass?: any;                      // Dynamic classes for md-toolbar
                        info?: {                                 // Styling for info section
                          class?: string;                        // Classes for info section
                          dynamicClass?: any;                    // Dynamic classes for info section
                          icon?: IconStylingModel;               // IconStylingModel for info icon
                        };
                        content?: {                              // Styling for content section
                          class?: string;                        // Classes for content section
                          dynamicClass?: any;                    // Dynamic classes for content section
                          title?: StylingModel;                  // StylingModel for title
                          template?: StylingModel;               // StylingModel for template
                        };
                        actions?: {                              // Styling for actions section
                          class?: string;                        // Classes for actions section
                          dynamicClass?: any;                    // Dynamic classes for actions section
                          menu?: MenuStylingModel;               // MenuStylingModel for menu section
                        };
                        maximizing?: {                           // Styling for maximizing section
                          class?: string;                        // Classes for maximizing section
                          dynamicClass?: any;                    // Dynamic classes for maximizing section
                          minimizeIcon?: IconStylingModel;       // IconStylingModel for minimize icon
                          maximizeIcon?: IconStylingModel;       // IconStylingModel for maximize icon
                        };
                        expandable?: {                           // Styling for expandable section
                          class?: string;                        // Classes for expandable section
                          dynamicClass?: any;                    // Dynamic classes for expandable section
                          icon?: IconStylingModel;               // IconStylingModel for expandable icon
                        };
                        help?: {                                 // Styling for help section
                          class?: string;                        // Classes for help section
                          dynamicClass?: any;                    // Dynamic classes for help section
                          icon?: IconStylingModel;               // IconStylingModel for help icon
                        };
                        close?: {                                // Styling for close section
                          class?: string;                        // Classes for close section
                          dynamicClass?: any;                    // Dynamic classes for close section
                          icon?: IconStylingModel;               // IconStylingModel for close icon
                        };
                      };
                    }
                    </code>
                    </pre>`
                }
              ]
            };
          break;
          case 'Gauge':
            this.componentData = {
              componentName: 'GaugeComponent',
              description: `
                <p>The <b>cf-gauge</b> component is built on top of <a class="links" href="https://github.com/mattlewis92/angular-gauge" target="_blank">Angular gauge</a> and extends it in the following way:<p>
                <ul>
                  <li>Properties like: value, max, size, label, prefix, suffix, animationDuratin, inputValue, display, disable</li>
                  <li>Value of gauge can be changed by clicking on circle or by click on value to activate input element and type value</li>
                  <li>Animation on svg circle element and value</li>
                  <li>Gauge can be active, disabled or in read only state (when property <b>inputValue</b> is equal to <b>false</b>)</li>
                </ul>             
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'gauge-1',
              demos:[
                {
                  title: "Default gauge (type: full)",
                  component: CfDemoGauge1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },{
                  title: "Types of gauge: full, arch, semi. All binded to the same variable",
                  component: CfDemoGauge2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },{
                  title: "Gauge with two inputs: properties and styling",
                  component: CfDemoGauge3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },{
                  title: "Gauge with all individual inputs",
                  component: CfDemoGauge4,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-gauge has a property model to configure it and a styling model to style it</p> 
                    <p>By default the gauge is packaged with default styling and properties so the component can simply be used in the following way:
                    <pre>
                        <code><</code>cf-gauge<code>></code><code><</code><code>/</code>cf-gauge<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1 - Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-gauge compTemplate="myGaugeTemplate"<code>></code><code><</code><code>/</code>cf-gauge<code>></code>
                    </pre>
                    <p>2 - Pass a property gauge model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-gauge [properties]="myGaugeProperties"<code>></code><code><</code><code>/</code>cf-gauge<code>></code>
                    </pre>
                    <p>3 - Pass the properties attributes as seperate inputs to the gauge 
                    <pre>
                    <code><</code>cf-gauge value="55" inputValue="false" <code>></code><code><</code><code>/</code>cf-gauge<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title: "Properties and Styling",
                  description: `
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-gauge [properties]="myGaugeProperties"<code>></code><code><</code><code>/</code>cf-gauge<code>></code>
                    </pre>
                    <pre>
                      <code>
                        {
                         // <b>Core Properties</b>
                         id: string,                        // Instance ID of the component
                         enabledI18N: boolean,              // Enables component internationalization
                         draggable: boolean,                // Enables component drag and drop
                         notification: NotificationModel,   // Notification property object
                         compTemplate: string,              // Template name
                         display: boolean,                  // true or false Default: true
                         disable: boolean,                  // true or false Default: false
                         tooltip: any,                      // Tooltip on hover of the component
                         // <b>Gauge Properties</b> 
                         max: number,                       // Maximum integer value of gauge. Default: 100.
                         type: string,                      // Type value of gauge. Can be: full, arch, semi. Default: 'full'.
                         size: number,                      // Aanimation duration of gauge in seconds. Default: 150.
                         value: number,                     // Current integer value of gauge. Default: 0.
                         label: string,                     // Label of gauge. Default: '',.
                         prefix: string,                    // Prefix of gauge. Default: '',.
                         suffix: string,                    // Suffix of gauge. Default: '',.
                         inputValue: boolean,               // Able gauge to input it value. Default: true.
                         animationDuration: number          // Size for width/height of gauge. It means number of pixels. Default: 1.
                        }
                      </code>
                    </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-gauge [styling]="myGaugeStyling"<code>></code><code><</code><code>/</code>cf-gauge<code>></code>
                    </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn
                      <code>
                        {
                          // styling of the gauge container
                          container: { class, dynamicClass },
                          // Gauge svg element styling
                          gauge: { class, dynamicClass }, 
                          // Value styling
                          value: { class, dynamicClass }, 
                          // Prefix styling
                          prefix: { class, dynamicClass }, 
                          // Suffix styling
                          suffix: { class, dynamicClass }, 
                          // Label styling
                          label: { class, dynamicClass }, 
                        }
                      </code>
                    </pre>
                  `
                },
                {
                  title:"Templating System",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-gauge by default is set to the <i>default template</i> under templates/default/gauge-template.json</p>
                    <pre>
                      <code>
                        property: {
                          max: 100,
                          type: 'full',
                          size: 150,
                          value: 0,
                          label: '',
                          prefix: '',
                          suffix: '',
                          inputValue: true,
                          animationDuration: 1
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one gauge template it should be named: <b>gauge-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-gauge compTemplate=“customDirectory/gauge-template.json”<code>></code><code><</code><code>/</code>cf-gauge<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the gauge-template.json </p>
                    <p> If you have more than one gauge template defined, then one should be name <b>gauge-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-gauge compTemplate="customDirectory/my-custom-gauge.json"<code>></code><code><</code><code>/</code>cf-gauge<code>></code>
                    </pre>
                    <p>Where <i>my-custom-gauge.json</i> is the custom name of the gauge template file found under your custom directory</p>`
                }
              ]
            };
          break;
          case 'GoogleMaps':
            this.componentData = {
              componentName: 'GoogleMapsComponent',
              description: 'This graphical control represents a GoogleMaps with extended options.',
              fileName: 'google-maps-1',
              demos:[
                {
                  title: "Default template",
                  component: CfDemoGoogleMaps1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "Customized options and styling",
                  component: CfDemoGoogleMaps2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }
              ]
            };
          break;
          case 'FileUploader':
            this.componentData = {
              componentName: 'FileUploaderComponent',
              description:`
                <p>The <b>cf-file-uploader</b> component is based on <a class="links" href="https://github.com/uniprank/ng2-file-uploader/wiki/Module-API" target="_blank">Angular 2 File Upload</a>, CF Button and <a href="https://material.angular.io/components/progress-bar/overview" class="links" target="_blank">Angular Material Progress Bar</a></p>
                <p>Main posibilities of cf-file-uploader are:</p>
                <ul>
                  <li>Ability to pick file and add/remove it to/from the list of files, so after that you may send all files together or each file individually.</li>
                  <li>Uploading files to a server url is optional and upload buttons will be generated if you set that server url.</li>
                  <li>File can be added to the list once or multiple times.</li>
                  <li>You may set types of files that can be added to the list.</li>
                  <li>It is posiible to read files. For that you can set property <b>readFiles</b> to true and cf-file-uploader will read file content with automatic understanding how to read files with different types.</li>
                  <li>It is possible to show/hide drop zone with setting property <b>showDropZone</b> to true/false.</li>
                  <li>It is possible to show/hide each file buttons or buttons for all files with setting properties <b>showFileButtons</b> / <b>showFilesButtons</b> to true/false.</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'file-uploader',
              demos: [
                {
                  component: CfDemoFileUploader1,
                  title: "Basic usage with default template",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  component: CfDemoFileUploader2,
                  title: "Customized options",
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-file-uploader has a property model to configure it and a styling model to style it</p> 
                    <p>By default the file-uploader is packaged with default styling and properties so the component can simply be used in the following way with specified properties: 
                    <pre>
                        <code><</code>cf-file-uploader [properties]="myFileUploaderProperties"<code>></code><code><</code><code>/</code>cf-file-uploader<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-file-uploader compTemplate="myFileUploaderTemplate"<code>></code><code><</code><code>/</code>cf-file-uploader<code>></code>
                    </pre>
                    <p>2- Pass a property file-uploader model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-file-uploader [properties]="myFileUploaderProperties"<code>></code><code><</code><code>/</code>cf-file-uploader<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-file-uploader [properties]="myFileUploaderProperties"<code>></code><code><</code><code>/</code>cf-file-uploader<code>></code>
                    </pre>
                    <pre>
                    {
                     // <b>Core Properties</b>
                     id: string,                        // Instance ID of the component
                     enabledI18N: boolean,              // Enables component internationalization
                     draggable: boolean,                // Enables component drag and drop
                     notification: NotificationModel,   // Notification property object
                     compTemplate: string,              // Template name
                     display: boolean,                  // true or false Default: true
                     disable: boolean,                  // true or false Default: false
                     tooltip: any,                      // Tooltip on hover of the component
                     // <b>FileUploader Properties</b> 
                     main: {
                        url: string,                    // Path to server where the files be uploaded. Default: ''
                        alias: string,                  // File alias. Default: 'file'
                        headers: Object,                // An object with header informations. Default: {}
                        filters: FileFilter[],          // A list of filters which are extend the default list. Default: []
                        formData: Object[],             // A list of data to be sent along with the files. Default: []
                        autoUpload: boolean,            // Automatically upload new files when they are adding to the queue. Default: false
                        method: string,                 // Request methode - HTML5 only. Default: 'POST'
                        removeBySuccess: boolean,       // Remove file from queue when upload was successfull. Default: false
                        queueLimit: number,             // Limitation of files at the queue (-1 is unlimited). Default: -1
                        enableCors: boolean,            // Activate CORS - HTML5 only. Default: false
                        withCredentials: boolean,       // If to use credentials. Default: false
                        uniqueFiles: boolean            // To add only unique files to files list. Default: false
                      },
                      showDropZone: boolean,            // Means if component must show dropZone. Default: true
                      dropZoneLabel: string,            // Means label for dropZone. Default: 'Drop files here or click to select: '
                      readFiles: boolean,               // Means if read files content after file was added to the list. Default: false
                      filesNames: string[],             // Means part or all text of file name to match. Default: []
                      filesTypes: string[],             // Means what file types are resolved to add. Default: []
                      filesSizes: string[],             // Means what files by size are resolved to add. Default: []
                      filesDates: string[],             // Means what files by date are resolved to add. Default: []
                      showFilesActions: boolean,        // Means if to show actions for all selected files. Default: true
                      showFileActions: boolean,         // Means if to show actions for a single file. Default: true
                      uploadFileButton: ButtonModel,    // ButtonModel for each file uploa. Default: new ButtonModel({ label: "Upload" })
                      removeFileButton: ButtonModel,    // ButtonModel for each file remov. Default: new ButtonModel({ label: "Remove" })
                      uploadFilesButton: ButtonModel,   // ButtonModel for upload all file. Default: new ButtonModel({ label: "Upload All" })
                      removeFilesButton: ButtonModel    // ButtonModel for remove all file. Default: new ButtonModel({ label: "Remove All" })
                    }
                    </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-file-uploader [styling]="myFileUploaderStyling"<code>></code><code><</code><code>/</code>cf-file-uploader<code>></code>
                    </pre>
                    <pre>
                    {
                      dropZone: StylingModel,                // Styling dropZone html element
                      files: StylingModel,                   // Styling files html element
                      file: StylingModel,                    // Styling file html element
                      fileImage: StylingModel,               // Styling fileImage html element
                      fileName: StylingModel,                // Styling fileName html element
                      fileProgress: StylingModel,            // Styling fileProgress html element
                      fileActions: StylingModel,             // Styling fileActions html element
                      filesActions: StylingModel,            // Styling filesActions html element
                      uploadFileButton: ButtonStylingModel,  // Styling uploadFileButton html element
                      removeFileButton: ButtonStylingModel,  // Styling removeFileButton html element
                      uploadFilesButton: ButtonStylingModel, // Styling uploadFilesButton html element
                      removeFilesButton: ButtonStylingModel, // Styling removeFilesButton html element
                    }
                    </pre>
                  `  
                },
                {
                  title: "Template",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-file-uploader by default is set to the <i>default template</i> under templates/default/fileuploader-template.json</p>
                    <pre>
                      {
                        property: {
                          main: {
                            url: "",
                            removeBySuccess: false,
                            uniqueFiles: true,
                            autoUpload: false
                          },
                          showDropZone: true,
                          dropZoneLabel: 'Drop files here or click to select: ',
                          readFiles: false,   
                          filesNames: [], 
                          filesTypes: [], 
                          filesSizes: [], 
                          filesDates: [], 
                          showFileActions: true,
                          showFilesActions: true,
                          uploadFileButton: new ButtonModel({ label: "Upload" }),
                          removeFileButton: new ButtonModel({ label: "Remove" }),
                          uploadFilesButton: new ButtonModel({ label: "Upload All" }),
                          removeFilesButton: new ButtonModel({ label: "Remove All" }),
                        }
                      }
                    </pre>
                    <p>In your custom template directory, if you have one file-uploader template it should be named: <b>file-uploader-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-file-uploader compTemplate=“customDirectory/file-uploader-template.json”<code>></code><code><</code><code>/</code>cf-file-uploader<code>></code>
                    </pre>
                                      <p> Or by just specifying the template directory, which by default will set the file-uploader-template.json </p>
                                      <p> If you have more than one file-uploader template defined, then one should be name <b>file-uploader-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-file-uploader compTemplate="customDirectory/my-custom-file-uploader.json"<code>></code><code><</code><code>/</code>cf-file-uploader<code>></code>
                    </pre>
                    <p>Where <i>my-custom-file-uploader.json</i> is the custom name of the file-uploader template file found under your custom directory</p>
                  `,
                }
              ]
            };
          break;
          case 'Dialog':
            this.componentData = {
              componentName: 'DialogComponent',
              description: `
                <p>Cf-dialog component is based on <a href="https://material.angular.io/components/dialog/overview" class="links" target="_blank">Angular Material Dialog</a> together with <b>cf-toolbar</b> and has many extended options:</p>
                <ul>
                  <li>Customizable optional main three layout sections (each of them may have own template): 
                    <ul>
                      <li>header (as cf-toolbar)</li>
                      <li>content</li>
                      <li>footer</li>
                    </ul>
                  </li>
                  <li>List of callbacks:
                    <ul>
                      <li>infoCallback</li>
                      <li>helpCallback</li>
                      <li>closeCallback</li>
                      <li>maximizeToggleCallback</li>
                      <li>expandToggleCallback</li>
                      <li>itemClickCallback</li>
                      <li>okCallback</li>
                      <li>cancelCallback</li>
                    </ul>
                  </li>
                  <li>Opening dialog in different layout positions:
                    <ul>
                      <li>standard position centered inside browser window;</li>
                      <li>dialog may be opened inside specific section</li>
                      <li>dialog may be opened according to X,Y coordinates of specific trigger element and there are 5 possible alignment positions:
                        <ul>
                          <li>auto (default)</li>
                          <li>leftBelow</li>
                          <li>rightBelow</li>
                          <li>leftUp</li>
                          <li>rightUp</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>
              `,
              fileName: 'dialog-1',
              demos:[
                {
                  title: "Basic usage (with title, message and template)",
                  component: CfDemoDialog1,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Dialog positions",
                  component: CfDemoDialog2,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Dialog types, callbacks and custom styling",
                  component: CfDemoDialog3,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Dialog Template",
                  component: CfDemoDialog4,
                  description:`
                    <p>Please Refer to <a class="links" target="_blank" href="/guide/template">Template System</a></p>
                    <p>The cf-dialog by default is set to the <i>default template</i> under templates/default/dialog-template.json</p>
                    <pre>
                      <code class="json">
                        properties: {
                          "targetId": "",
                          "sourceEvent": null,
                          "position": "auto",
                          "disableClose": false,
                          "height": "",
                          "width": "",
                          "header": {
                            "show": true,
                            "toolbar": {
                              "type": "info",
                              "info": {
                                "show": true,
                                "icon": {"name": "info"},
                                "order": 0
                              },
                              "content": {
                                "show": true,
                                "title": "",
                                "template": null,
                                "order": 1
                              },
                              "actions": {
                                "show": false,
                                "menu": null,
                                "order": 2
                              },
                              "help": {
                                "show": true,
                                "icon": {"name": "help_outline"},
                                "order": 3
                              },
                              "close": {
                                "show": true,
                                "icon": {"name": "highlight_off"},
                                "order": 4
                              },
                              "maximization": {
                                "show": false,
                                "maximized": false,
                                "minimizeIcon": null,
                                "maximizeIcon": null,
                                "order": 5
                              },
                              "expandable": {
                                "show": false,
                                "expanded": true,
                                "icon": null,
                                "order": 6
                              }
                            }
                          },
                          "content": {
                            "show": true,
                            "message": "",
                            "template": null
                          },
                          "footer": {
                            "show": true,
                            "cancelButton": {
                              "show": true,
                              "button": {
                                "label": "Cancel"
                              }
                            },
                            "okButton": {
                              "show": true,
                              "button": {
                                "label": "Ok"
                              }
                            },
                            "template": null
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one dialog template it should be named: <b>dialog-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code>
                        open() {
                          let dialogOptions = {
                            properties: new DialogModel({
                              compTemplate: 'default/dialog-template'
                            })
                          };

                          this.cfComponentTemplateService.showInDialog( dialogOptions );
                        }
                      </code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the dialog-template.json </p>
                    <p> If you have more than one dialog template defined, then one should be name <b>dialog-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code>
                        open() {
                          let dialogOptions = {
                            properties: new DialogModel({
                              compTemplate: 'customDirectory/my-custom-dialog'
                            })
                          };

                          this.cfComponentTemplateService.showInDialog( dialogOptions );
                        }
                      </code>
                    </pre>
                    <p>Where <i>my-custom-dialog.json</i> is the custom name of the dialog template file found under your custom directory</p>
                    `,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-dialog has a property model to configure it and a styling model to style it</p> 
                    <p>By default the dialog is packaged with default styling and properties so the component can simply be used in the following way with specified properties: 
                    <pre>
                      showDialog() {
                        let dialogOptions = {
                          properties: new DialogModel({
                            header: {
                              toolbar: {
                                content: {
                                  title: 'Dialog title'                                  
                                }          
                              }
                            },
                            content: {                              
                              message: 'Dialog message'
                            }
                          })
                        };

                        this.cfComponentTemplateService.showInDialog( dialogOptions );
                      }                        
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1- Create a custom template and pass it as an <b>compTemplate</b> property of DialogModel:
                    <p>2- Pass a property dialog model object where any attributes defined in the model will override the default 
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    <code>
                    {
                      // <b>Core Properties</b>
                      id: string,                        // Instance ID of the component
                      enabledI18N: boolean,              // Enables component internationalization
                      draggable: boolean,                // Enables component drag and drop
                      notification: NotificationModel,   // Notification property object
                      compTemplate: string,              // Template name
                      display: boolean,                  // true or false Default: true
                      disable: boolean,                  // true or false Default: false
                      tooltip: any,                      // Tooltip on hover of the component
                      // <b>Dialog Properties</b> 
                      targetId?: string;                 // ID of the target component inside which dialog will be opened
                      sourceEvent?: any;                 // If to align dialog position according to the trigger which opened dialog
                      position?: string;                 // Position of the dialog according to the trigger. Can be: auto, leftUp, leftBelow, rightBelow, rightUp
                      disableClose?: boolean;            // Whether the user can use escape or clicking outside to close a modal
                      height?: string;                   // Height of the dialog
                      width?: string;                    // Width of the dialog
                      header?: {                         // Dialog header object
                        show?: boolean;                  // Whether to show header
                        toolbar?: ToolbarModel;          // Toolbar inside header
                      };
                      content?: {                        // Dialog content object
                        show?: boolean;                  // Whether to show content
                        message?: string;                // Dialog message text
                        template?: TemplateRef<any>;     // Template for the content
                      };
                      footer?: {                         // Dialog footer object
                        show?: boolean;                  // Whether to show footer
                        cancelButton?: {                 // Footer cancel button
                          show?: boolean;                // Whether to show footer cancel button
                          button?: ButtonModel;          // Footer cancel button model
                        };
                        okButton?: {                     // Footer ok button
                          show?: boolean;                // Whether to show footer ok button
                          button?: ButtonModel;          // Footer ok button model
                        };
                        template?: TemplateRef<any>;     // Template for the footer
                      };  
                    }
                    </code>
                  </pre>
                  <h4>Styling</h4>
                    <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class.
                    <i>class</i>: string                         // Name of the css class selector.
                    <i>themeColor</i>: string                    // primary/accent/warn.

                    <code>
                    {
                      container?: {                                 
                        class?: string;                          // Classes for main container.
                        dynamicClass?: any;                      // Dynamic classes for main container.
                      };
                      header?: {                                 // Styling for the dialog header.
                        class?: string;                          // Classes for header section.
                        dynamicClass?: any;                      // Dynamic classes for header section.
                        toolbar?: ToolbarStylingModel;           // ToolbarStylingModel for the header toolbar.
                      };
                      content?: {                                // Styling for the dialog content section with message and template inside.
                        class?: string;                          // Classes for content section.
                        dynamicClass?: any;                      // Dynamic classes for content section.
                        message?: StylingModel;                  // StylingModel for the dialog content message.
                        template?: StylingModel;                 // StylingModel for the dialog content template.
                      };
                      footer?: {                                 // Styling for the dialog footer.
                        class?: string;                          // Classes for footer section.
                        dynamicClass?: any;                      // Dynamic classes for footer section.
                        okButton?: ButtonStylingModel;           // ButtonStylingModel for the dialog okButton.
                        cancelButton?: ButtonStylingModel;       // ButtonStylingModel for the dialog cancelButton.
                        template?: StylingModel;                 // StylingModel for the dialog template.
                      };
                    }
                    </code>
                    </pre>`
                }
              ]
            };
          break;
          case 'Card':
            this.componentData ={
              componentName: 'CardComponent',
              description: 'A material-style card for displaying related information. There are several types with predefined templates: News, Product, or Standard, which present input information in easily legible ways.',
              fileName: 'card-1',
              demos:[
                {
                  component: CfDemoCard1,
                  inputs: {
                  },
                }
              ],
              docs:[
                {
                  title: "Model",
                  description: "<pre>CardModel\n" +
                      "<code>{\n</code>" +
                      "<code>    align: string, //'start' or 'end', the action button's location. Default: 'end'\n</code>" +
                      "<code>    class: string, //used to set the class from the CardComponent CSS file\n</code>" +
                      "<code>    description: string, //The card's main text\n</code>" +
                      "<code>    image: string, //The card's image\n</code>" +
                      "<code>    image_type: string, //The card's image type. Possible: 'avatar', 'title', 'normal'\n</code>" +
                      "<code>    layout: LayoutModel, //The standard, product or news layout model\n</code>" +
                      "<code>    color: {\n</code>" +
                      "<code>        background: string, //the background color\n</code>" +
                      "<code>        foreground: string, //the foreground color\n</code>" +
                      "<code>    },\n</code>" +
                      "<code>    size: {\n</code>" +
                      "<code>        width: string, //the width of the card\n</code>" +
                      "<code>    }\n</code>" +
                      "<code>}</code></pre>\n"
                }
              ]
            };
          break;
          case 'Calendar':
            this.componentData = {
              componentName: 'CalendarComponent',
              description: 'This example shows the calendar component usage.',
              fileName: 'calendar-1',
              demos:[
                {
                  component: CfDemoCalendar1,
                  inputs: {
                  },
                }
              ]
            };
          break;
          case 'Sidenav':
            this.componentData = {
              componentName: 'SidenavComponent',
              description: `
                <p>The <b>cf-sidenav</b> component is built on top of <a target="_blank" href="https://material.angular.io/components/sidenav/overview" class="links">Angular Material Sidenav</a>. It consists of three parts:<p>
                <ul>
                  <li>content</li>
                  <li>left side</li>
                  <li>right side</li>
                </ul>
                <p>By default sidenav has no sizes so it fit to content sizes. To give some content to the sidenav sections you must use <b>ng-template</b> elements and put their ID to such special properties of cf-sidenav</p>
                <ul>
                  <li>contentId</li>
                  <li>leftSideId</li>
                  <li>rightSideId</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'sidenav-1',
              demos:[
                {
                  title: "Default sidenav",
                  component: CfDemoSidenav1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "Sidenav with dynamic content",
                  component: CfDemoSidenav2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-sidenav has a property model to configure it and a styling model to style it</p> 
                    <p>By default the sidenav is packaged with default styling and properties so the component can simply be used in the following way:
                    <pre>
                        <code><</code>cf-sidenav<code>></code><code><</code><code>/</code>cf-sidenav<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1 - Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-sidenav compTemplate="sidenav"<code>></code><code><</code><code>/</code>cf-sidenav<code>></code>
                    </pre>
                    <p>2 - Pass a property sidenav model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-sidenav [properties]="sidenav"<code>></code><code><</code><code>/</code>cf-sidenav<code>></code>
                    </pre>
                    <p>3 - Pass the properties attributes as seperate inputs to the sidenav 
                    <pre>
                    <code><</code>cf-sidenav [fullHeight]="true"<code>></code><code><</code><code>/</code>cf-sidenav<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title: "Properties and Styling",
                  description: `
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-sidenav [properties]="sidenav"<code>></code><code><</code><code>/</code>cf-sidenav<code>></code>
                    </pre>
                    <pre>
                      <code>
                        {
                         // <b>Core Properties</b>
                         id: string,                        // Instance ID of the component
                         enabledI18N: boolean,              // Enables component internationalization
                         draggable: boolean,                // Enables component drag and drop
                         notification: NotificationModel,   // Notification property object
                         compTemplate: string,              // Template name
                         display: boolean,                  // true or false Default: true
                         disable: boolean,                  // true or false Default: false
                         tooltip: any,                      // Tooltip on hover of the component
                         // <b>sidenav Properties</b> 
                         contentId: string,                 // <b>ng-template id (#)</b> inside component tags to be used as html for sidenav content section
                         leftSideId: string,                // <b>ng-template id (#)</b> inside component tags to be used as html for sidenav left side
                         rightSideId: string,               // <b>ng-template id (#)</b> inside component tags to be used as html for sidenav right side
                         leftSideMode: string,              // Opening mode. Can be: over, push, side. Default: over
                         rightSideMode: string,             // Opening mode. Can be: over, push, side. Default: over
                         fullHeight: boolean,               // If the sidenav must take height of parent container. Default: false
                         leftSideWidth: string,             // Width of left side. Not specified by default and will adjust to fit content
                         rightSideWidth: string,            // Width of right side. Not specified by default and will adjust to fit content
                        }
                      </code></pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-sidenav [styling]="mySidenavStyling"<code>></code><code><</code><code>/</code>cf-sidenav<code>></code>
                    </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn
                      <code>
                        {
                          // styling of the sidenav container
                          container: { class, dynamicClass },
                          // sidenav content element styling
                          content: { class, dynamicClass }, 
                          // Left side styling
                          leftSide: { class, dynamicClass }, 
                          // Right side styling
                          rightSide: { class, dynamicClass }, 
                        }
                      </code>
                    </pre>
                  `
                },
                {
                  title:"Templating System",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-sidenav by default is set to the <i>default template</i> under templates/default/sidenav-template.json</p>
                    <pre>
                      <code>
                        property: {
                          contentId: "",
                          leftSideId: "",
                          rightSideId: "",
                          leftSideMode: "over",
                          rightSideMode: "over",
                          fullHeight: false,
                          leftSideWidth: "",
                          rightSideWidth: "",
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one sidenav template it should be named: <b>sidenav-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-sidenav compTemplate=“customDirectory/sidenav-template.json”<code>></code><code><</code><code>/</code>cf-sidenav<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the sidenav-template.json </p>
                    <p> If you have more than one sidenav template defined, then one should be name <b>sidenav-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-sidenav compTemplate="customDirectory/my-custom-sidenav.json"<code>></code><code><</code><code>/</code>cf-sidenav<code>></code>
                    </pre>
                    <p>Where <i>my-custom-sidenav.json</i> is the custom name of the sidenav template file found under your custom directory</p>`
                }
              ]
            };
          break;
          case 'Avatar':
            this.componentData = {
              componentName: 'AvatarComponent',
              description: `
                <p>Avatar component is build using cf-icon and cf-image components and has 4 types:</p>
                <ul>
                  <li>name</li>
                  <li>text</li>
                  <li>icon</li>
                  <li>image</li>
                </ul>
                <p>Component has posibility to use avatars from remote users profiles such as:</p>
                <ul>
                  <li><b>Google</b>: requires user profile ID like <b>103055244388830425867</b>. It is after last slash in browser url of your Google+ profile page.</li>
                  <li><b>Facebook</b>: your profile ID can be found <a href="https://findmyfbid.com/" class="links" target="_blank">here</a>. Example: <b>1508319875</b>.</li>
                  <li><b>Skype</b>: by your Skype profile name. Example: <b>andriy</b>.</li>
                  <li><b>Github</b>: by your Github profile name. Example: <b>sweko</b>.</li>
                  <li><b>Gravatar</b>: by your Gravatar profile email or hash code. Example: <b>elmosbahihaithem@gmail.com</b> or <b>adde9b2b981a8083cf084c63ad86f753</b>.</li>
                  <li><b>Twitter</b>: by your Twitter profile name. Example: <b>StevenWilsonHQ</b>.</li>
                  <li><b>Vkontakte</b>: by your Vkontakte profile ID, which is after last slash in browser url of your profile page. Example: <b>210700286</b>.</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'avatar-1',
              demos:[
                {
                  title: "Avatar with icon and background",
                  component: CfDemoAvatar1,
                  inputs: { themeName: this.configuration.theme },
                },
                {
                  title: "Avatars with different types and styles",
                  component: CfDemoAvatar2,
                  inputs: { themeName: this.configuration.theme },
                },
                {
                  title: "Avatars with images from remote user profiles (like Facebook, Github, Skype, etc.)",
                  component: CfDemoAvatar3,
                  inputs: { themeName: this.configuration.theme },
                },
                {
                  title: "Avatar Template",
                  component: CfDemoAvatar4,
                  inputs: { themeName: this.configuration.theme },
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-avatar has a property model to configure it and a styling model to style it</p> 
                    <p>By default the avatar is packaged with default styling and properties so the component can simply be used in the following way:
                    <pre>
                        <code><</code>cf-avatar<code>></code><code><</code><code>/</code>cf-avatar<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1 - Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-avatar compTemplate="avatarTmpl"<code>></code><code><</code><code>/</code>cf-avatar<code>></code>
                    </pre>
                    <p>2 - Pass a property avatar model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-avatar [properties]="myAvatar"<code>></code><code><</code><code>/</code>cf-avatar<code>></code>
                    </pre>
                    <p>3 - Pass the properties attributes as seperate inputs to the avatar 
                    <pre>
                    <code><</code>cf-avatar type="icon" iconName="person"<code>></code><code><</code><code>/</code>cf-avatar<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title: "Properties and Styling",
                  description: `
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-avatar [properties]="myAvatar"<code>></code><code><</code><code>/</code>cf-avatar<code>></code>
                    </pre>
                    <pre>
                      <code>
                        {
                         // <b>Core Properties</b>
                         id: string,                        // Instance ID of the component
                         enabledI18N: boolean,              // Enables component internationalization
                         draggable: boolean,                // Enables component drag and drop
                         notification: NotificationModel,   // Notification property object
                         compTemplate: string,              // Template name
                         display: boolean,                  // true or false Default: true
                         disable: boolean,                  // true or false Default: false
                         tooltip: any,                      // Tooltip on hover of the component
                         // <b>avatar Properties</b> 
                         type: string,                      // Type of avatar. Can be: image, icon, text. Default: image.
                         name: string,                      // The name of the person from the initials of which the avatar will be generated, based on <b>charsNumber</b>
                         url: string,                       // Url for the image
                         text: string,                      // Text to be used as avatar
                         iconName: string,                  // Name of icon to be used for cf-icon
                         charsNumber: number,               // Number of initials simulators in the avatar. Default: 2.
                         color: string,                     // The color that will be applied to text or icons
                         size: any,                         // The size to be applied as the height and width of the avatar. Required if you want use your avatar from other sites (Facebook, Google, etc). Default: 70px.
                         width: any,                        // The width of the avatar. Has higher priority then <b>size</b>. Default: 70px.
                         height: any,                       // The height of the avatar. Has higher priority then <b>size</b>. Default: 70px.
                         fontSize: string,                  // Font size for the text (initials or custom text). Default: '30px'.
                         border: string,                    // Avatar border. Not specified by default.
                         borderRadius: string,              // Avatar border radius. Not specified by default.
                         background: string,                // Avatar background. Not specified by default.
                         backgroundImage: string,           // Avatar background-image. Not specified by default.
                         shadow: string,                    // Avatar shadow. Not specified by default.
                         facebookId: string,                // Facebook ID
                         googleId: string,                  // Google ID
                         twitterId: string,                 // Twitter Handle
                         vkontakteId: string,               // VK ID
                         skypeId: string,                   // Skype ID
                         gravatarId: string,                // email or md5 email related to gravatar
                         githubId: string,                  // Github ID
                        }
                      </code></pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-avatar [styling]="myAvatarStyling"<code>></code><code><</code><code>/</code>cf-avatar<code>></code>
                    </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn
                      <code>
                        {
                          // Styling properties for main avatar container
                          container: StylingModel,
                          // Styling properties for cf-image
                          image: ImageStylingModel 
                          // Styling properties for cf-icon
                          icon: IconStylingModel 
                          // Styling properties for name
                          name: StylingModel 
                          // Styling properties for text
                          text: StylingModel 
                        }
                      </code>
                    </pre>
                  `
                },
                {
                  title:"Templating System",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-avatar by default is set to the <i>default template</i> under templates/default/avatar-template.json</p>
                    <pre>
                      <code>
                        {
                          "property": {    
                            "type": "image",
                            "name": "A",
                            "text": "A",
                            "iconName": "person",
                            "url": "src/app/assets/images/material_avatars/elegant_man2_material.png",
                            "charsNumber": 2,
                            "color": "",
                            "size": "70px",
                            "width": "70px",
                            "height": "70px",
                            "fontSize": "30px",
                            "border": "",
                            "borderRadius": "",
                            "background": "",
                            "backgroundImage": "",
                            "shadow": "",
                            "facebookId": "",
                            "googleId": "",
                            "twitterId": "",
                            "vkontakteId": "",
                            "skypeId": "",
                            "gravatarId": "",
                            "githubId": ""
                          },
                          "style": {
                            "container": { "class": "", "dynamicClass": "" }
                          }
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one avatar template it should be named: <b>avatar-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-avatar compTemplate=“customDirectory/avatar-template.json”<code>></code><code><</code><code>/</code>cf-avatar<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the avatar-template.json </p>
                    <p> If you have more than one avatar template defined, then one should be name <b>avatar-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-avatar compTemplate="customDirectory/my-custom-avatar.json"<code>></code><code><</code><code>/</code>cf-avatar<code>></code>
                    </pre>
                    <p>Where <i>my-custom-avatar.json</i> is the custom name of the avatar template file found under your custom directory</p>`
                }
              ]
            };
          break;
          case 'JsonEditor':
            this.componentData = {
              componentName: 'JsonEditorComponent',
              description: `
                <p>Component is build on top of cf-treeview and also has it sub-component cf-json-editor-header for any custom html.</p>
                <p>Main options of component are:</p>
                <ul>
                  <li><b>data</b>: it is json object of any type and structure</li>
                  <li><b>lockKeys</b>: it means if all json keys names are editable (default: false)</li>
                  <li><b>showButtons</b>: it means how functional icon buttons for each row in editor are displayed (default: 'hover' - it means buttons will be shown on editor row hover, can be 'always' - means all buttons are displayed and can be 'select' - will be displayed when editor row is selected)</li>
                  <li><b>rowButtons</b>: it is an array for buttons names, according to which buttons will be displayed. All buttons are grouped into sections and structure is next:
                    <pre>
                      rowButtons: [
                        [ 'moveUp', 'moveDown' ],
                        [ 'indent', 'outdent' ],
                        [ 'clone', 'delete', 'insert' ]
                      ]
                    </pre>
                    <p>It means that for each row in editor it will be generated 3 groups of buttons with corresponding names and functionality together with basic default 'lock' button.</p>
                  </li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'json-editor-1',
              demos:[
                {
                  title: "Json editor with custom data object",
                  component: CfDemoJsonEditor1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "Styled Json Editor with components inside it cf-json-editor-header",
                  component: CfDemoJsonEditor2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: "Json Editor Template",
                  component: CfDemoJsonEditor3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                    <p>The cf-json-editor has a property model to configure it and a styling model to style it</p> 
                    <p>By default the json-editor is packaged with default styling and properties so the component can simply be used in the following way:
                    <pre>
                        <code><</code>cf-json-editor<code>></code><code><</code><code>/</code>cf-json-editor<code>></code>
                    </pre>
                    <p>To override any of the default properties, you can:</p>
                    <p>1 - Create a custom template and pass it as an input to the component: 
                    <pre>
                      <code><</code>cf-json-editor compTemplate="jsonEditor"<code>></code><code><</code><code>/</code>cf-json-editor<code>></code>
                    </pre>
                    <p>2 - Pass a property json-editor model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-json-editor [properties]="jsonEditor"<code>></code><code><</code><code>/</code>cf-json-editor<code>></code>
                    </pre>
                    <p>3 - Pass the properties attributes as seperate inputs to the json-editor 
                    <pre>
                    <code><</code>cf-json-editor [data]="myJsonObject"<code>></code><code><</code><code>/</code>cf-json-editor<code>></code>
                    </pre>
                    <p>The hierarchy of the component's configuration is in the following order:</p>
                    <p>- Inputs override Property Model<p>
                    <p>- Property Model overrides Custom Template<p>
                    <p>- Custom Template overrides Default Template<p>
                  `
                },
                {
                  title: "Properties and Styling",
                  description: `
                    <h4>Properties</h4>
                    <pre>
                      <code><</code>cf-json-editor [properties]="jsonEditor"<code>></code><code><</code><code>/</code>cf-json-editor<code>></code>
                    </pre>
                    <pre>
                      <code>
                        {
                         // <b>Core Properties</b>
                         id: string,                        // Instance ID of the component
                         enabledI18N: boolean,              // Enables component internationalization
                         draggable: boolean,                // Enables component drag and drop
                         notification: NotificationModel,   // Notification property object
                         compTemplate: string,              // Template name
                         display: boolean,                  // true or false Default: true
                         disable: boolean,                  // true or false Default: false
                         tooltip: any,                      // Tooltip on hover of the component
                         // <b>json-editor Properties</b> 
                         data: any,                         // JSON input to be converted into tree
                         lockKeys: boolean,                 // Whether to prevent keys from being edited. Default: false.
                         rowButtons: any[],                 // Array of buttons to be rendered per level
                         showButtons: string,               // Circumstances to show buttons in. Can be: 'hover', 'select' or 'always'.
                        }
                      </code></pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-json-editor [styling]="myJsonEditorStyling"<code>></code><code><</code><code>/</code>cf-json-editor<code>></code>
                    </pre>
                    <pre>
                      <i>dynamicClass</i>:  { "className1":"condition1", "className2":"condition2" }  // Object that takes name of css class as a string and condition
                      <i>class</i>: string                                                            // Name of the css class selector
                      <i>themeColor</i>: string                                                       // primary/accent/warn
                      <code>
                        {
                          // styling of the json-editor container
                          container: { class, dynamicClass },
                          // json-editor header styling
                          header: { class, dynamicClass }, 
                          // treeview styling
                          treeview: { class, dynamicClass }, 
                        }
                      </code>
                    </pre>
                  `
                },
                {
                  title:"Templating System",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" href="/guide/template">Template System</a></p>
                    <p>The cf-json-editor by default is set to the <i>default template</i> under templates/default/json-editor-template.json</p>
                    <pre>
                      <code>
                        "property": {
                          "showButtons": "hover",
                          "rowButtons": [
                            [ "moveUp", "moveDown" ],
                            [ "indent", "outdent" ],
                            [ "clone", "delete", "insert" ]
                          ]
                        }
                      </code>
                    </pre>
                    <p>In your custom template directory, if you have one json-editor template it should be named: <b>json-editor-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                      <code><</code>cf-json-editor compTemplate=“customDirectory/json-editor-template.json”<code>></code><code><</code><code>/</code>cf-json-editor<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the json-editor-template.json </p>
                    <p> If you have more than one json-editor template defined, then one should be name <b>json-editor-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-json-editor compTemplate="customDirectory/myCustomJsonEditor.json"<code>></code><code><</code><code>/</code>cf-json-editor<code>></code>
                    </pre>
                    <p>Where <i>my-custom-json-editor.json</i> is the custom name of the json-editor template file found under your custom directory</p>`
                }
              ]
            };
          break;
          default:
            console.error('Unknown component');
          break;
      }
    }

    ngOnInit(): void {
      this.setComponent("Toolbar");
    }
}
