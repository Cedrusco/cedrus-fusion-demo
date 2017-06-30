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
import { CfDemoMenu1 } from '../demos/menu/demo.menu-1';
import { CfDemoMenu2 } from '../demos/menu/demo.menu-2';
import { CfDemoMenu3 } from '../demos/menu/demo.menu-3';
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
              },
              {
                title:"Menu with Actions",
                component: CfDemoMenu3,
                inputs: {
                  themeName: this.configuration.theme
                },
              }],
              files:"menu,menu-item"
            } ;
            break;
          case 'Button':
            this.componentData = {
              componentName: 'ButtonComponent',
              description: `<p>The Cf-Button is built on top of the <p>The Cf-Button is build on top of the <a class='links' href='https://material.angular.io/components/button/overview'>MD Button</a></p></p>`,
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
                  title:"Button Templates",
                  component: CfDemoButton4,
                  description:`
                    <p>Fusion defined button templates <a href=‘https://github.com/Cedrusco/cedrus-project-fusion/blob/dev/src/lib/src/templates/button.template.ts'><i class="fa fa-github fa-lg links" aria-hidden="true"></i></a>
                    <p>The cf-button by default is set to the <i>default template</i></p>
                    <p>Customized templates can be applied easily to the cf-button by copying the default template and modifying it.</p>
                    <p>To apply the new template to the cf-button:</p>
                    <pre>
                    <code><</code>cf-button [compTemplate]="myTemplate"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                  </pre>
                  <p>To apply a fusion template from the pre-defined templates:</p>
                  <pre>
                    <code><</code>cf-button compTemplate="submitTemplate"<code>></code><code><</code><code>/</code>cf-button<code>></code>
                  </pre>`,
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
            ],
            docs:[{
              title:"Features",
              description:`<p>The Cf-Button is build on top of the <a class='links' href='https://material.angular.io/components/button/overview'>MD Button</a> and extends it as following:</p>
                <ul>
                  <li>Rendering automatically any icon name passed from both <a class='links' href='http://fontawesome.io/icons/'>Font Awesome</a> and <a class='links' href='https://material.io/icons/'>Material Icons</a> with its position.</li>
                  <br/>
                  <li>Having a Waiting State.</li>
                  <br/>
                  <li>Implementing the Template System of this library.</li>
                </ul>
                <p><i>Check <strong>Examples</strong> tab for more information on every feature</i></p>`
            },
            {
            title: "Model",
            description:"<pre>ButtonModel\n" +
                "<code>{\n</code>" +
                "<code>    display: boolean, //Whether or not the button is visible. Default: true\n</code>" +
                "<code>    disable: boolean, //Whether the button is disabled. Default: false\n</code>" +
                "<code>    iconPosition: string, //The location of the button's icon. Default: 'left', Possible: 'left', 'right'\n</code>" +
                "<code>    label: string, //The text for the button\n</code>" +
                "<code>    iconProperty: IconModel, //see the documentation for Icon</code>\n" +
                "<code>    waiting: {\n</code>" +
                "<code>        value: boolean, //Whether the button is waiting</code>\n" +
                "<code>        disabled: boolean, //Whether the button is disabled while waiting</code>\n" +
                "<code>        iconProperty: IconModel //See Icon documentation</code>\n" +
                "<code>    }</code>\n" +
                "<code>}</code></pre>\n"
            }]
          };
          break;
          case 'Fab':
          this.componentData = {
            componentName: 'FabComponent',
            description: 'The floating action button most commonly floats over the page content in the lower right,' +
            ' providing quick access to the most common or most important action of a view. It may also expand into a' + 
            ' list of possible actions in a way similar to a menu. These can be given labels, individually disabled or' + 
            ' enabled, and set to close the menu when clicked or not.<br>Fabs take their properties from the <em>FabModel</em>. ' +
            'Actions are assigned to a button by listening for the <em>cfActionButtonEvent</em> (for child buttons) and <em>cfTriggerEvent</em> (for the primary button). <em>cfActionButtonEvent</em> sends the index and item information of the clicked button, allowing you to assign relevant actions based on which button was clicked.'
            ,fileName: 'fab-1',
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
            }],
            docs: [
              {
                title: "Properties",
                description:"<pre>FabModel\n" +
                "<code>{\n</code>" +
                    "<code>    direction: string, // Default: 'down', Possible: 'down', 'up', 'right', 'left'\n</code>" +
                    "<code>    triggerButton: FabButtonModel,\n</code>" +
                    "<code>    actionButtons: FabButtonModel[],\n</code>" +
                    "<code>    showButtons: boolean, //Default: false\n</code>" +
                    "<code>    stayOpened: boolean //Default: false\n</code>" +
                "<code>}</code>\n" +
                "FabButtonModel\n" +
                "<code>{\n</code>" +
                    "<code>    icon: IconModel\n</code>" +
                    "<code>    label: string,\n</code>" +
                    "<code>    labelPosition: string //Default: 'below', Possible: 'above', 'below', 'left', 'right'\n</code>" +
                "<code>}</code>\n" +
                "</pre>"
              }
            ]
          };
          break;
          case 'ButtonMenu':
          this.componentData = {
            componentName: 'ButtonMenuComponent',
            description: 'A basic button, which can be customized using the ButtonStylingModel. It may be given a waiting or disabled state as necessary, and while enabled should perform some action when clicked.',
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
            }],
            docs: [{
            title: "Model",
            description:"<pre>ButtonMenuModel\n" +
                "<code>{\n</code>" +
                "<code>    display: boolean, //Whether or not the button is visible. Default: true\n</code>" +
                "<code>    disable: boolean, //Whether the button is disabled. Default: false\n</code>" +
                "<code>    buttonProperty: ButtonModel, //See documentation for Button\n</code>" +
                "<code>    menuProperty: MenuModel, //See documentation for Menu\n</code>" +
                "<code>}</code></pre>\n"
            }]
          }
          break;
          case 'Icon':
            this.componentData = {
              componentName: 'IconComponent',
              description: `
                <p>CF Icon supports both <a class='links' href='http://fontawesome.io/icons/'>Font Awesome</a> and <a class='links' href='https://material.io/icons/'>Material Icons</a></p>
                <p>Another feature is the icon's toggle state, so when you click on an icon you can specify to what icon and value to change to</p>
                <p>Based on <a class='links' href='https://material.angular.io/components/icon/overview'>Angular Material Icon</a></p>
              `,
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
                  title: "Icon Templates",
                  description:`
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
                    <p>Customized templates can be applied easily to the cf-icon by copying the default template and modifying it.</p>
                    <p>To apply the new template to the cf-icon:</p>
                    <pre>
                      <code><</code>cf-icon [compTemplate]=“myTemplate”<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>
                    <p>To apply a fusion template from the pre-defined templates:</p>
                    <pre>
                      <code><</code>cf-icon compTemplate=closeTemplate<code>></code><code><</code><code>/</code>cf-icon<code>></code>
                    </pre>`,
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
                  title:"Properties and Styling",
                  description:`
                  <h4>Properties</h4>
                  <pre>
                    ? optional property
                    * exposed property as an input \n
                    <code>{\n</code>
                    <code>    *display?: boolean, // Default: True            \n</code>
                    <code>    *disable?: boolean, // Default: False           \n</code>
                    <code>    *iconName?: string, // Default: 'Home'          \n</code>
                    <code>    *size?: string,     // Default: '24px'          \n</code>
                    <code>    *value?: any,       // Value emitted on click   \n</code> 
                    <code>    toggle?: {          // Toggling icon state      \n</code>
                    <code>      name: string,     // Name of icon toggled     \n</code>
                    <code>      size: string,     // Size of icon toggled     \n</code>
                    <code>      value: any        // Value of icon toggled    \n</code>
                    <code>   }                                                \n</code>
                    <code>}</code>
                  </pre>  
                  <h4>Styling</h4>
                  <pre>
                    <code>{\n</code>
                    <code>    // styling of the container surrounding the icon                                                      \n</code>
                    <code>    container: {                                                                                          \n</code>
                    <code>      dynamic class: function() -> string, //function that returns a string of the name of the class      \n</code>
                    <code>      class: string //name of the class specified in you scss/css file                                    \n\n</code>
                    <code>    // styling of the icon                                                                                \n</code> 
                    <code>    icon: {                                                                                               \n</code>
                    <code>      dynamic class: function() -> string,                                                                \n</code>
                    <code>      class: string ,                                                                                     \n</code>
                    <code>      themeColor: string , // primary/accent/warn                                                         \n</code>
                    <code>    },                                                                                                    \n\n</code>
                    <code>    // styling of the toggle icon if there is any specified same structure as that of the icon styling    \n</code>
                    <code>    toggleIcon: {                                                                                         \n</code>
                    <code>      container: {},                                                                                      \n</code>
                    <code>      icon: {}                                                                                            \n</code>
                    <code>    }                                                                                                     \n</code>
                    <code>}</code>
                  </pre> 
                  `
                },
                {
                  title:"Theming",
                  description:`
                  <p>To set the theme color of the icon, you have to set the <i>themeColor</i> property in the <i>styling.icon</i> object
                  to either primary, accent or warn to apply the application's theme.</p>`
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
            },
            {
              title:"Image styling contingent upon user selection",
              component: CfDemoImage3,
              inputs: {
                themeName: this.configuration.theme
              },
            }],
            docs: [
              {
                title: "Model",
                description:"<pre>ImageModel\n" +
                "<code>{\n</code>" +
                    "<code>    url: string //URL for the default image\n</code>" +
                    "<code>    label: string, //The caption for the image\n</code>" +
                    "<code>    labelPosition: string//The position of the caption, Default: bottom\n</code>" +
                "<code>}</code></pre>\n"
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
              <p>To display gallery it is needed array with images and object with gallery settings (which is optional, bacause gallery automatically is using settings from default template in file: <b>/src/lib/src/templates/gallery.template.ts</b>)</p>
              <p>Each image it is an object with 4 properties:</p>
              <ul>
              <li><b>small</b> - image url address to be used in thumbnails</li>
              <li><b>medium</b> - image url address to be used in main image block</li>
              <li><b>big</b> - image url address to be used in preview</li>
              <li><b>description</b> - description text to be used in preview</li>
              </ul>  
              <p>Gallery has long list of diferent options and it is described in API Reference.</p>            
              <p>Here it is gallery with basic standard options:</p>              
            `,
            fileName: 'gallery-1',
            demos:[{
              title:"Basic usage with default template",
              component: CfDemoGallery1,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Gallery with template: twoThumbnailsRowsTemplate",
              component: CfDemoGallery2,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Gallery without thumbnails and with `rotate` animation",
              component: CfDemoGallery3,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Gallery without main image block and with custom styling",
              component: CfDemoGallery4,
              inputs: {
                themeName: this.configuration.theme
              },
            }],
            docs:[{
              title: "Properties and Styling",
              description: `
<h4>Properties</h4>
<pre>
  ? optional property
  * exposed property as an input
  
  {
    *display?: boolean,       // Default: true
    *images?: array,          // Default: [] - each array element is an object of type GalleryModel.image
    *options?: object,        // Default: object with default properties from GalleryModel.options
  }
</pre>  
<h4>Styling</h4>
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
</pre>
              `
              },{
              title:"Templating System",
              description:`
              <p>For the current time there are two Fusion gallery templates <b>defaultTemplate</b> and <b>twoThumbnailsRowsTemplate</b> <a href="https://github.com/Cedrusco/cedrus-project-fusion/blob/dev/src/lib/src/templates/gallery.template.ts" target="_blank"><i class="fa fa-github fa-lg links" aria-hidden="true"></i></a>
              <p>And by default is set to the <b>defaultTemplate</b></p>
              <p>Customized templates can be applied easily to the cf-gallery by copying the default template and modifying it.</p>
              <p>To apply the new template:</p>
              <pre>
                <code><</code>cf-gallery [compTemplate]=“myTemplate”<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
              </pre>
              <p>To apply a fusion template from the pre-defined templates:</p>
              <pre>
                <code><</code>cf-gallery compTemplate=closeTemplate<code>></code><code><</code><code>/</code>cf-gallery<code>></code>
              </pre>
              <p><b>defaultTemplate</b> template definition:</p>
<pre>{
  width: '100%',
  imagePercent: 60,
  imageArrowsAutoHide: true,
  thumbnailsPercent: 40,
  thumbnailsRows: 2,
  thumbnailMargin: 1,
  thumbnailsMargin: 1,
  thumbnailsArrowsAutoHide: true,
  previewFullscreen: true
}</pre>
              <p><b>twoThumbnailsRowsTemplate</b> template definition:</p>
<pre>{
  width: '100%',
  imagePercent: 60,
  imageArrowsAutoHide: true,
  thumbnailsPercent: 40,
  thumbnailsRows: 2,
  thumbnailMargin: 1,
  thumbnailsMargin: 1,
  thumbnailsArrowsAutoHide: true,
  previewFullscreen: true
}</pre>
              `
            }]
          };
          break;
          case 'Input':
          this.componentData = {
            componentName: 'InputComponent',
            description: 'Input represents a basic text input. It may mask its value if given type password, and can be passed an icon to be displayed alongside it.',
            fileName: 'input-1',
            demos: [
              {
                title: "Basic Usage",
                component: CfDemoInput1,
                inputs: {
                  themeName: this.configuration.theme
                },
              },{
                title:"Customized Options",
                component: CfDemoGallery2,
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
            ],
            docs: [
              {
              title: "Model",
              description: "<pre>InputModel\n" +
                  "<code>{\n</code>" +
                  "<code>    type: 'string', //The input type. Default: 'text'\n</code>" +
                  "<code>    placeholder: 'string', //Placeholder text for the input\n</code>" +
                  "<code>    prefix: string, //Default: 'Home'\n</code>" +
                  "<code>    maxlength: string, //The maximum number of characters. Default: '10'\n</code>" +
                  "<code>    dividerColor: string, //Color to be used for the divider\n</code>" +
                  "<code>    value: string, //The value of the input\n</code>" +
                  "<code>    prefix: string, //Text displayed before the input\n</code>" +
                  "<code>    suffix: string, //Text displayed after the input\n</code>" +
                  "<code>    iconProperty: IconModel, //See Icon documentation\n</code>" +
                  "<code>    menu: MenuModel, //See Menu documentation\n</code>" +
                  "<code>    hint: {\n</code>" +
                  "<code>        text: string, //text to be displayed as a hint\n" +
                  "<code>        align: string, //position of hint. Default: 'start'. Possible: 'start', 'end'</code>\n" +
                  "<code>    }</code>\n" +
                  "<code>}</code></pre>\n"
              }
            ]
          } ;
          break;
          case 'Select':
          this.componentData = {
            componentName: 'SelectComponent',
            description: 'A select allows the user to pick from several items in a dropdown list. It includes an optional filter to make it easier to find a given selection.',
            fileName: 'select-1',
            demos: [{
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
            }],
            docs: [{
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
              }]
          } ;
          break;
          case 'Checkbox':
          this.componentData = {
            componentName: 'CheckboxComponent',
            description: 'A checkbox which may be checked or not. When in a group, the maximum and minimum number of checkboxes may be specified. A text label or any HTML may be connected to the checkbox and clicked to select it.',
            fileName: 'checkbox-1',
            files:'checkbox,selectable',
            demos:[{
              title:"Basic Usage",
              component: CfDemoCheckbox1,
              inputs: {
                themeName: this.configuration.theme
              },
            },{
              title:"Customize Styling",
              component: CfDemoCheckbox4,
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
            }],
            docs: [
              {
              title: "Model",
              description: "<pre>SelectModel\n" +
                  "<code>{\n</code>" +
                  "<code>    value: 'string', //The internal value of the selectable. Default: 'value'\n</code>" +
                  "<code>    item: any, //An item displayed alongside the control. Usually a string or HTML template.\n</code>" +
                  "<code>    checked: boolean, //Whether this selectable has been selected\n</code>" +
                  "<code>    itemPosition: string, //The location of the item relative to the control. Default: 'after'. Possible: 'before', 'after'\n</code>" +
                  "<code>}</code></pre>\n"
              }
            ]
          } ;
          break;
          case 'Radio':
          this.componentData = {
            componentName: 'SelectableModel',
            description: 'A radio button. By convention, in a Group of radio buttons exactly one must be selected, but a minimum and maximum selectable may be set by the user. A text label or any HTML may be connected to the radio button and clicked to select it.',
            fileName: 'radio-1',
            files:'radio,selectable',
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
            },{
              title:"Checking all radio states",
              component: CfDemoRadio4,
              inputs: {
                themeName: this.configuration.theme
              },
            }],
            docs: [
              {
              title: "Model",
              description: "<pre>SelectableModel\n" +
                  "<code>{\n</code>" +
                  "<code>    value: 'string', //The internal value of the selectable. Default: 'value'\n</code>" +
                  "<code>    item: any, //An item displayed alongside the control. Usually a string or HTML template.\n</code>" +
                  "<code>    checked: boolean, //Whether this selectable has been selected\n</code>" +
                  "<code>    itemPosition: string, //The location of the item relative to the control. Default: 'after'. Possible: 'before', 'after'\n</code>" +
                  "<code>}</code></pre>\n"
              }
            ]
          } ;
          break;
          case 'Switch':
          this.componentData = {
            componentName: 'SwitchComponent',
            description: 'A switch that can be toggled on or off. When put in a Group, the number of required switches or maximum "on" switches allowed may be specified. A text label or any HTML may be connected to the switch and clicked to select it.',
            fileName: 'switch-1',
            files:'switch,selectable',
            demos:[{
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
            }],
            docs: [
              {
              title: "Model",
              description: "<pre>SelectableModel\n" +
                  "<code>{\n</code>" +
                  "<code>    value: 'string', //The internal value of the selectable. Default: 'value'\n</code>" +
                  "<code>    item: any, //An item displayed alongside the control. Usually a string or HTML template.\n</code>" +
                  "<code>    checked: boolean, //Whether this selectable has been selected\n</code>" +
                  "<code>    itemPosition: string, //The location of the item relative to the control. Default: 'after'. Possible: 'before', 'after'\n</code>" +
                  "<code>}</code></pre>\n"
              }
            ]
          } ;
          break;
          case 'Card':
          this.componentData ={
            componentName: 'CardComponent',
            description: 'A material-style card for displaying related information. There are several types with predefined templates: News, Product, or Standard, which present input information in easily legible ways.',
            fileName: 'card-1',
            demos:[{
              component: CfDemoCard1,
              inputs: {
              },
            }],
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
                  inputs: {
                    themeName: this.configuration.theme
                  }
              }
            ],
            docs: [
              {
              title: "Model",
              description: "<pre>ListModel\n" +
                  "<code>{\n</code>" +
                  "<code>    title: string, //The title of the list\n</code>" +
                  "<code>}</code></pre>\n"
              }
            ]
          };
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
            description: 'The rating component is an input that uses highlighted icons to show and set its value. The value n may be set by clicking on the nth icon, and items 1 to n will be highlighted.',
            fileName: 'rating-1',
            demos:[{
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
                inputs: {
                },
            }],
            docs: [
              {
              title: "Model",
              description: "<pre>'RatingModel'\n" +
                  "<code>{\n</code>" +
                  "<code>    label: string, //The rating's text label\n</code>" +
                  "<code>    icon: string, //The icon used for the ratings. Default: 'star'\n</code>" +
                  "<code>    value: number, //The number of icons highlighted. Default: 1\n</code>" +
                  "<code>    max: number, //The number of icons displayed. Default: 5\n</code>" +
                  "<code>    countFromEnd: boolean, //Whether the icons are displayed from the bottm/right or top/left\n</code>" +
                  "<code>    iconsVertical: boolean, //Whether the icons are displayed vertically\n</code>" +
                  "<code>    disable: boolean, //Whether the rating is disabled\n</code>" +
                  "<code>}</code></pre>\n"
              }
            ]
          } ;
          break;
          case 'Tabs':
          this.componentData = {
            componentName: 'TabsComponent',
            description: 'Tabs may be used to compactly display information separated by topic. Individual tabs may be disabled based on given conditions.',
            fileName: 'tabs-1',
            demos:[{
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
              title: "Dynamically generated order tabs",
              component: CfDemoTabs4,
              inputs: {
              },
            }],
            docs: [
              {
              title: "Model",
              description: "<pre>TabsModel\n" +
                  "<code>{\n</code>" +
                  "<code>    showStepNumberAsIcon: boolean, //Whether to show the step number in the tab as an icon\n</code>" +
                  "<code>    showStepNumberAsPrefix: boolean, //Whether to show the step number in the tab as a text prefix\n</code>" +
                  "<code>}\n</code>" +
                  "TabsCardModel\n" +
                  "<code>{\n</code>" +
                  "<code>    header: string, //The text to be displayed on the tab\n</code>" +
                  "<code>}</code></pre>\n"
              }
            ]
          } ;
          break;
          case 'Wizard':
          this.componentData = {
            componentName: 'WizardComponent',
            description: 'The wizard is a set of steps taken in sequence to produce some output',
            fileName: 'wizard-1',
            demos:[{
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
            }],
            docs: [
              {
              title: "Model",
              description: "<pre>WizardModel\n" +
                  "<code>{\n</code>" +
                  "<code>    showStepNumberAsIcon: boolean, //Whether to show the step number in the tab as an icon\n</code>" +
                  "<code>    showStepNumberAsPrefix: boolean, //Whether to show the step number in the tab as a text prefix\n</code>" +
                  "<code>    previousButton: ButtonModel, //See the documentation for Button\n</code>" +
                  "<code>    nextButton: ButtonModel, //See the documentation for Button\n</code>" +
                  "<code>    finishButton: ButtonModel, //See the documentation for Button\n</code>" +
                  "<code>}</code>\n" +
                  "WizardStepModel\n" +
                  "<code>{\n</code>" +
                  "<code>    header: string, //The text to be displayed on the step\n</code>" +
                  "<code>    isValid: boolean, //Whether or not this step is valid\n</code>" +
                  "<code>}</code></pre>\n"
              }
            ]
          } ;
          break;
          case 'Treeview':
          this.componentData = {
            componentName: 'TreeviewComponent',
            description: 'The treeview component displays a set of items, which may have children and may be selectable. Selected items are available by their assigned ID.',
            fileName: 'treeview-1',
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
                title: "Several types of dialog",
                component: CfDemoDialog1,
                inputs: {
                },
              },
              {
                title: "Dialog with wizard",
                component: CfDemoDialog2,
                inputs: {
                },
              },
              {
                title: "Dialog with inputs",
                component: CfDemoDialog3,
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
                title:"Vertical Bar Chart",
                component: CfDemoBarChart1,
                inputs: {
                  themeName: this.configuration.theme
                }
              },{
                title:"Horizontal Bar Chart",
                component: CfDemoBarChart2,
                inputs: {
                  themeName: this.configuration.theme
                }
              },{
                title:"Grouped Vertical Bar Chart",
                component: CfDemoBarChart3,
                inputs: {
                  themeName: this.configuration.theme
                }
              },{
                title:"Grouped Horizontal Bar Chart",
                component: CfDemoBarChart4,
                inputs: {
                  themeName: this.configuration.theme
                }
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
            };
            break;
          case 'AreaChart':
            this.componentData = {
              componentName: 'AreaChartComponent',
              description: 'This example shows the CfAreaChart component usage.',
              fileName: 'area-chart-1',
              demos:[{
                title:"Standard Area Chart",
                component: CfDemoAreaChart1,
                inputs: {
                  themeName: this.configuration.theme
                }
              },{
                title:"Stacked Area Chart",
                component: CfDemoAreaChart2,
                inputs: {
                  themeName: this.configuration.theme
                }
              }]
            };
            break;
          case 'PieChart':
            this.componentData = {
              componentName: 'PieChartComponent',
              description: 'This example shows the CfPieChart component usage.',
              fileName: 'pie-chart-1',
              demos:[{
                title:"Pie Chart",
                component: CfDemoPieChart1,
                inputs: {
                  themeName: this.configuration.theme
                }
              },{
                title:"Donut Pie Chart",
                component: CfDemoPieChart2,
                inputs: {
                  themeName: this.configuration.theme
                }
              }]
            };
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
                title: "Default template",
                component: CfDemoGoogleMaps1,
                inputs: {
                  themeName: this.configuration.theme
                },
              },{
                title: "Customized options and styling",
                component: CfDemoGoogleMaps2,
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
                title:"Default Template",
                component: CfDemoFileUploader1,
                inputs: {
                  themeName: this.configuration.theme
                }
              },{
                title:"Customized Options",
                component: CfDemoFileUploader2,
                inputs: {
                  themeName: this.configuration.theme
                }
              }]
            } ;
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
