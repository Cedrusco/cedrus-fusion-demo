"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cedrus_fusion_1 = require("cedrus-fusion");
var demo_button_1_1 = require("../demos/button/demo.button-1");
var demo_button_2_1 = require("../demos/button/demo.button-2");
var demo_button_3_1 = require("../demos/button/demo.button-3");
var demo_icon_1_1 = require("../demos/icon/demo.icon-1");
var demo_icon_2_1 = require("../demos/icon/demo.icon-2");
var demo_icon_3_1 = require("../demos/icon/demo.icon-3");
var demo_image_1_1 = require("../demos/image/demo.image-1");
var demo_image_2_1 = require("../demos/image/demo.image-2");
var demo_menu_1_1 = require("../demos/menu/demo.menu-1");
var demo_button_menu_1_1 = require("../demos/button-menu/demo.button-menu-1");
var demo_input_1_1 = require("../demos/input/demo.input-1");
var demo_select_1_1 = require("../demos/select/demo.select-1");
var demo_checkbox_1_1 = require("../demos/checkbox/demo.checkbox-1");
var demo_radio_1_1 = require("../demos/radio/demo.radio-1");
var demo_switch_1_1 = require("../demos/switch/demo.switch-1");
var demo_card_1_1 = require("../demos/card/demo.card-1");
var demo_datatable_1_1 = require("../demos/datatable/demo.datatable-1");
var demo_weather_1_1 = require("../demos/weather/demo.weather-1");
var demo_news_1_1 = require("../demos/news/demo.news-1");
var demo_list_1_1 = require("../demos/list/demo.list-1");
var demo_bpm_list_1_1 = require("../demos/bpm-list/demo.bpm-list-1");
var demo_customer_list_1_1 = require("../demos/customer-list/demo.customer-list-1");
var demo_core_1_1 = require("../demos/core/demo.core-1");
var demo_core_2_1 = require("../demos/core/demo.core-2");
var demo_core_3_1 = require("../demos/core/demo.core-3");
var demo_send_message_1_1 = require("../demos/send-message/demo.send-message-1");
var demo_form_1_1 = require("../demos/form/demo.form-1");
var demo_tabs_1_1 = require("../demos/tabs/demo.tabs-1");
var demo_wizard_1_1 = require("../demos/wizard/demo.wizard-1");
var demo_rating_1_1 = require("../demos/rating/demo.rating-1");
var demo_treeview_1_1 = require("../demos/treeview/demo.treeview-1");
var demo_fab_1_1 = require("../demos/fab/demo.fab-1");
var demo_html_1_1 = require("../demos/html/demo.html-1");
var demo_alerts_1_1 = require("../demos/alerts/demo.alerts-1");
var demo_dialog_1_1 = require("../demos/dialog/demo.dialog-1");
var demo_bar_chart_1_1 = require("../demos/bar-chart/demo.bar-chart-1");
var demo_line_chart_1_1 = require("../demos/line-chart/demo.line-chart-1");
var demo_area_chart_1_1 = require("../demos/area-chart/demo.area-chart-1");
var demo_pie_chart_1_1 = require("../demos/pie-chart/demo.pie-chart-1");
var demo_calendar_1_1 = require("../demos/calendar/demo.calendar-1");
var demo_gallery_1_1 = require("../demos/gallery/demo.gallery-1");
var demo_toolbar_1_1 = require("../demos/toolbar/demo.toolbar-1");
var demo_gauge_1_1 = require("../demos/gauge/demo.gauge-1");
var demo_google_maps_1_1 = require("../demos/google-maps/demo.google-maps-1");
var demo_file_uploader_1_1 = require("../demos/file-uploader/demo.file-uploader-1");
// var demo_socket_1_1 = require("../demos/sockets/demo.socket-1");
var demo_dynamic_component_loader_1_1 = require("../demos/dynamic-component/demo.dynamic-component-loader-1");
var CfUiLibraryComponent = (function () {
    function CfUiLibraryComponent() {
        this.title = 'Fusion Library';
        this.configuration = {
            'theme': cedrus_fusion_1.Themes.default_theme
        };
        this.componentData = null;
    }
    CfUiLibraryComponent.prototype.setComponent = function (name) {
        switch (name) {
            // case 'Socket':
            //     this.componentData = {
            //         componentName: 'SocketService',
            //         description: 'This service allows the user to subscribe to socket events from a server.',
            //         fileName: 'socket-1',
            //         demos: [{
            //                 component: demo_socket_1_1.CfDemoSocket1,
            //                 inputs: {},
            //             }]
            //     };
            //     break;
            case 'Send Message':
                this.componentData = {
                    componentName: 'SendMessageComponent',
                    description: 'This component is responsible for sending SMS messages and emails.',
                    fileName: 'send-message-1',
                    demos: [{
                            component: demo_send_message_1_1.CfDemoSendMessage1,
                            inputs: {},
                        }]
                };
                break;
            case 'Dynamic Component Loader':
                this.componentData = {
                    componentName: 'DynamicComponentLoaderComponent',
                    description: 'This component is responsible for the dynamic loading of other components anywhere in the library.',
                    fileName: 'dynamic-component-loader-1',
                    demos: [{
                            component: demo_dynamic_component_loader_1_1.CfDemoDynamicComponentLoader,
                            inputs: {},
                        }]
                };
                break;
            case 'Menu':
                this.componentData = {
                    componentName: 'MenuComponent',
                    description: 'This graphical control represents a Menu with extended attributes such as icon and notifications.',
                    fileName: 'menu-1',
                    demos: [{
                            component: demo_menu_1_1.CfDemoMenu1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'Button':
                this.componentData = {
                    componentName: 'ButtonComponent',
                    description: "CF Button has two features that makes it special. The fact that you can pass and icon name and position" +
                        " to the button and it renders is automatically, as well as having a waiting state.",
                    fileName: 'button-1',
                    demos: [{
                            title: "Basic Usage",
                            component: demo_button_1_1.CfDemoButton1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }, {
                            title: "Button Styling",
                            component: demo_button_2_1.CfDemoButton2,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }, {
                            title: "Waiting State",
                            component: demo_button_3_1.CfDemoButton3,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }],
                    docs: [{
                            title: "Theming",
                            description: "<p>To set the theme color of the button, you have to set the <i>themeColor</i> property in the <i>styling.button</i> object " +
                                "to either primary, accent or warn to apply the application's theme.</p>"
                        },
                        {
                            title: "Templating System",
                            description: "<p>To set a template for the icon from the cedrus fusion templates, you have to set the <i>compTemplate</i> attribute to the name of the template.</p>\n              <p>\"submitTemplate\" is an example from the cedrus fusion library. Reference: <i>lib/src/templates/button.template.ts</i></p>\n              <pre>\n              <code><</code>cf-button compTemplate=\"submitTemplate\"<code>></code><code><</code><code>/</code>cf-button<code>></code>\n              </pre>\n              <p>To create your own template, refer to the defined templates in the library, create your own object and <strong>bind</strong> it to the \"compTemplate\" attribute.</p>\n              <pre>\n              <code><</code>cf-button [compTemplate]=\"myTemplate\"<code>></code><code><</code><code>/</code>cf-button<code>></code>\n              </pre>"
                        }]
                };
                break;
            case 'Fab':
                this.componentData = {
                    componentName: 'FabComponent',
                    description: 'This graphical control represents a Fab with extended attributes.',
                    fileName: 'fab-1',
                    demos: [{
                            component: demo_fab_1_1.CfDemoFab1,
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
                    demos: [{
                            component: demo_core_1_1.CfDemoCore1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'i18n':
                this.componentData = {
                    componentName: 'CoreComponent',
                    description: 'This example shows messages and components internationalization.',
                    fileName: 'core-2',
                    demos: [{
                            component: demo_core_2_1.CfDemoCore2,
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
                            component: demo_button_menu_1_1.CfDemoButtonMenu1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'Icon':
                this.componentData = {
                    componentName: 'IconComponent',
                    description: "One feature of CF icons is when setting the name of the icon to a material icon or font awesome name it will render automatically" +
                        " without specifying the type. Another feature is the icon's toggle state, so when you click on an icon you can specify to what icon" +
                        " and value to change to.",
                    fileName: 'icon-1',
                    demos: [
                        {
                            component: demo_icon_1_1.CfDemoIcon1,
                            title: "Basic Usage",
                            inputs: {
                                themeName: this.configuration.theme
                            }
                        },
                        {
                            component: demo_icon_2_1.CfDemoIcon2,
                            title: "Toggle Icon",
                            inputs: {
                                themeName: this.configuration.theme
                            }
                        },
                        {
                            component: demo_icon_3_1.CfDemoIcon3,
                            title: "Icon Styling",
                            inputs: {
                                themeName: this.configuration.theme
                            }
                        }
                    ],
                    docs: [{
                            title: "Theming",
                            description: "<p>To set the theme color of the icon, you have to set the <i>themeColor</i> property in the <i>styling.icon</i> object " +
                                "to either primary, accent or warn to apply the application's theme.</p>"
                        },
                        {
                            title: "Templating System",
                            description: "<p>To set a template for the icon from the cedrus fusion templates, you have to set the <i>compTemplate</i> attribute to the name of the template.</p>\n              <p>\"closeTemplate\" is an example from the cedrus fusion library. Reference: <i>lib/src/templates/icon.template.ts</i></p>\n              <pre>\n              <code><</code>cf-icon compTemplate=\"closeTemplate\"<code>></code><code><</code><code>/</code>cf-icon<code>></code>\n              </pre>\n              <p>To create your own template, refer to the defined templates in the library, create your own object and <strong>bind</strong> it to the \"compTemplate\" attribute.</p>\n              <pre>\n              <code><</code>cf-icon [compTemplate]=\"myTemplate\"<code>></code><code><</code><code>/</code>cf-icon<code>></code>\n              </pre>"
                        }]
                };
                break;
            case 'Image':
                this.componentData = {
                    componentName: 'ImageComponent',
                    description: "<p>Image component consists of two parts:</p>\n                          <ul>\n                          <li>Image</li>\n                          <li>Label/Caption along with its relative position</li>\n                          </ul>",
                    fileName: 'image-1',
                    demos: [{
                            title: "Basic Usage",
                            component: demo_image_1_1.CfDemoImage1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        },
                        {
                            title: "Image Styling",
                            component: demo_image_2_1.CfDemoImage2,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'Gallery':
                this.componentData = {
                    componentName: 'GalleryComponent',
                    description: 'This graphical control represents an Gallery with extended options.',
                    fileName: 'gallery-1',
                    demos: [{
                            component: demo_gallery_1_1.CfDemoGallery1,
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
                    demos: [{
                            component: demo_input_1_1.CfDemoInput1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'Select':
                this.componentData = {
                    componentName: 'SelectComponent',
                    description: 'This graphical control represents an Select with filterable dropdown list items.',
                    fileName: 'select-1',
                    demos: [{
                            component: demo_select_1_1.CfDemoSelect1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'Checkbox':
                this.componentData = {
                    componentName: 'CheckboxComponent',
                    description: 'This graphical control represents an Checkbox with extended options.',
                    fileName: 'checkbox-1',
                    demos: [{
                            component: demo_checkbox_1_1.CfDemoCheckbox1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'Radio':
                this.componentData = {
                    componentName: 'RadioComponent',
                    description: 'This graphical control represents an Radio with extended options.',
                    fileName: 'radio-1',
                    demos: [{
                            component: demo_radio_1_1.CfDemoRadio1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'Switch':
                this.componentData = {
                    componentName: 'SwitchComponent',
                    description: 'This graphical control represents an Switch with extended options.',
                    fileName: 'switch-1',
                    demos: [{
                            component: demo_switch_1_1.CfDemoSwitch1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'Card':
                this.componentData = {
                    componentName: 'CardComponent',
                    description: 'This graphical control represents an Card with extended options.',
                    fileName: 'card-1',
                    demos: [{
                            component: demo_card_1_1.CfDemoCard1,
                            inputs: {},
                        }]
                };
                break;
            case 'Weather':
                this.componentData = {
                    componentName: 'WeatherComponent',
                    description: 'This graphical control represents simple Weather demo component.',
                    fileName: 'weather-1',
                    demos: [{
                            component: demo_weather_1_1.CfDemoWeather1,
                            inputs: {},
                        }]
                };
                break;
            case 'News':
                this.componentData = {
                    componentName: 'NewsComponent',
                    description: "The graphical control represents News demo component",
                    fileName: 'news-1',
                    demos: [{
                            component: demo_news_1_1.CfDemoNews1,
                            inputs: {},
                        }]
                };
                break;
            case 'Datatable':
                this.componentData = {
                    componentName: 'DatatableComponent',
                    description: 'This graphical control represents a Datatable with extended options.',
                    fileName: 'datatable-1',
                    demos: [{
                            component: demo_datatable_1_1.CfDemoDatatable1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'List':
                this.componentData = {
                    componentName: 'ListComponent',
                    description: 'This graphical control represents a List with extended options.',
                    fileName: 'list-1',
                    demos: [{
                            component: demo_list_1_1.CfDemoList1,
                            inputs: {},
                        }]
                };
                break;
            case 'BpmList':
                this.componentData = {
                    componentName: 'BpmListComponent',
                    fileName: 'bpm-list-1',
                    demos: [{
                            component: demo_bpm_list_1_1.CfDemoBpmList1,
                            inputs: {},
                        }]
                };
                break;
            case 'CustomerList':
                this.componentData = {
                    componentName: 'CustomerListComponent',
                    description: 'This example shows the different component temlate usage.',
                    fileName: 'customer-list-1',
                    demos: [{
                            component: demo_customer_list_1_1.CfDemoCustomerList1,
                            inputs: {},
                        }]
                };
                break;
            case 'Forms':
                this.componentData = {
                    componentName: 'FormComponent',
                    description: 'This example shows the form generator',
                    fileName: 'form-1',
                    demos: [{
                            component: demo_form_1_1.CfDemoForm1,
                            inputs: {},
                        }]
                };
                break;
            case 'Rating':
                this.componentData = {
                    componentName: 'RatingComponent',
                    description: 'This graphical control represents a Rating with extended options.',
                    fileName: 'rating-1',
                    demos: [{
                            component: demo_rating_1_1.CfDemoRating1,
                            inputs: {},
                        }]
                };
                break;
            case 'Tabs':
                this.componentData = {
                    componentName: 'TabsComponent',
                    description: 'This graphical control represents a Tabs with extended options.',
                    fileName: 'tabs-1',
                    demos: [{
                            component: demo_tabs_1_1.CfDemoTabs1,
                            inputs: {},
                        }]
                };
                break;
            case 'Wizard':
                this.componentData = {
                    componentName: 'WizardComponent',
                    description: 'This graphical control represents a Wizard with extended options.',
                    fileName: 'wizard-1',
                    demos: [{
                            component: demo_wizard_1_1.CfDemoWizard1,
                            inputs: {},
                        }]
                };
                break;
            case 'Treeview':
                this.componentData = {
                    componentName: 'TreeviewComponent',
                    description: 'This graphical control represents a Treeview with extended options.',
                    fileName: 'treeview-1',
                    demos: [{
                            component: demo_treeview_1_1.CfDemoTreeview1,
                            inputs: {},
                        }]
                };
                break;
            case 'Html':
                this.componentData = {
                    componentName: 'HtmlComponent',
                    description: 'This graphical control represents a Html with extended options.',
                    fileName: 'html-1',
                    demos: [{
                            component: demo_html_1_1.CfDemoHtml1,
                            inputs: {},
                        }]
                };
                break;
            case 'Alerts':
                this.componentData = {
                    componentName: 'AlertsComponent',
                    description: 'This example shows Alerts component with extended options.',
                    fileName: 'alerts-1',
                    demos: [{
                            component: demo_alerts_1_1.CfDemoAlerts1,
                            inputs: {},
                        }]
                };
                break;
            case 'Dialog':
                this.componentData = {
                    componentName: 'DialogComponent',
                    description: 'This example shows the CfDialog component usage.',
                    fileName: 'dialog-1',
                    demos: [{
                            component: demo_dialog_1_1.CfDemoDialog1,
                            inputs: {},
                        }]
                };
                break;
            case 'Animation':
                this.componentData = {
                    componentName: 'CoreComponent',
                    description: 'This example shows components animation.',
                    fileName: 'core-3',
                    demos: [{
                            component: demo_core_3_1.CfDemoCore3,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'BarChart':
                this.componentData = {
                    componentName: 'BarChartComponent',
                    description: 'This example shows the CfBarChart component usage.',
                    fileName: 'bar-chart-1',
                    demos: [{
                            component: demo_bar_chart_1_1.CfDemoBarChart1,
                            inputs: {},
                        }]
                };
                break;
            case 'LineChart':
                this.componentData = {
                    componentName: 'LineChartComponent',
                    description: 'This example shows the CfLineChart component usage.',
                    fileName: 'line-chart-1',
                    demos: [{
                            component: demo_line_chart_1_1.CfDemoLineChart1,
                            inputs: {},
                        }]
                };
                break;
            case 'AreaChart':
                this.componentData = {
                    componentName: 'AreaChartComponent',
                    description: 'This example shows the CfAreaChart component usage.',
                    fileName: 'area-chart-1',
                    demos: [{
                            component: demo_area_chart_1_1.CfDemoAreaChart1,
                            inputs: {},
                        }]
                };
                break;
            case 'PieChart':
                this.componentData = {
                    componentName: 'PieChartComponent',
                    description: 'This example shows the CfPieChart component usage.',
                    fileName: 'pie-chart-1',
                    demos: [{
                            component: demo_pie_chart_1_1.CfDemoPieChart1,
                            inputs: {},
                        }]
                };
                break;
            case 'Calendar':
                this.componentData = {
                    componentName: 'CalendarComponent',
                    description: 'This example shows the calendar component usage.',
                    fileName: 'calendar-1',
                    demos: [{
                            component: demo_calendar_1_1.CfDemoCalendar1,
                            inputs: {},
                        }]
                };
                break;
            case 'Toolbar':
                this.componentData = {
                    componentName: 'ToolbarComponent',
                    description: 'This graphical control represents a Toolbar with extended options.',
                    fileName: 'toolbar-1',
                    demos: [{
                            component: demo_toolbar_1_1.CfDemoToolbar1,
                            inputs: {},
                        }]
                };
                break;
            case 'Gauge':
                this.componentData = {
                    componentName: 'GaugeComponent',
                    description: 'This graphical control represents a Gauge with extended options.',
                    fileName: 'gauge-1',
                    demos: [{
                            component: demo_gauge_1_1.CfDemoGauge1,
                            inputs: {},
                        }]
                };
                break;
            case 'GoogleMaps':
                this.componentData = {
                    componentName: 'GoogleMapsComponent',
                    description: 'This graphical control represents a GoogleMaps with extended options.',
                    fileName: 'google-maps-1',
                    demos: [{
                            component: demo_google_maps_1_1.CfDemoGoogleMaps1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            case 'FileUploader':
                this.componentData = {
                    componentName: 'FileUploaderComponent',
                    description: 'This graphical control represents a File Uploader component with extended options.',
                    fileName: 'file-uploader-1',
                    demos: [{
                            component: demo_file_uploader_1_1.CfDemoFileUploader1,
                            inputs: {
                                themeName: this.configuration.theme
                            },
                        }]
                };
                break;
            default:
                console.error('Unknown component');
                break;
        }
    };
    CfUiLibraryComponent.prototype.ngOnInit = function () {
        this.setComponent("Icon");
    };
    return CfUiLibraryComponent;
}());
CfUiLibraryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ui-library',
        templateUrl: './ui-library.component.html',
        styleUrls: ['./ui-library.component.css']
    })
], CfUiLibraryComponent);
exports.CfUiLibraryComponent = CfUiLibraryComponent;
//# sourceMappingURL=ui-library.component.js.map