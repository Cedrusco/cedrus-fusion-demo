import { Component, OnInit, Input } from '@angular/core';
import { Themes } from 'cedrus-fusion';
import { Configuration } from 'cedrus-fusion';

import { CfDemoButton1 } from '../demos/button/demo.button-1';
import { CfDemoButton2 } from '../demos/button/demo.button-2';
import { CfDemoButton3 } from '../demos/button/demo.button-3';
import { CfDemoButton4 } from '../demos/button/demo.button-4';
import { CfDemoButton5 } from '../demos/button/demo.button-5';
import { CfDemoIcon1 } from '../demos/icon/demo.icon-1';
import { CfDemoIcon2 } from '../demos/icon/demo.icon-2';
import { CfDemoIcon3 } from '../demos/icon/demo.icon-3';
import { CfDemoIcon4 } from '../demos/icon/demo.icon-4';
import { CfDemoIcon5 } from '../demos/icon/demo.icon-5';
import { CfDemoImage1 } from '../demos/image/demo.image-1';
import { CfDemoImage2 } from '../demos/image/demo.image-2';
import { CfDemoImage3 } from '../demos/image/demo.image-3';
import { CfDemoImage4 } from '../demos/image/demo.image-4';
import { CfDemoMenu1 } from '../demos/menu/demo.menu-1';
import { CfDemoMenu2 } from '../demos/menu/demo.menu-2';
import { CfDemoMenu3 } from '../demos/menu/demo.menu-3';
import { CfDemoMenu4 } from '../demos/menu/demo.menu-4';
import { CfDemoButtonMenu1 } from '../demos/button-menu/demo.button-menu-1';
import { CfDemoButtonMenu2 } from '../demos/button-menu/demo.button-menu-2';
import { CfDemoInput1 } from '../demos/input/demo.input-1';
import { CfDemoInput2 } from '../demos/input/demo.input-2';
import { CfDemoInput3 } from '../demos/input/demo.input-3';
import { CfDemoSelect1 } from '../demos/select/demo.select-1';
import { CfDemoSelect2 } from '../demos/select/demo.select-2';
import { CfDemoSelect3 } from '../demos/select/demo.select-3';
import { CfDemoCheckbox1 } from '../demos/checkbox/demo.checkbox-1';
import { CfDemoCheckbox2 } from '../demos/checkbox/demo.checkbox-2';
import { CfDemoCheckbox3 } from '../demos/checkbox/demo.checkbox-3';
import { CfDemoCheckbox4 } from '../demos/checkbox/demo.checkbox-4';
import { CfDemoRadio1 } from '../demos/radio/demo.radio-1';
import { CfDemoRadio2 } from '../demos/radio/demo.radio-2';
import { CfDemoRadio3 } from '../demos/radio/demo.radio-3';
import { CfDemoRadio4 } from '../demos/radio/demo.radio-4';
import { CfDemoSwitch1 } from '../demos/switch/demo.switch-1';
import { CfDemoSwitch2 } from '../demos/switch/demo.switch-2';
import { CfDemoSwitch3 } from '../demos/switch/demo.switch-3';
import { CfDemoSwitch4 } from '../demos/switch/demo.switch-4';
import { CfDemoCard1 } from '../demos/card/demo.card-1';
import { CfDemoDatatable1 } from '../demos/datatable/demo.datatable-1';
import { CfDemoDatatable2 } from '../demos/datatable/demo.datatable-2';
import { CfDemoList1 } from '../demos/list/demo.list-1';
import { CfDemoList2 } from '../demos/list/demo.list-2';
import { CfDemoCore1 } from '../demos/core/demo.core-1';
import { CfDemoCore2 } from '../demos/core/demo.core-2';
import { CfDemoCore3 } from '../demos/core/demo.core-3';
import { CfDemoForm1 } from '../demos/form/demo.form-1';
import { CfDemoTabs1 } from '../demos/tabs/demo.tabs-1';
import { CfDemoTabs2 } from '../demos/tabs/demo.tabs-2';
import { CfDemoTabs3 } from '../demos/tabs/demo.tabs-3';
import { CfDemoTabs4 } from '../demos/tabs/demo.tabs-4';
import { CfDemoWizard1 } from '../demos/wizard/demo.wizard-1';
import { CfDemoWizard2 } from '../demos/wizard/demo.wizard-2';
import { CfDemoWizard3 } from '../demos/wizard/demo.wizard-3';
import { CfDemoRating1 } from '../demos/rating/demo.rating-1';
import { CfDemoRating2 } from '../demos/rating/demo.rating-2';
import { CfDemoRating3 } from '../demos/rating/demo.rating-3';
import { CfDemoTreeview1 } from '../demos/treeview/demo.treeview-1';
import { CfDemoTreeview2 } from '../demos/treeview/demo.treeview-2';
import { CfDemoTreeview3 } from '../demos/treeview/demo.treeview-3';
import { CfDemoFab1 } from '../demos/fab/demo.fab-1';
import { CfDemoFab2 } from '../demos/fab/demo.fab-2';
import { CfDemoFab3 } from '../demos/fab/demo.fab-3';
import { CfDemoAlerts1 } from '../demos/alerts/demo.alerts-1';
import { CfDemoDialog1 } from '../demos/dialog/demo.dialog-1';
import { CfDemoDialog2 } from '../demos/dialog/demo.dialog-2';
import { CfDemoDialog3 } from '../demos/dialog/demo.dialog-3';
import { CfDemoBarChart1 } from '../demos/bar-chart/demo.bar-chart-1';
import { CfDemoBarChart2 } from '../demos/bar-chart/demo.bar-chart-2';
import { CfDemoBarChart3 } from '../demos/bar-chart/demo.bar-chart-3';
import { CfDemoBarChart4 } from '../demos/bar-chart/demo.bar-chart-4';
import { CfDemoLineChart1 } from '../demos/line-chart/demo.line-chart-1';
import { CfDemoAreaChart1 } from '../demos/area-chart/demo.area-chart-1';
import { CfDemoAreaChart2 } from '../demos/area-chart/demo.area-chart-2';
import { CfDemoPieChart1 } from '../demos/pie-chart/demo.pie-chart-1';
import { CfDemoPieChart2 } from '../demos/pie-chart/demo.pie-chart-2';
import { CfDemoCalendar1 } from '../demos/calendar/demo.calendar-1';
import { CfDemoGallery1 } from '../demos/gallery/demo.gallery-1';
import { CfDemoGallery2 } from '../demos/gallery/demo.gallery-2';
import { CfDemoGallery3 } from '../demos/gallery/demo.gallery-3';
import { CfDemoGallery4 } from '../demos/gallery/demo.gallery-4';
import { CfDemoToolbar1 } from '../demos/toolbar/demo.toolbar-1';
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
              description:`<p>The cf-menu represents a Menu with extended attributes such as icon and notifications</p>
                <ul>
                  <li></li>
                  <br/>
                  <li></li>
                  <br/>
                  <li></li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'menu-1',
              files:"menu,menu-item",
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
                    <p>Please Refer to <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                    <p>The cf-menu by default is set to the <i>default template</i></p>
                    <pre>
                      <code class="json">
                        properties: {
                          triggerIcon: {
                            name: "more_vert",
                            size: "30px"
                          },
                          menuItems: [
                            {   
                              buttonProperty: {		
                                label: "Profile",
                                iconProperty:{
                                  name: 'fa-user',
                                  size: '24px'
                                },
                                iconPosition:"left"
                              },
                              divider: true
                            },
                            {
                              buttonProperty:{		
                                label: "Settings",
                                iconProperty: {
                                  name: 'fa-cog',
                                  size: '24px'
                                },
                                iconPosition:"left"
                              },
                              divider: true
                            },
                            {
                              buttonProperty:{		
                                label: "Log Out",
                                iconProperty:{
                                  name: 'fa-sign-out',
                                  size: '24px'
                                },
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
                  <p>To override any of the default properties, you can:</p>
                  <p>1- Create a custom template and pass it as an input to the component: 
                  <pre>
                    <code><</code>cf-menu compTemplate=myMenuTemplate<code>></code><code><</code><code>/</code>cf-menu<code>></code>
                  </pre>
                  <p>2- Pass a property menu model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-menu properties="myMenuProperties"<code>></code><code><</code><code>/</code>cf-menu<code>></code>
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
                    <code><</code>cf-menu properties="myMenuProperties"<code>></code><code><</code><code>/</code>cf-menu<code>></code>
                  </pre>
                  <pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <code>
                    {
                      <b>display</b>: boolean,  // Default: True
                      <b>disable</b>: boolean,  // Default: False
                      menuItems: MenuItemModel, // Array of menu items with type MenuItemModel
                      triggerIcon: IconModel    //Refer to icon component
                    }
                    </code>
                    </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-menu styling="myMenuStyling"<code>></code><code><</code><code>/</code>cf-menu<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

                    <code>
                    {
                      //Container surrounding the Menu
                      container: {
                        dynamicClass,
                        class
                      },

                      //Check Icon Component
                      iconStyling: IconStylingModel,

                      menuItemStyling:{
                        container: {
                          dynamicClass,
                          class
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
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            } ;
          break;
          case 'Button':
            this.componentData = {
              componentName: 'ButtonComponent',
              description:`<p>The cf-button is build on top of the <a target="_blank" class='links' href='https://material.angular.io/components/button/overview'>MD Button</a> and extends it as following:</p>
                <ul>
                  <li>Rendering automatically any icon name passed from both <a target="_blank" class='links' href='http://fontawesome.io/icons/'>Font Awesome</a> and <a class='links' href='https://material.io/icons/'>Material Icons</a> with its position.</li>
                  <br/>
                  <li>Having a Waiting State</li>
                  <br/>
                  <li>Implementing the Template System of this library</li>
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
                },
                {
                  title:"Button Styling",
                  component: CfDemoButton2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
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
                    <p>Please Refer to <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                    <p>The cf-button by default is set to the <i>default template</i></p>
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
                      <code><</code>cf-button compTemplate=myButtonTemplate<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <p>2- Pass a property button model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-button properties="myButtonProperties"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <p>3- Pass the properties attributes as seperate inputs to the button 
                    <pre>
                    <code><</code>cf-button label="Like" name="favorite" disable="false"<code>></code><code><</code><code>/</code>cf-button<code>></code>
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
                      <code><</code>cf-button properties="mybuttonProperties"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                    <pre>
                      <b>attributes</b> in bold are exposed as separate inputs
                      <code>
                      {
                        <b>display</b>: boolean,         //Whether or not the button is visible. Default: true
                        <b>disable</b>: boolean,         //Whether the button is disabled. Default: false
                        <b>iconPosition</b>: string,     //The location of the button's icon. Default: 'left', Possible: 'left', 'right'
                        <b>label</b>: string,            //The text for the button
                        <b>iconProperty</b>: IconModel,  //see the documentation for Icon
                        waiting:{
                          value: boolean,         //Whether the button is waiting
                          disabled: boolean,      //Whether the button is disabled while waiting
                          iconProperty: IconModel //See Icon documentation
                        }
                      }
                      </code>
                      </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-button styling="mybuttonStyling"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                    </pre>
                      <pre>
                      <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                      <i>class</i>: string                         // Name of the css class selector
                      <i>themeColor</i>: string                    // primary/accent/warn

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
                    <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                    `
                }
              ]
            };
          break;
          case 'Fab':
            this.componentData = {
              componentName: 'FabComponent',
              description:`<p>The cf-fab is an implementation of the Floating Action Button as described in the Material Design language specifications. Each Fab component is composed of a trigger button (the large, primary button), which may display a number of smaller buttons when clicked., each of which should be given an action.  The properties of the Fab in general are defined by the CfFabModel, and each button of the fab is defined a CfFabButtonModel, so each constituent button may be customized. Options for the Fab include:
                <ul>
                  <li>Specify the direction of smaller action buttons</li>
                  <br/>
                  <li>Have the smaller action buttons shown or hidden by default</li>
                  <br/>
                  <li>Control whether the expanded buttons remain expanded or close when one is clicked</li>
                  <br/>
                  <li>Define the icon, action, tooltip, and tooltip location for each button</li>
                  <br/>
                  <li>Control whether each button is disabled or hidden</li>
                  <br/>
                  <li>Implementing the Template System of this library</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for demonstrations of the CfFab in action.</i></p>`,
              fileName: 'fab-1',
              demos: [{
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
                  <code><</code>cf-fab [compTemplate]=myFabTemplate<code>></code><code><</code><code>/</code>cf-fab<code>></code>
                </pre>
                <p>2- Pass a properties FabModel object where any attributes defined in the model will override the default 
                <pre>
                <code><</code>cf-fab properties="myFabProperties"<code>></code><code><</code><code>/</code>cf-fab<code>></code>
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
                  <code><</code>cf-fab properties="myFabProperties"<code>></code><code><</code><code>/</code>cf-fab<code>></code>
                </pre>
                <pre>
                  The FabModel. <b>attributes</b> in bold are exposed as separate inputs
                  <code>
                  {
                    direction: string,                   // Default: 'down'
                    showButtons: boolean,                // Default: false
                    stayOpened: boolean,                 // Default: false
                    triggerButton: FabButtonModel,       // Defines main fab button
                    actionButtons: FabButtonModel[],     // Defines sub fab buttons
                  }
                  </code>
                  </pre> 
                  <pre>
                  The FabButtonModel, used to define the individual buttons of the fab
                  <code>
                  {
                    display: boolean,        // Default: true
                    disable: boolean,        // Default: false
                    icon: IconModel,         // See Icon documentation
                    label: boolean,          // Default: false
                    labelPosition: string,   // Default: 'below', Valid: 'above', 'below', 'left', 'right'
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
                <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                `
              }]
            };
          break;
          case 'Icon':
            this.componentData = {
              componentName: 'IconComponent',
              description:`<p>The cf-icon is build on top of the <a target="_blank" class='links' href='https://material.angular.io/components/icon/overview'>MD Icon</a> and extends it as following:</p>
                <ul>
                  <li>CF Icon supports both <a target="_blank" class='links' href='http://fontawesome.io/icons/'>Font Awesome</a> and <a target="_blank" class='links' href='https://material.io/icons/'>Material Icons</a></li>
                  <br/>
                  <li>Having a toggle state</li>
                  <br/>
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
                },
                {
                  component: CfDemoIcon4,
                  title: "Icon Template",
                  description:`
                    <p>Please Refer to <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                    <p>The cf-icon by default is set to the <i>default template</i></p>
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
                    <code><</code>cf-icon compTemplate=myIconTemplate<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                  </pre>
                  <p>2- Pass a property icon model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-icon properties="myIconProperties"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
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
                    <code><</code>cf-icon properties="myIconProperties"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                  </pre>
                  <pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <code>
                    {
                      <b>display</b>: boolean,  // Default: True
                      <b>disable</b>: boolean,  // Default: False
                      <b>name</b>: string,      // Default: 'Home'
                      <b>size</b>: string,      // Default: '24px'
                      <b>value</b>: any,        // Value emitted on click
                      toggle: {               // Toggling icon state
                        name: string,         // Name of icon toggled
                        size: string,         // Size of icon toggled
                        value: any            // Value of icon toggled
                      }
                    }
                    </code>
                    </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-icon styling="myIconStyling"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

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
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
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
                    <p>Please Refer to <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
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
                      <code><</code>cf-image compTemplate=myImageTemplate<code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                    <p>2- Pass a property image model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-image properties="myImageProperties"<code>></code><code><</code><code>/</code>cf-image<code>></code>
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
                      <code><</code>cf-image properties="myImageProperties"<code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                    <pre>
                      <b>attributes</b> in bold are exposed as separate inputs
                      <code>
                        {
                          <b>display</b>: boolean,       // Default: True
                          <b>disable</b>: boolean,       // Default: False
                          <b>url</b>: string,            //URL for the image
                          <b>label</b>: string,          //The caption for the image
                          <b>labelPosition</b>: string,  //The position of the caption, Default: 'bottom' Options:'bottom','left','right','top'
                        }
                      </code>
                    </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-image styling="myImageStyling"<code>></code><code><</code><code>/</code>cf-image<code>></code>
                    </pre>
                      <pre>
                      <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                      <i>class</i>: string                         // Name of the css class selector
                      <i>themeColor</i>: string                    // primary/accent/warn

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
                <p>CfGallery Component has three main parts to display images and fullscreen working mode. Main parts are:<p>
                <ul>
                <li>main block to preview current image</li>
                <li>thumbnails part with all images list</li>
                <li>popup element to open current image with it title</li>
                </ul>
                <p>To display gallery it is needed array with images and object with gallery options (which is optional, because gallery automatically is using options from default template in file: <b>/templates/default/gallery.template.json</b>)</p>
                <p>Each image it is an object with 4 properties:</p>
                <ul>
                <li><b>small</b> - image url address to be used in thumbnails</li>
                <li><b>medium</b> - image url address to be used in main image block</li>
                <li><b>big</b> - image url address to be used in preview</li>
                <li><b>description</b> - description text to be used in preview</li>
                </ul>  
                <p>Gallery has long list of diferent options and it is described in API Reference.</p>            
                <p>Here it is gallery with basic standard options:</p>`,
              fileName: 'gallery-1',
              demos:[
                {
                  title:"Basic usage with default template",
                  component: CfDemoGallery1,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title:"Gallery with template from project1 template folder",
                  component: CfDemoGallery2,
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
                    <code><</code>cf-gallery [compTemplate]=myGalleryTemplate<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
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
<b>attributes</b> in bold are exposed as separate inputs  
<pre>
  {
    <b>display</b>: boolean,       // Default: true
    <b>images</b>: array,          // Default: [] - each array element is an object of type GalleryModel.image
    <b>options</b>: object,        // Default: object with default properties from GalleryModel.options
  }
</pre>  
<h4>Styling</h4>
<pre>
  <code><</code>cf-gallery [styling]="myGalleryStyling"<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
</pre>
<pre>
  {
    // styling of the gallery container
    container: {
      dynamic class: function() -> string, //function that returns a string of the name of the class
      class: string //name of the class specified in you scss/css file
    }
  }
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
                },
                {
                  title:"Templating System",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                    <p>The cf-gallery by default is set to the <i>default template</i></p>
<pre>
  <code>
    property: {
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
                    <p>Where <i>my-custom-gallery.json</i> is the custom name of the gallery template file found under your custom directory</p>`
                }
              ]
            };
          break;
          case 'Input':
            this.componentData = {
              componentName: 'InputComponent',
              description: `<p>cf-input is a basic HTML input, wrapped in the  md-input-container. Its main features include:</p>
                <ul>
                  <li>Specify password or text type</li>
                  <br/>
                  <li>Display an icon alongside the input text</li>
                  <br/>
                  <li>Define a hint to be displayed for the user</li>
                  <br/>
                  <li>May define a hint to be displayed for the user</li>
                  <br/>
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
                  title: "Password Type",
                  component: CfDemoInput2,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title: "Input",
                  component: CfDemoInput3,
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
                    <code><</code>cf-input [compTemplate]=myInputTemplate<code>></code><code><</code><code>/</code>cf-input<code>></code>
                  </pre>
                  <p>2- Pass a property input model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-input properties="myInputProperties"<code>></code><code><</code><code>/</code>cf-input<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the input 
                  <pre>
                  <code><</code>cf-input placeholder="Hello world" disable="true" <code>></code><code><</code><code>/</code>cf-input<code>></code>
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
                    <code><</code>cf-input properties="myInputProperties"<code>></code><code><</code><code>/</code>cf-input<code>></code>
                  </pre>
                  <pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <code>
                    {
                      <b>display</b>: boolean,  // Default: True
                      <b>disable</b>: boolean,  // Default: False
                      <b>type</b>: string,      // Default: 'text', Valid: 'text', 'password'
                      prefix: string,           // Text displayed before the input
                      suffix: string,           // Text displayed after the input
                      maxlength: string,        // Default: '10'
                      dividerColor: string,     // The color of the divider
                      menu: MenuModel,          // See the Menu documentation
                      icon: IconModel,          // See the Icon documentation
                      iconPosition: string,     // Default: 'left', Valid 'left', 'right'
                      hint: {
                        text: string,           // Text of the hint; may be set with the hintText input
                        align: string,          // Default: 'start', Valid: 'start', 'end'
                      }
                    }
                    </code>
                  </pre>
                  <pre>
                    <code><</code>cf-input styling="myInputStyling"<code>></code><code><</code><code>/</code>cf-input<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

                    <code>
                    {
                      iconStyling: IconStylingModel, // See Icon documentation
                      menuStyling: MenuStylingModel, // See Menu documentation,
                      container: {
                        dynamicClass,
                        class
                      },
                      input: {
                        dynamicClass,
                        class,
                        themeColor
                      },
                      hint: {
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
                  <p>To set the theme color of the input, you have to set the <i>themeColor</i> property in the <i>styling.input</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Select':
            this.componentData = {
              componentName: 'SelectComponent',
              description: 'A select allows the user to pick from several items in a dropdown list. It includes an optional filter to make it easier to find a given selection.',
              fileName: 'select-1',
              demos: [
                {
                  title: "Basic Usage with filter",
                  component: CfDemoSelect1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Select with HTML items",
                  component: CfDemoSelect2,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title:"Select to modify form",
                  component: CfDemoSelect3,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                }
              ],
              docs:[
                {
                  title: "Model",
                  description: "<pre>SelectModel\n" +
                      "<code>{\n</code>" +
                      "<code>    items: 'SelectItemModel[], //The input type. Default: 'text'\n</code>" +
                      "<code>    selected: 'string', //The selected item\n</code>" +
                      "<code>    placeholder: string, //Placeholder text for the select\n</code>" +
                      "<code>    showFilter: boolean, //Whether a filter appears for the select items\n</code>" +
                      "<code>    required: boolean, //Whether the field is required\n</code>" +
                      "<code>}</code>\n" +
                      "SelectItemModel\n" +
                      "<code>{\n</code>" +
                      "<code>    itemValue: string, //The value of the select when this item is selected'\n</code>" +
                      "<code>    itemLabel: 'string', //The displayed text for this item\n</code>" +
                      "<code>}</code></pre>\n"
                }
              ]
            };
          break;
          case 'Checkbox':
            this.componentData = {
              componentName: 'CheckboxComponent',
              description: 'A checkbox which may be checked or not. When in a group, the maximum and minimum number of checkboxes may be specified. A text label or any HTML may be connected to the checkbox and clicked to select it.',
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
                  <code><</code>cf-checkbox properties="myCheckboxProperties"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the checkbox 
                  <pre>
                  <code><</code>cf-checkbox itemPosition="before" [(checked)]="true" disable="true" <code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
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
                    <code><</code>cf-checkbox properties="myCheckboxProperties"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                  </pre>
                  <pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <code>
                    {
                      <b>display</b>: boolean,  // Default: True
                      <b>disable</b>: boolean,  // Default: False
                      <b>value</b>: string,      // Default: '', Value emitted on click
                      <b>item</b>: any,      // Default: 'Checkbox', An item displayed alongside the control. Usually a string or HTML template.
                      <b>checked</b>: boolean,        // Default: False
                      <b>itemPosition</b>: string,    // Default: 'after', The location of the item relative to the control: 'before' or 'after'
                    }
                    </code>
                    </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-checkbox styling="myCheckboxStyling"<code>></code><code><</code><code>/</code>cf-checkbox<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

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
                  <p>or using *ngFor as following:</p>
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
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Radio':
            this.componentData = {
              componentName: 'SelectableModel',
              description: 'A radio button. By convention, in a Group of radio buttons exactly one must be selected and it can be used as a stand alone component. A text label or any HTML may be connected to the radio button and clicked to select it.',
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
                  <code><</code>cf-radio properties="myRadioProperties"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the radio 
                  <pre>
                  <code><</code>cf-radio itemPosition="before" [(checked)]="true" disable="true" <code>></code><code><</code><code>/</code>cf-radio<code>></code>
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
                    <code><</code>cf-radio properties="myRadioProperties"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                  </pre>
                  <pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <code>
                    {
                      <b>display</b>: boolean,  // Default: True
                      <b>disable</b>: boolean,  // Default: False
                      <b>value</b>: string,      // Default: '', Value emitted on click
                      <b>item</b>: any,      // Default: 'Radio', An item displayed alongside the control. Usually a string or HTML template.
                      <b>checked</b>: boolean,        // Default: False
                      <b>itemPosition</b>: string,    // Default: 'after', The location of the item relative to the control: 'before' or 'after'
                    }
                    </code>
                    </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-radio styling="myRadioStyling"<code>></code><code><</code><code>/</code>cf-radio<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

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
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Switch':
            this.componentData = {
              componentName: 'SwitchComponent',
              description: 'A switch that can be toggled on or off. When put in a Group, the number of required switches or maximum "on" switches allowed may be specified. A text label or any HTML may be connected to the switch and clicked to select it.',
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
                  title:"Switch Styles",
                  component: CfDemoSwitch4,
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
                  <code><</code>cf-switch properties="mySwitchProperties"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the switch 
                  <pre>
                  <code><</code>cf-switch itemPosition="before" [(checked)]="true" disable="true" <code>></code><code><</code><code>/</code>cf-switch<code>></code>
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
                    <code><</code>cf-switch properties="mySwitchProperties"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                  </pre>
                  <pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <code>
                    {
                      <b>display</b>: boolean,  // Default: True
                      <b>disable</b>: boolean,  // Default: False
                      <b>value</b>: string,      // Default: '', Value emitted on click
                      <b>item</b>: any,      // Default: 'Switch', An item displayed alongside the control. Usually a string or HTML template.
                      <b>checked</b>: boolean,        // Default: False
                      <b>itemPosition</b>: string,    // Default: 'after', The location of the item relative to the control: 'before' or 'after'
                    }
                    </code>
                    </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-switch styling="mySwitchStyling"<code>></code><code><</code><code>/</code>cf-switch<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

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
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
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
          case 'Datatable':
            this.componentData = {
              componentName: 'DatatableComponent',
              description:`<p>Datatable component is built using <a class="links" href="https://github.com/swimlane/ngx-datatable" target="_blank"><b>ngx-datatable</b></a> library, <b>CfIcon</b> and <b>CfInput</b> components.</p>
                <p>It has such possibilities:</p>
                <ul>
                  <li>Defining arrays for rows data and columns names/types<br /><br /></li>
                  <li>Selectable system on rows (disabled by default)<br /><br /></li>
                  <li>Filtering system (disabled by default). It is based on <b>CfInput component</b> so it is possible to change it like standard CfInput component<br /><br /></li>
                  <li>Sorting system with sorting by many columns (disabled by default). Each column can be in one of three sorting states:
                    <ul>
                      <li><b>asc</b> - rows are sorted in ascending direction</li>
                      <li><b>desc</b> - rows are sorted in descending direction</li>
                      <li><b>undefined</b>(default) - rows are not sorted</li>
                    </ul>
                    <br /><br />
                  </li>
                  <li>Columns definition with they templates. Each column must be represented inside <b>cf-datatable</b> html tags like this:
                    <pre>
                      <code><</code>cf-datatable-column name="Column Name"<code>></code>
                        <code><</code>ng-template #cellTemplate let-cellData="cfRow"<code>></code>
                          <code><</code>span<code>></code>{{cellData.name}}<code><</code><code>/</code>span<code>></code>
                        <code><</code><code>/</code>ng-template<code>></code>
                      <code><</code>cf-datatable-column<code>></code>
                    </pre>
                    where <b>let-cellData="cfRow"</b> - is declarating of variable <b>cellData</b> with value <b>cfRow</b>, which is row json object and is seen only inside that <b>ng-template</b> chunk. Also that ng-template must have required attribute <b>#cellTemplate</b> by which Angular is taking template to render it in datatable cell after.<br /><br />
                  </li>
                  <li>Row details templating system together with ngx-datatable expandable system. Open/close icons for all rows are <b>CfIcon</b>'s components with abbility to change them. Example of setting row details template:
                    <pre>
                      <code><</code>ng-template #detailsTemplate let-detailsData="cfRow"<code>></code>
                        <code><</code>span<code>></code>{{detailsData.name}}<code><</code><code>/</code>span<code>></code>
                      <code><</code><code>/</code>ng-template<code>></code>
                    </pre>
                    where <b>let-detailsData="cfRow"</b> - is declarating of variable <b>detailsData</b> with value <b>cfRow</b>, which is row json object and is seen only inside that <b>ng-template</b> chunk. Also that ng-template must have required attribute <b>#detailsTemplate</b> by which Angular is taking template to render it in datatable row details after.
                  </li>
                <ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'datatable-1',
              demos:[
                {
                  title: 'Basic usage with default template',
                  component: CfDemoDatatable1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },
                {
                  title: 'Datatable with customized options and diferent row details templates',
                  component: CfDemoDatatable2,                  
                  inputs: {
                    themeName: this.configuration.theme
                  },
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
                      <code><</code>cf-datatable compTemplate=myDatatableTemplate<code>></code><code><</code><code>/</code>cf-datatable<code>></code>
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
  <b>attributes</b> in bold are exposed as separate inputs, read API Reference for more information
  {
    <b>display</b>: boolean,                  
    <b>rows</b>: array,                       // It is an array with data for rows of any type.
    <b>rowHeight</b>: number,                 // It is height of each row. Default: 50. Required when rows are <b>expandable</b>.
    <b>limit</b>: number,                     // Means rows quontity per page. Default: undefined.
    <b>filterable</b>: boolean,               // It means if filtering input must be shown. Default: false.
    <b>filterProperty</b>: InputModel,        // CfInput component for the filter. More info in API Reference.
    <b>expandable</b>: boolean,               // It means if to build or not row details. Default: false.
    <b>detailsHeight</b>: number,             // CfIcon component for the expanding icon. More info in API Reference.
    <b>expandingIconProperty</b>: IconModel,  // CfIcon component for the collapsing icon. More info in API Reference.
    <b>collapsingIconProperty</b>: IconModel, // It is number value and mean details row height in pixels. Default: 130.
    <b>selectable</b>: boolean,               // It means if to show or not row selection checkboxes. Default: false.
    <b>sorted</b>: array,                     // Array with sorting objects. Default: []. More info in API Reference.
    <b>selected</b>: array,                   // Array for selected items.
  }
</pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-datatable [styling]="myDatatableStyling"<code>></code><code><</code><code>/</code>cf-datatable<code>></code>
                    </pre>
<pre>
  dynamicClass: function() -> string,  // Function that returns name of the class
  class: string                        // Name of the css class selector
  {
  // Container surrounding all datatable elelemnts
  container: {
    dynamicClass,
    class
  },
  // Top section for filtering/expanding
  topOptions: {
    dynamicClass,
    class
  },
  // Filter element
  inputFilter: InputStylingModel, //refer to input component
  // Expanding icon styling
  expandingIcon: IconStylingModel, //refer to icon component
  // Collapsing icon styling
  collapsingIcon: IconStylingModel, //refer to icon component
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
  }
</pre>`
                },
                {
                  title:"Templating System",
                  description:`
                  <p>Please Refer to <a target="_blank" class="links" _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                  <p>The cf-datatable by default is set to the <i>default template</i></p>
<pre>{
  "property": {
    "rows": [],
    "rowHeight": 50,
    "limit": 3,
    "filterable": false,
    "filterProperty": { "placeholder": "Filter", "iconProperty": { "name": "filter_list", "size": "20px" } },
    "expandable": false,
    "detailsHeight": 130,
    "expandingIconProperty": { "name": "fa-expand", "size": "16px" },
    "collapsingIconProperty": { "name": "fa-compress", "size": "16px" },
    "selectable": false,
    "sorted": [],
    "selected": []
  },
  "style": {
    "inputFilter": {
      "iconStyling": { "icon": { "themeColor": "primary" } }
    },
    "expandingIcon": { "icon": { "themeColor": "primary", "class": "rotated" } },
    "collapsingIcon": { "icon": { "themeColor": "primary", "class": "rotated" } }
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
              ]
            };
          break;
          case 'List':
            this.componentData = {
              componentName: 'ListComponent',
              description:`<p>The Cf-List allows you to create a list using statically or dynamically defined items (or both). Each <em>cf-list</em> contains a number of <em>cf-item</em>s, which will be presented with several options that the user can pass in.</p>
                <ul>
                  <li>Items can be given checkboxes and the list will track items are cehcked</li>
                  <br/>
                  <li>Each item can be given a "details" section that is only displayed when expanded</li>
                  <br/>
                  <li>List items can include any HTML you like</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'list-1',
              demos:[
                {
                  title:"Dynamic List",
                  component: CfDemoList1,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                },
                {
                  title:"Manual List",
                  component: CfDemoList2,
                  description:`
                    <p>Please Refer to <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                    <p>The cf-list and cf-item by default are set to the <i>default template</i></p>
                    <p>In your custom template directory, if you have one list template it should be named: <b>list-template.json</b><p>
                    <p>To reference that file you can either name it explicitly like this:</p>
                    <pre>
                    <code><</code>cf-list [compTemplate]=“customDirectory/list-template.json”<code>>
                      <code><</code>cf-item [compTemplate]=“customDirectory/item-template.json”<code>></code><code><</code><code>/</code>cf-item<code>></code>
                    </code><code><</code><code>/</code>cf-list<code>></code>
                    </pre>
                    <p> Or by just specifying the template directory, which by default will set the list-template.json </p>
                    <p> If you have more than one list template defined, then one should be name <b>list-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
                    <pre>
                      <code><</code>cf-list [compTemplate]="customDirectory/my-custom-list.json"<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>
                    <p>Where <i>my-custom-list.json</i> is the custom name of the list template file found under your custom directory</p>
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
                  <p>The cf-list has a property model to configure it and a styling model to style it</p> 
                  <p>By default the list is packaged with default styling and properties so the component can simply be used in the following way : 
                  <pre>
                      <code><</code>cf-list<code>></code><code><</code>cf-item<code>></code><p>Hello World</p><code><</code><code>/</code>cf-item<code>></code><code><</code><code>/</code>cf-list<code>></code>
                  </pre>
                  <p>To override any of the default properties, you can:</p>
                  <p>1- Create a custom template and pass it as an input to the component: 
                  <pre>
                    <code><</code>cf-list [compTemplate]=myListTemplate<code>></code><code><</code>cf-item<code>></code><p>Hello World</p><code><</code><code>/</code>cf-item<code>></code><code><</code><code>/</code>cf-list<code>></code>
                  </pre>
                  <p>2- Pass a property list model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-list properties="myListProperties"<code>></code><code><</code>cf-item<code>></code><p>Hello World</p><code><</code><code>/</code>cf-item<code>></code><code><</code><code>/</code>cf-list<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the list 
                  <pre>
                  <code><</code>cf-list name="favorite" disable="true" <code>></code><code><</code>cf-item<code>></code><p>Hello World</p><code><</code><code>/</code>cf-item<code>></code><code><</code><code>/</code>cf-list<code>></code>
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
                    <code>
                    {
                      title: string,  // The title of the list
                    }
                    </code>
                    </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-list styling="myListStyling"<code>></code><code><</code>cf-item styling="myItemStyling"<code>></code><p>Hello World</p><code><</code><code>/</code>cf-item<code>></code><code><</code><code>/</code>cf-list<code>></code>
                  </pre>
                  <h5>ListStylingModel</h5>
                  <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn
                    <code>
                    {
                      container: {
                        dynamicClass,
                        class
                      },
                      title: {
                        dynamicClass,
                        class,
                        themeColor
                      }
                    }
                    </code>
                  </pre>
                  <h5>ItemStylingModel</h5>
                  <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

                    <code>
                    {
                      container: {
                        dynamicClass,
                        class
                      }
                      item: {
                        dynamicClass,
                        class,
                        themeColor
                      },
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
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
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
              description: `<p>cf-rating is a numbered rating, displayed using highlighted icons. Its main features include:</p>
                <ul>
                  <li>Custom icons--hearts, stars, thumbs-ups, or anything else</li>
                  <br/>
                  <li>Display icons vertically or horizontally and count from left, right, top, or bottom</li>
                  <br/>
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
                    <code><</code>cf-rating [compTemplate]=myRatingTemplate<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                  </pre>
                  <p>2- Pass a property rating model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-rating properties="myRatingProperties"<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate ratings to the rating 
                  <pre>
                  <code><</code>cf-rating<code>></code><code><</code><code>/</code>cf-rating<code>></code>
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
                    <code><</code>cf-rating properties="myRatingProperties"<code>></code><code><</code><code>/</code>cf-rating<code>></code>
                  </pre>
                  <pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <code>
                    {
                      <b>display</b>: boolean,  // Default: true
                      <b>disable</b>: boolean,  // Default: false
                      label: string,            // Text label for the rating
                      icon: string,             // Name of the md or cf icon to be used
                      value: number,            // Current number value of the rating
                      max: number,              // Total number of icons shown, maximum value
                      countFromEnd: boolean,    // Whether to count from the opposite of the usual end
                      iconsVertical: boolean,   // Whether to display the icons vertically
                    }
                    </code>
                  </pre>
                  <pre>
                    <code><</code>cf-input styling="myInputStyling"<code>></code><code><</code><code>/</code>cf-input<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

                    <code>
                    {
                      icon: IconStylingModel, // See Icon documentation
                      container: {
                        dynamicClass,
                        class
                      },
                      label: {
                        dynamicClass,
                        class,
                        themeColor
                      },
                      item: {
                        dynamicClass,
                        class,
                        themeColor
                      },
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
                  <p>To set the theme color of the rating, you have to set the <i>themeColor</i> property in the <i>styling.input</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Tabs':
            this.componentData = {
              componentName: 'TabsComponent',
              description:`<p>CfTabs is composed of two parts, a <em>cf-tabs</em> element that defines the whole and the <em>cf-tabs-card</em>s that define each tab. Together they provide a convenient way to display information or provide functionality divided in manner of your choosing.</p>
                <ul>
                  <li>The tabs component may number each tab with an icon or a text prefix</li>
                  <br/>
                  <li>You may defined the header of each tab card</li>
                  <br/>
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
                  title: "Tabs component with button navigation",
                  component: CfDemoTabs2,
                  inputs: {
                    },
                  },
                  {
                    title: "Tabs component with disableable tab",
                    component: CfDemoTabs3,
                    inputs: {
                    },
                },
                {
                  title: "Dynamic order tabs",
                  component: CfDemoTabs4,
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
                    <code><</code>cf-tabs [compTemplate]=myTabsTemplate<code>></code><code><</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs<code>></code>
                  </pre>
                  <p>2- Pass a property tabs model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-tabs properties="myTabsProperties"<code>></code><code><</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the tabs 
                  <pre>
                  <code><</code>cf-tabs name="favorite" disable="true" <code>></code><code><</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs<code>></code>
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
                    <code><</code>cf-tabs properties="myTabsProperties"<code>></code><code><</code><code>/</code>cf-tabs<code>></code>
                  </pre>
                  <h5>TabsModel</h5>
                  <pre>
                    <code>
                    {
                      showCardNumberAsIcon: boolean,
                      showCardNumberAsPrefix: boolean,
                    }
                    </code>
                  </pre>
                  <h5>TabsCardsModel</h5>
                  <pre>
                    <code>
                    {
                      header: string,      // The text to show on the tab
                    }
                    </code>
                  </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-tabs styling="myTabsStyling"<code>></code><code><</code>cf-tabs-card styling="myTabsCardStyling"<code>></code><code><</code><code>/</code>cf-tabs-card<code>></code><code><</code><code>/</code>cf-tabs<code>></code>
                  </pre>
                  <h5>TabsStylingModel</h5>
                  <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn
                    <code>
                    {
                      container: {
                        dynamicClass,
                        class
                      }
                    }
                    </code>
                  </pre>
                  <h5>TabsCardStylingModel</h5>
                  <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

                    <code>
                    {
                      header: ButtonStylingModel, // See Button documentation
                      container: {
                        dynamicClass,
                        class
                      }
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
                  </pre>
                  `
                },
                {
                  title:"Theming",
                  description:`
                  <p>CF Components will automatically apply the application’s defined theme</p>
                  <p>To define the theme color, user needs to pass it to the component’s styling model under themeColor</p>
                  <p>Options: <i>primary, accent, warn</i></p>
                  <p>To set the theme color of the tabs, you have to set the <i>themeColor</i> property in the <i>styling.icon</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Wizard':
            this.componentData = {
              componentName: 'WizardComponent',
              description:`<p>CfWizard is composed of two parts, a <em>cf-wizard</em> element that defines the whole and the <em>cf-wizard-step</em>s that define each step. Together they allow you to guide the user through a series of steps.</p>
                <ul>
                  <li>The cf-wizard-step component may number each tab with an icon or a text prefix</li>
                  <br/>
                  <li>You may check if a given wizard step is valid</li>
                  <br/>
                  <li>You may customize the wizard's buttons with an IconModel</li>
                  <br/>
                  <li>You may defined the header of each wizard step</li>
                  <br/>
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
                  title: "Wizard that responds with information",
                  component: CfDemoWizard2,
                  inputs: {
                  },
                },
                {
                  title: "Wizard with validity feedback",
                  component: CfDemoWizard3,
                  inputs: {
                  },
                }
              ],
              docs:[
                {
                  title:"Usage",
                  description:`
                  <p>The cf-wizard and cf-wizard-card have a property model to configure it and a styling model to style it</p> 
                  <p>By default the cf-wizard is packaged with default styling and properties so the component can simply be used in the following way : 
                  <pre>
                      <code><</code>cf-wizard<code>></code><code><</code>cf-wizard-card<code>></code><code><</code><code>/</code>cf-wizard-card<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                  </pre>
                  <p>To override any of the default properties, you can:</p>
                  <p>1- Create a custom template and pass it as an input to the component: 
                  <pre>
                    <code><</code>cf-wizard [compTemplate]=myWizardTemplate<code>></code><code><</code>cf-wizard-card<code>></code><code><</code><code>/</code>cf-wizard-card<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                  </pre>
                  <p>2- Pass a property wizard model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-wizard properties="myWizardProperties"<code>></code><code><</code>cf-wizard-card<code>></code><code><</code><code>/</code>cf-wizard-card<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                  </pre>
                  <p>3- Pass the properties attributes as seperate inputs to the wizard 
                  <pre>
                  <code><</code>cf-wizard name="favorite" disable="true" <code>></code><code><</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
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
                    <code><</code>cf-wizard properties="myWizardProperties"<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                  </pre>
                  <h5>WizardModel</h5>
                  <pre>
                    <code>
                    {
                      showStepNumberAsIcon: boolean,
                      showStepNumberAsPrefix: boolean,
                      previousButton: ButtonModel,
                      nextbutton: ButtonModel,
                      finishButton: ButtonModel
                    }
                    </code>
                  </pre>
                  <h5>WizardStepModel</h5>
                  <pre>
                    <code>
                    {
                      header: string,   // The text to show on the tab
                      isValid: boolean  // Whether the step is valid
                    }
                    </code>
                  </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code><</code>cf-wizard styling="myWizardStyling"<code>></code><code><</code>cf-wizard-step styling="myWizardStepStyling"<code>></code><code><</code><code>/</code>cf-wizard-step<code>></code><code><</code><code>/</code>cf-wizard<code>></code>
                  </pre>
                  <h5>WizardStylingModel</h5>
                  <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn
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
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

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
                  <p>To set the theme color of the wizard, you have to set the <i>themeColor</i> property in the <i>styling.icon</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Treeview':
            this.componentData = {
              componentName: 'TreeviewComponent',
              description:`<p>The cf-treeview component displays a set of items, which may have children and may be selectable. Selected items are available by their assigned ID.</p>
                <p>Main Features are:</p>
                <ul>
                  <li>Selectable items</li>
                  <br/>
                  <li>Selected items are available by their assigned ID</li>
                  <br/>
                  <li>Draagable items to rearrange order of nodes</li>
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
                      <code><</code>cf-treeview compTemplate=myTreeViewTemplate<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
                    </pre>
                    <p>2- Pass a property TreeView model object where any attributes defined in the model will override the default 
                    <pre>
                    <code><</code>cf-treeview properties="myTreeViewProperties"<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
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
                      <code><</code>cf-treeview properties="myTreeViewProperties"<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
                    </pre>
                    <pre>
                      <b>attributes</b> in bold are exposed as separate inputs
                      <code>
                      {
                        <b>display</b>: boolean,      // Whether or not the treeview is visible. Default: true
                        <b>disable</b>: boolean,      // Whether the treeview is disabled. Default: false
                        items: [],                    // Array of items to display          
                        options:{
                          idField: string,            // Key in the items array to refer to as the id of the item Default: 'id'
                          displayField: string,       // Key in the items array to refer to as the display of the item Default: 'name'
                          childrenField: string,      // Key in the items array to refer to as the id of the item Default: 'children'
                          isExpandedField: string,    // Key in the items array to refer to as the id of the item Default: 'expanded'
                          selectable: boolean,        // Whether the items are selectable or not Default: true
                          allowDrag: boolean,         // Whether the items are draggable or not Default: true
                          animateExpand: boolean      // Enable or disable animation Default: false
                        }
                      }
                      </code>
                      </pre>  
                    <h4>Styling</h4>
                    <pre>
                      <code><</code>cf-treeview styling="mytreeviewStyling"<code>></code><code><</code><code>/</code>cf-treeview<code>></code>
                    </pre>
                      <pre>
                      <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                      <i>class</i>: string                         // Name of the css class selector
                      <i>themeColor</i>: string                    // primary/accent/warn

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
                    <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
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
                    <p>Please Refer to <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                    <p>The cf-treeview by default is set to the <i>default template</i></p>
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
              description: 'This example shows Alerts component with extended options.',
              fileName: 'alerts-1',
              demos:[
                {
                  component: CfDemoAlerts1,
                  inputs: {
                  },
                }
              ]
            };
          break;
          // case 'Dialog':
          //   this.componentData = {
          //     componentName: 'DialogComponent',
          //     description: 'This example shows the CfDialog component usage.',
          //     fileName: 'dialog-1',
          //     demos:[
          //       {
          //         title: "Several types of dialog",
          //         component: CfDemoDialog1,
          //         inputs: {
          //         },
          //       },
          //       {
          //         title: "Dialog with wizard",
          //         component: CfDemoDialog2,
          //         inputs: {
          //         },
          //       },
          //       {
          //         title: "Dialog with inputs",
          //         component: CfDemoDialog3,
          //         inputs: {
          //         },
          //       }
          //     ]
          //   };
          // break;
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
                    <code><</code>cf-bar-chart [compTemplate]=myBarChartTemplate<code>></code><code><</code><code>/</code>cf-bar-chart<code>></code>
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
  <b>colorScheme</b>: ChartsColorScheme, // Array with string css color values. Default: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'].
  <b>showXAxis</b>: boolean,             // If to show the x axis. Default: true.
  <b>showYAxis</b>: boolean,             // If to show the y axis. Default: true.
  <b>showXAxisLabel</b>: boolean,        // If to show the x axis label. Default: true.
  <b>showYAxisLabel</b>: boolean,        // If to show the y axis label. Default: true.
  <b>xAxisLabel</b>: string,             // The x axis label
  <b>yAxisLabel</b>: string,             // The y axis label
  <b>orientation</b>: string,            // Horizontal or vertical bar chart orientation. Default: 'vertical'.
  <b>grouped</b>: boolean,               // If to show bar chart in grouped mode. Default: false.
}</pre>  
<h4>Styling</h4>
<pre>
  <code><</code>cf-bar-chart [styling]="myBarChartStyling"<code>></code><code><</code><code>/</code>cf-bar-chart<code>></code>
</pre>
<pre>{
  width: string,               // It is css value for chart width. Default: '100%'.
  height: string',             // It is css value for chart height. Default: '200px.
  container: StylingObject,    // Styling of chart container
}</pre>`
                },
                {
                  title: "Template",
                  description:`
                  <p>Please Refer to <a target="_blank" class="links" _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                  <p>The cf-bar-chart by default is set to the <i>default template</i></p>
<pre>{
  "property": {
    "orientation": "vertical",
    "grouped": false,
    "gradient": false,
    "showLegend": true,
    "colorScheme": {
        "domain": ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
    },
    "showXAxis": true,
    "showYAxis": true,
    "showXAxisLabel": true,
    "showYAxisLabel": true,
    "xAxisLabel": "",
    "yAxisLabel": ""
  },
  "style": {
    "width": "100%",
    "height": "200px"
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
                    <code><</code>cf-line-chart [compTemplate]=myLineChartTemplate<code>></code><code><</code><code>/</code>cf-line-chart<code>></code>
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
  <b>colorScheme</b>: ChartsColorScheme, // Array with string css color values. Default: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'].
  <b>showXAxis</b>: boolean,             // If to show the x axis. Default: true.
  <b>showYAxis</b>: boolean,             // If to show the y axis. Default: true.
  <b>showXAxisLabel</b>: boolean,        // If to show the x axis label. Default: true.
  <b>showYAxisLabel</b>: boolean,        // If to show the y axis label. Default: true.
  <b>xAxisLabel</b>: string,             // The x axis label
  <b>yAxisLabel</b>: string,             // The y axis label
  <b>autoScale</b>: boolean,             // Set the minimum value of the y axis to the minimum value in the data, instead of 0. Default: false.
}</pre>  
<h4>Styling</h4>
<pre>
  <code><</code>cf-line-chart [styling]="myLineChartStyling"<code>></code><code><</code><code>/</code>cf-line-chart<code>></code>
</pre>
<pre>{
  width: string,               // It is css value for chart width. Default: '100%'.
  height: string',             // It is css value for chart height. Default: '200px.
  container: StylingObject,    // Styling of chart container
}</pre>`
                },
                {
                  title: "Template",
                  description:`
                  <p>Please Refer to <a target="_blank" class="links" _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                  <p>The cf-line-chart by default is set to the <i>default template</i></p>
<pre>{
  "property": {
    "autoScale": true,
    "gradient": false,
    "showLegend": true,
    "colorScheme": {
      "domain": ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
    },
    "showXAxis": true,
    "showYAxis": true,
    "showXAxisLabel": true,
    "showYAxisLabel": true,
    "xAxisLabel": "",
    "yAxisLabel": ""
  },
  "style": {
    "width": "100%",
    "height": "200px"
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
                <p><i>Check <strong>Examples</strong> tab for more information</i></p>`,
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
                  title: "Stacked Area Chart",
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
                    <code><</code>cf-area-chart [compTemplate]=myAreaChartTemplate<code>></code><code><</code><code>/</code>cf-area-chart<code>></code>
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
  <b>colorScheme</b>: ChartsColorScheme,  // Array with string css color values. Default: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'].
  <b>showXAxis</b>: boolean,              // If to show the x axis. Default: true.
  <b>showYAxis</b>: boolean,              // If to show the y axis. Default: true.
  <b>showXAxisLabel</b>: boolean,         // If to show the x axis label. Default: true.
  <b>showYAxisLabel</b>: boolean,         // If to show the y axis label. Default: true.
  <b>xAxisLabel</b>: string,              // The x axis label
  <b>yAxisLabel</b>: string,              // The y axis label
  <b>autoScale</b>: boolean,              // Set the minimum value of the y axis to the minimum value in the data, instead of 0. Default: false.
  <b>stacked</b>: boolean,                // If area chart is show in stacked mode. Default: false.
}</pre>  
<h4>Styling</h4>
<pre>
  <code><</code>cf-area-chart [styling]="myAreaChartStyling"<code>></code><code><</code><code>/</code>cf-area-chart<code>></code>
</pre>
<pre>{
  width: string,               // It is css value for chart width. Default: '100%'.
  height: string',             // It is css value for chart height. Default: '200px.
  container: StylingObject,    // Styling of chart container
}</pre>`
                },
                {
                  title: "Template",
                  description:`
                  <p>Please Refer to <a target="_blank" class="links" _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                  <p>The cf-area-chart by default is set to the <i>default template</i></p>
<pre>{
  "property": {
    "autoScale": false,
    "stacked": false,
    "gradient": false,
    "showLegend": true,
    "colorScheme": {
      "domain": ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
    },
    "showXAxis": true,
    "showYAxis": true,
    "showXAxisLabel": true,
    "showYAxisLabel": true,
    "xAxisLabel": "",
    "yAxisLabel": ""
  },
  "style": {
    "width": "100%",
    "height": "200px"
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
                  title:"Donut Pie Chart",
                  component: CfDemoPieChart2,
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
                    <code><</code>cf-pie-chart [compTemplate]=myPieChartTemplate<code>></code><code><</code><code>/</code>cf-pie-chart<code>></code>
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
  <b>colorScheme</b>: ChartsColorScheme, // Array with string css color values. Default: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'].
  <b>showXAxis</b>: boolean,             // If to show the x axis. Default: true.
  <b>showYAxis</b>: boolean,             // If to show the y axis. Default: true.
  <b>showXAxisLabel</b>: boolean,        // If to show the x axis label. Default: true.
  <b>showYAxisLabel</b>: boolean,        // If to show the y axis label. Default: true.
  <b>xAxisLabel</b>: string,             // The x axis label
  <b>yAxisLabel</b>: string,             // The y axis label
  <b>donut</b>: boolean,                 // Should pie chart to be like normal circle (true) or filled circle(false). Default: false.
  <b>showLabels</b>: boolean,            // Show or hide the labels. Default: true.
  <b>explodeSlices</b>: boolean,         // Make the radius of each slice proportional to it's value. Default: false.
}</pre>  
<h4>Styling</h4>
<pre>
  <code><</code>cf-pie-chart [styling]="myPieChartStyling"<code>></code><code><</code><code>/</code>cf-pie-chart<code>></code>
</pre>
<pre>{
  width: string,               // It is css value for chart width. Default: '100%'.
  height: string',             // It is css value for chart height. Default: '200px.
  container: StylingObject,    // Styling of chart container
}</pre>`
                },
                {
                  title: "Template",
                  description:`
                  <p>Please Refer to <a target="_blank" class="links" _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                  <p>The cf-pie-chart by default is set to the <i>default template</i></p>
<pre>{
  "property": {
    "donut": false,
    "showLabels": true,
    "explodeSlices": false,
    "gradient": false,
    "showLegend": true,
    "colorScheme": {
      "domain": ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
    },
    "showXAxis": true,
    "showYAxis": true,
    "showXAxisLabel": true,
    "showYAxisLabel": true,
    "xAxisLabel": "",
    "yAxisLabel": "",
  },
  "style": {
    "width": "100%",
    "height": "200px"
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
          // case 'Calendar':
          //   this.componentData = {
          //     componentName: 'CalendarComponent',
          //     description: 'This example shows the calendar component usage.',
          //     fileName: 'calendar-1',
          //     demos:[
          //       {
          //         component: CfDemoCalendar1,
          //         inputs: {
          //         },
          //       }
          //     ]
          //   };
          // break;
          case 'Toolbar':
            this.componentData = {
              componentName: 'Toolbar Component',
              description: `<p>cf-toolbar is a component that allows the user to define a toolbar composed of several sections in a user-selected order. These sections include info, content, actions, close button, toggle button, and collapsible button.</p>
                <ul>
                  <li>Each section takes an <em>order</em> string to tell the toolbar which order to put the sections in</li>
                  <br/>
                  <li>The content section provides a place for user-defined HTML to be displayed</li>
                  <br/>
                  <li>The info section can provide helpful information about the toolbar's purpose</li>
                  <br/>
                  <li>The actions section allows you to define a menu of actions that may be taken from the toolbar</li>
                  <br/>
                  <li>The close, toggle, and collapsible buttons allow you to let the user take these actions on the toolbar itself</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'toolbar-1',
              demos: [
                {
                  title: "Basic Usage",
                  component: CfDemoToolbar1,
                  inputs: {
                    themeName: this.configuration.theme
                  }
                }
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
                    <code><</code>cf-toolbar [compTemplate]=myToolbarTemplate<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                  </pre>
                  <p>2- Pass a property input model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-toolbar properties="myToolbarProperties"<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
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
                    <code><</code>cf-toolbar properties="myToolbarProperties"<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                  </pre>
                  <pre>
                    <b>attributes</b> in bold are exposed as separate inputs
                    <code>
                    {
                      <b>display</b>: boolean,  // Default: true
                      <b>disable</b>: boolean,  // Default: false
                      info: {
                        show: boolean,           // Whether to show this section
                        icon: IconModel,         // See Icon documentation
                        order: string            // 'first-section', 'second-section', etc.
                      }
                      content: {
                        title: string,           // The title of the content section
                        order: string,           // 'first-section', 'second-section', etc.
                      }
                      actions: {
                        show: boolean,           // Whether to show this section
                        menu: MenuModel,         // See Menu documentation
                        order: string            // 'first-section', 'second-section', etc.
                      }
                      close: {
                        show: boolean,           // Whether to show this section
                        icon: IconModel,         // See Icon documentation
                        order: string            // 'first-section', 'second-section', etc.
                      }
                      toggle: {
                        show: boolean,           // Whether to show this section
                        minimizeIcon: IconModel, // See Icon documentation
                        maximizeIcon: IconModel,
                        order: string            // 'first-section', 'second-section', etc.
                      }
                      collapsible: {
                        show: boolean,            // Whether this section is shown
                        expanded: boolean,        // Whether the collapsible section is expanded
                        icon: IconModel,          // See Icon documentation
                        order: string             // 'first-section', 'second-section', etc.
                      }
                    }
                    </code>
                  </pre>
                  <pre>
                    <code><</code>cf-toolbar styling="myToolbarStyling"<code>></code><code><</code><code>/</code>cf-toolbar<code>></code>
                  </pre>
                    <pre>
                    <i>dynamicClass</i>: function() -> string    // Function that returns name of the class
                    <i>class</i>: string                         // Name of the css class selector
                    <i>themeColor</i>: string                    // primary/accent/warn

                    <code>
                    {
                      actionsStyling: MenuStylingModel,          // See Menu documentation,
                      infoIconStyling: IconStylingModel,         // See Icon documentation,
                      minimizeIconStyling: IconStylingModel,
                      maximizeIconStyling: IconStylingModel,
                      closeIconStyling: IconStylingModel,
                      collapsibleIconStyling: IconStylingModel,
                      toolbar: {
                        dynamicClass,
                        class
                      },
                      info: {
                        dynamicClass,
                        class,
                        themeColor
                      }
                      content: {
                        dynamicClass,
                        class,
                        themeColor
                      }
                      actions: {
                        dynamicClass,
                        class,
                        themeColor
                      },
                      collapsible: {
                        dynamicClass,
                        class,
                        themeColor
                      },
                      close: {
                        dynamicClass,
                        class,
                        themeColor
                      },
                      toggle: {
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
                  <p>To set the theme color of the toolbar, you have to set the <i>themeColor</i> property in the <i>styling.input</i> object
                  to either primary, accent or warn to apply the application's theme.</p>
                  <p>For more information on theming <a _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/theming" ng-reflect-router-link-active="active" href="/guide/theming">Theming and Styling</a></p>
                  `
                }
              ]
            };
          break;
          case 'Gauge':
            this.componentData = {
              componentName: 'GaugeComponent',
              description: `
                <p>CfGauge Componentis a modification of <a class="links" href="https://github.com/mattlewis92/angular-gauge" target="_blank">Angular gauge</a> and has such features:<p>
                <ul>
                <li>Propeties like: value, max, size, label, prefix, suffix, animationDuratin, inputValue, display, disable</li>
                <li>Value of gauge can be changed by clicking on circle or by click on value to activate input element and type value</li>
                <li>Animation on svg circle element and value</li>
                <li>Gauge can be active, disabled or in read only state (when property <b>inputValue</b> is equal to <b>false</b>)</li>
                </ul>             
                <p>Here it is default gauge:</p>`,
              fileName: 'gauge-1',
              demos:[
                {
                  title: "Default gauge (type: full)",
                  component: CfDemoGauge1,
                  inputs: {
                    themeName: this.configuration.theme
                  },
                },{
                  title: "Types of gauge: full, arch, semi",
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
                    <code><</code>cf-gauge [compTemplate]=myGaugeTemplate<code>></code><code><</code><code>/</code>cf-gauge<code>></code>
                  </pre>
                  <p>2 - Pass a property gauge model object where any attributes defined in the model will override the default 
                  <pre>
                  <code><</code>cf-gauge [properties]="myGaugeProperties"<code>></code><code><</code><code>/</code>cf-gauge<code>></code>
                  </pre>
                  <p>3 - Pass the properties attributes as seperate inputs to the gauge 
                  <pre>
                  <code><</code>cf-gauge [value]="55" [inputValue]="false" <code>></code><code><</code><code>/</code>cf-gauge<code>></code>
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
All attributes are exposed as separate inputs  
<pre>
  {
    display: boolean,           // Default: true
    disable: boolean,           // Default: false
    max: number,                // Maximum integer value of gauge. Default: 100.
    type: string,               // Type value of gauge. Can be: full, arch, semi. Default: 'full'.
    size: number,               // Aanimation duration of gauge in seconds. Default: 150.
    value: number,              // Current integer value of gauge. Default: 0.
    label: string,              // Label of gauge. Default: '',.
    prefix: string,             // Prefix of gauge. Default: '',.
    suffix: string,             // Suffix of gauge. Default: '',.
    inputValue: boolean,        // Able gauge to input it value. Default: true.
    animationDuration: number,  // Size for width/height of gauge. It means number of pixels. Default: 1.
  }
</pre>  
<h4>Styling</h4>
<pre>
  <code><</code>cf-gauge [styling]="myGaugeStyling"<code>></code><code><</code><code>/</code>cf-gauge<code>></code>
</pre>
<pre>
  {
    dynamic class: function() -> string, //function that returns a string of the name of the class
    class: string //name of the class specified in you scss/css file
   
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
</pre>`
                },
                {
                  title:"Templating System",
                  description:`
                    <p>Please Refer to <a target="_blank" class="links" _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                    <p>The cf-gauge by default is set to the <i>default template</i></p>
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
              description:`<p>File-uploader component based on:</p>
                <ul>
                <li><a class="links" href="https://github.com/uniprank/ng2-file-uploader/wiki/Module-API" target="_blank">Angular 2 File Upload</a></li>
                <li>CF Button</li>
                <li>Angular Material Progress Bar</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`,
              fileName: 'icon-1',
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
                    <code><</code>cf-file-uploader [compTemplate]=myFileUploaderTemplate<code>></code><code><</code><code>/</code>cf-file-uploader<code>></code>
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
  main: {
    url: string,                  // Path to server where the files be uploaded. Default: ''
    alias: string,                // File alias. Default: 'file'
    headers: Object,              // An object with header informations. Default: {}
    filters: FileFilter[],        // A list of filters which are extend the default list. Default: []
    formData: Object[],           // A list of data to be sent along with the files. Default: []
    autoUpload: boolean,          // Automatically upload new files when they are adding to the queue. Default: false
    method: string,               // Request methode - HTML5 only. Default: 'POST'
    removeBySuccess: boolean,     // Remove file from queue when upload was successfull. Default: false
    queueLimit: number,           // Limitation of files at the queue (-1 is unlimited). Default: -1
    enableCors: boolean,          // Activate CORS - HTML5 only. Default: false
    withCredentials: boolean,     // If to use credentials. Default: false
    uniqueFiles: boolean,         // To add only unique files to files list. Default: false
  },
  showDropZone: boolean,          // Means if component must show dropZone. Default: true
  dropZoneLabel: string,          // Means label for dropZone. Default: 'Drop files here or click to select: '
  showFilesActions: boolean,      // Means if to show actions for all selected files. Default: true
  showFileActions: boolean,       // Means if to show actions for a single file. Default: true
  uploadFileButton: ButtonModel,  // ButtonModel for each file uploa. Default: new ButtonModel({ label: "Upload" })
  removeFileButton: ButtonModel,  // ButtonModel for each file remov. Default: new ButtonModel({ label: "Remove" })
  uploadFilesButton: ButtonModel, // ButtonModel for upload all file. Default: new ButtonModel({ label: "Upload All" })
  removeFilesButton: ButtonModel, // ButtonModel for remove all file. Default: new ButtonModel({ label: "Remove All" })
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
                    </pre>`
                    
                },
                {
                  title: "Template",
                  description:`
                  <p>Please Refer to <a target="_blank" class="links" _ngcontent-c23="" routerlink="/guide/theming" routerlinkactive="active" ng-reflect-router-link="/guide/template" ng-reflect-router-link-active="active" href="/guide/theming">Template System</a></p>
                  <p>The cf-file-uploader by default is set to the <i>default template</i></p>
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
  <code><</code>cf-file-uploader [compTemplate]=“customDirectory/file-uploader-template.json”<code>></code><code><</code><code>/</code>cf-file-uploader<code>></code>
</pre>
                  <p> Or by just specifying the template directory, which by default will set the file-uploader-template.json </p>
                  <p> If you have more than one file-uploader template defined, then one should be name <b>file-uploader-template.json</b> and the others can be named to your preference. In that case to reference those templates you need to explicitly do so in the following manner:</p>
<pre>
  <code><</code>cf-file-uploader [compTemplate]="customDirectory/my-custom-file-uploader.json"<code>></code><code><</code><code>/</code>cf-file-uploader<code>></code>
</pre>
                  <p>Where <i>my-custom-file-uploader.json</i> is the custom name of the file-uploader template file found under your custom directory</p>
                  `,
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
      this.setComponent("Icon");
    }
}
