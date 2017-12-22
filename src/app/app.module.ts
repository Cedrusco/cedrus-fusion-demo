import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { ToastrModule } from 'ngx-toastr';
// import { TreeModule } from 'angular-tree-component';
//import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
// import { GaugeModule } from 'angular-gauge';
// import { AgmCoreModule } from 'angular2-google-maps/core';

// import { FileUploaderModule } from '@uniprank/ng2-file-uploader';
// import { NgxGalleryModule } from 'ngx-gallery';

import { CfModule } from 'cedrus-fusion';
import { Themes } from 'cedrus-fusion';
import { Configuration } from 'cedrus-fusion';

import { CfBusinessModule } from 'cedrus-fusion-business';

import { AppComponent }  from './app.component';
import { CfUiLibraryComponent } from './ui-library/ui-library.component';
import { CfBusinessLibraryComponent } from './business-library/business-library.component';
import { BusinessDetailsComponent } from './business-library/business-details.component';
import { HomePageComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { GetStartedComponent } from './guide/getstarted.component';
import { TemplateGuideComponent } from './guide/template-guide.component';
import { ThemingGuideComponent } from './guide/theming-guide.component';
import { FormGuideComponent } from './guide/form-guide.component';
import { AppRoutingModule }  from './app-routing.module';

import { CfAlertComponent } from 'cedrus-fusion';
import { CfDialogComponent } from 'cedrus-fusion';
import { CfDemoButton1 } from './demos/button/demo.button-1';
import { CfDemoButton2 } from './demos/button/demo.button-2';
import { CfDemoButton3 } from './demos/button/demo.button-3';
import { CfDemoButton4 } from './demos/button/demo.button-4';
import { CfDemoButton5 } from './demos/button/demo.button-5';
import { CfDemoButton6 } from './demos/button/demo.button-6';
import { CfDemoIcon1 } from './demos/icon/demo.icon-1';
import { CfDemoIcon2 } from './demos/icon/demo.icon-2';
import { CfDemoIcon3 } from './demos/icon/demo.icon-3';
import { CfDemoIcon4 } from './demos/icon/demo.icon-4';
import { CfDemoIcon5 } from './demos/icon/demo.icon-5';
import { CfDemoIcon6 } from './demos/icon/demo.icon-6';
import { CfDemoImage1 } from './demos/image/demo.image-1';
import { CfDemoImage2 } from './demos/image/demo.image-2';
import { CfDemoImage3 } from './demos/image/demo.image-3';
import { CfDemoImage4 } from './demos/image/demo.image-4';
import { CfDemoMenu1 } from './demos/menu/demo.menu-1';
import { CfDemoMenu2 } from './demos/menu/demo.menu-2';
import { CfDemoMenu3 } from './demos/menu/demo.menu-3';
import { CfDemoMenu4 } from './demos/menu/demo.menu-4';
import { CfDemoMenu5 } from './demos/menu/demo.menu-5';
import { CfDemoButtonMenu1 } from './demos/button-menu/demo.button-menu-1';
import { CfDemoButtonMenu2 } from './demos/button-menu/demo.button-menu-2';
import { CfDemoButtonMenu3 } from './demos/button-menu/demo.button-menu-3';
import { CfDemoButtonMenu4 } from './demos/button-menu/demo.button-menu-4';
import { CfDemoInput1 } from './demos/input/demo.input-1';
import { CfDemoInput2 } from './demos/input/demo.input-2';
import { CfDemoInput3 } from './demos/input/demo.input-3';
import { CfDemoInput4 } from './demos/input/demo.input-4';
import { CfDemoSelect1 } from './demos/select/demo.select-1';
import { CfDemoSelect2 } from './demos/select/demo.select-2';
import { CfDemoSelect3 } from './demos/select/demo.select-3';
import { CfDemoSelect4 } from './demos/select/demo.select-4';
import { CfDemoCheckbox1 } from './demos/checkbox/demo.checkbox-1';
import { CfDemoCheckbox2 } from './demos/checkbox/demo.checkbox-2';
import { CfDemoCheckbox3 } from './demos/checkbox/demo.checkbox-3';
import { CfDemoCheckbox4 } from './demos/checkbox/demo.checkbox-4';
import { CfDemoCheckbox5 } from './demos/checkbox/demo.checkbox-5';
import { CfDemoRadio1 } from './demos/radio/demo.radio-1';
import { CfDemoRadio2 } from './demos/radio/demo.radio-2';
import { CfDemoRadio3 } from './demos/radio/demo.radio-3';
import { CfDemoRadio4 } from './demos/radio/demo.radio-4';
import { CfDemoRadio5 } from './demos/radio/demo.radio-5';
import { CfDemoSwitch1 } from './demos/switch/demo.switch-1';
import { CfDemoSwitch2 } from './demos/switch/demo.switch-2';
import { CfDemoSwitch3 } from './demos/switch/demo.switch-3';
import { CfDemoSwitch4 } from './demos/switch/demo.switch-4';
import { CfDemoSwitch5 } from './demos/switch/demo.switch-5';
import { CfDemoCard1 } from './demos/card/demo.card-1';
import { CfDemoDatatable1 } from './demos/datatable/demo.datatable-1';
import { CfDemoDatatable2 } from './demos/datatable/demo.datatable-2';
import { CfDemoDatatable3 } from './demos/datatable/demo.datatable-3';
import { CfDemoDatatable4 } from './demos/datatable/demo.datatable-4';
import { CfDemoDatatable5 } from './demos/datatable/demo.datatable-5';
import { CfDemoList1 } from './demos/list/demo.list-1';
import { CfDemoList2 } from './demos/list/demo.list-2';
import { CfDemoList3 } from './demos/list/demo.list-3';
import { CfDemoList4 } from './demos/list/demo.list-4';
import { CfDemoList5 } from './demos/list/demo.list-5';
import { CfDemoList6 } from './demos/list/demo.list-6';
import { CfDemoCore1 } from './demos/core/demo.core-1';
import { CfDemoCore2 } from './demos/core/demo.core-2';
import { CfDemoCore3 } from './demos/core/demo.core-3';
import { CfDemoForm1 } from './demos/form/demo.form-1';
import { CfDemoTabs1 } from './demos/tabs/demo.tabs-1';
import { CfDemoTabs2 } from './demos/tabs/demo.tabs-2';
import { CfDemoTabs3 } from './demos/tabs/demo.tabs-3';
import { CfDemoTabs4 } from './demos/tabs/demo.tabs-4';
import { CfDemoTabs5 } from './demos/tabs/demo.tabs-5';
import { CfDemoWizard1 } from './demos/wizard/demo.wizard-1';
import { CfDemoWizard2 } from './demos/wizard/demo.wizard-2';
import { CfDemoWizard3 } from './demos/wizard/demo.wizard-3';
import { CfDemoWizard4 } from './demos/wizard/demo.wizard-4';
import { CfDemoRating1 } from './demos/rating/demo.rating-1';
import { CfDemoRating2 } from './demos/rating/demo.rating-2';
import { CfDemoRating3 } from './demos/rating/demo.rating-3';
import { CfDemoRating4 } from './demos/rating/demo.rating-4';
import { CfDemoTreeview1 } from './demos/treeview/demo.treeview-1';
import { CfDemoTreeview2 } from './demos/treeview/demo.treeview-2';
import { CfDemoTreeview3 } from './demos/treeview/demo.treeview-3';
import { CfDemoFab1 } from './demos/fab/demo.fab-1';
import { CfDemoFab2 } from './demos/fab/demo.fab-2';
import { CfDemoFab3 } from './demos/fab/demo.fab-3';
import { CfDemoFab4 } from './demos/fab/demo.fab-4';
import { CfDemoAlerts1 } from './demos/alerts/demo.alerts-1';
import { CfDemoAlerts2 } from './demos/alerts/demo.alerts-2';
import { CfDemoAlerts3 } from './demos/alerts/demo.alerts-3';
import { CfDemoAlerts4 } from './demos/alerts/demo.alerts-4';
import { CfDemoDialog1 } from './demos/dialog/demo.dialog-1';
import { CfDemoDialog2 } from './demos/dialog/demo.dialog-2';
import { CfDemoDialog3 } from './demos/dialog/demo.dialog-3';
import { CfDemoDialog4 } from './demos/dialog/demo.dialog-4';
import { CfDemoBarChart1 } from './demos/bar-chart/demo.bar-chart-1';
import { CfDemoBarChart2 } from './demos/bar-chart/demo.bar-chart-2';
import { CfDemoBarChart3 } from './demos/bar-chart/demo.bar-chart-3';
import { CfDemoBarChart4 } from './demos/bar-chart/demo.bar-chart-4';
import { CfDemoLineChart1 } from './demos/line-chart/demo.line-chart-1';
import { CfDemoLineChart2 } from './demos/line-chart/demo.line-chart-2';
import { CfDemoLineChart3 } from './demos/line-chart/demo.line-chart-3';
import { CfDemoAreaChart1 } from './demos/area-chart/demo.area-chart-1';
import { CfDemoAreaChart2 } from './demos/area-chart/demo.area-chart-2';
import { CfDemoAreaChart3 } from './demos/area-chart/demo.area-chart-3';
import { CfDemoPieChart1 } from './demos/pie-chart/demo.pie-chart-1';
import { CfDemoPieChart2 } from './demos/pie-chart/demo.pie-chart-2';
import { CfDemoPieChart3 } from './demos/pie-chart/demo.pie-chart-3';
import { CfDemoCalendar1 } from './demos/calendar/demo.calendar-1';
import { CfDemoGallery1 } from './demos/gallery/demo.gallery-1';
import { CfDemoGallery2 } from './demos/gallery/demo.gallery-2';
import { CfDemoGallery3 } from './demos/gallery/demo.gallery-3';
import { CfDemoGallery4 } from './demos/gallery/demo.gallery-4';
import { CfDemoToolbar1 } from './demos/toolbar/demo.toolbar-1';
import { CfDemoToolbar2 } from './demos/toolbar/demo.toolbar-2';
import { CfDemoToolbar3 } from './demos/toolbar/demo.toolbar-3';
import { CfDemoToolbar4 } from './demos/toolbar/demo.toolbar-4';
import { CfDemoToolbar5 } from './demos/toolbar/demo.toolbar-5';
import { CfDemoToolbar6 } from './demos/toolbar/demo.toolbar-6';
import { CfDemoGauge1 } from './demos/gauge/demo.gauge-1';
import { CfDemoGauge2 } from './demos/gauge/demo.gauge-2';
import { CfDemoGauge3 } from './demos/gauge/demo.gauge-3';
import { CfDemoGauge4 } from './demos/gauge/demo.gauge-4';
import { CfDemoGoogleMaps1 } from './demos/google-maps/demo.google-maps-1';
import { CfDemoGoogleMaps2 } from './demos/google-maps/demo.google-maps-2';
import { CfDemoFileUploader1 } from './demos/file-uploader/demo.file-uploader-1';
import { CfDemoFileUploader2 } from './demos/file-uploader/demo.file-uploader-2';
// import { CfDemoSocket1 } from './demos/sockets/demo.socket-1';
import { CfDemoAutocomplete1 } from './demos/autocomplete/demo.autocomplete-1';
import { CfDemoAutocomplete2 } from './demos/autocomplete/demo.autocomplete-2';
import { CfDemoAutocomplete3 } from './demos/autocomplete/demo.autocomplete-3';
import { CfDemoAutocomplete4 } from './demos/autocomplete/demo.autocomplete-4';
import { CfDemoSidenav1 } from './demos/sidenav/demo.sidenav-1';
import { CfDemoSidenav2 } from './demos/sidenav/demo.sidenav-2';
import { CfDemoAvatar1 } from './demos/avatar/demo.avatar-1';
import { CfDemoAvatar2 } from './demos/avatar/demo.avatar-2';
import { CfDemoAvatar3 } from './demos/avatar/demo.avatar-3';
import { CfDemoAvatar4 } from './demos/avatar/demo.avatar-4';
import { CfDemoJsonEditor1 } from './demos/json-editor/demo.json-editor-1';
import { CfDemoJsonEditor2 } from './demos/json-editor/demo.json-editor-2';
import { CfDemoJsonEditor3 } from './demos/json-editor/demo.json-editor-3';
import { CedrusDemoLoaderModule } from './assets/cedrus-demo-loader/index';



//Business Components from cedrus-fusion-business
import { CfDemoWeather1 } from './demos/weather/demo.weather-1';
import { CfDemoNews1 } from './demos/news/demo.news-1';
import { CfDemoBPMList1 } from './demos/bpm-list/demo.bpm-list-1';

const DEMOS = [
  CfDemoButton1,
  CfDemoButton2,
  CfDemoButton3,
  CfDemoButton4,
  CfDemoButton5,
  CfDemoButton6,
  CfDemoButtonMenu1,
  CfDemoButtonMenu2,
  CfDemoButtonMenu3,
  CfDemoButtonMenu4,
  CfDemoIcon1,
  CfDemoIcon2,
  CfDemoIcon3,
  CfDemoIcon4,
  CfDemoIcon5,
  CfDemoIcon6,
  CfDemoMenu1,
  CfDemoMenu2,
  CfDemoMenu3,
  CfDemoMenu4,
  CfDemoMenu5,
  CfDemoInput1,
  CfDemoInput2,
  CfDemoInput3,
  CfDemoInput4,
  CfDemoSelect1,
  CfDemoSelect2,
  CfDemoSelect3,
  CfDemoSelect4,
  CfDemoCheckbox1,
  CfDemoCheckbox2,
  CfDemoCheckbox3,
  CfDemoCheckbox4,
  CfDemoCheckbox5,
  CfDemoRadio1,
  CfDemoRadio2,
  CfDemoRadio3,
  CfDemoRadio4,
  CfDemoRadio5,
  CfDemoSwitch1,
  CfDemoSwitch2,
  CfDemoSwitch3,
  CfDemoSwitch4,
  CfDemoSwitch5,
  CfDemoCard1,
  CfDemoDatatable1,
  CfDemoDatatable2,
  CfDemoDatatable3,
  CfDemoDatatable4,
  CfDemoDatatable5,
  CfDemoList1,
  CfDemoList2,
  CfDemoList3,
  CfDemoList4,
  CfDemoList5,
  CfDemoList6,
  CfDemoImage1,
  CfDemoImage2,
  CfDemoImage3,
  CfDemoImage4,
  CfDemoCore1,
  CfDemoCore2,
  CfDemoCore3,
  CfDemoDialog1,
  CfDemoDialog2,
  CfDemoDialog3,
  CfDemoDialog4,
  CfDemoForm1,
  CfDemoTabs1,
  CfDemoTabs2,
  CfDemoTabs3,
  CfDemoTabs4,
  CfDemoTabs5,
  CfDemoWizard1,
  CfDemoWizard2,
  CfDemoWizard3,
  CfDemoWizard4,
  CfDemoRating1,
  CfDemoRating2,
  CfDemoRating3,
  CfDemoRating4,
  CfDemoTreeview1,
  CfDemoTreeview2,
  CfDemoTreeview3,
  CfDemoFab1,
  CfDemoFab2,
  CfDemoFab3,
  CfDemoFab4,
  CfDemoAlerts1,
  CfDemoAlerts2,
  CfDemoAlerts3,
  CfDemoAlerts4,
  CfDemoBarChart1,
  CfDemoBarChart2,
  CfDemoBarChart3,
  CfDemoBarChart4,
  CfDemoLineChart1,
  CfDemoLineChart2,
  CfDemoLineChart3,
  CfDemoAreaChart1,
  CfDemoAreaChart2,
  CfDemoAreaChart3,
  CfDemoPieChart1,
  CfDemoPieChart2,
  CfDemoPieChart3,
  CfDemoCalendar1,
  CfDemoGallery1,
  CfDemoGallery2,
  CfDemoGallery3,
  CfDemoGallery4,
  CfDemoToolbar1,
  CfDemoToolbar2,
  CfDemoToolbar3,
  CfDemoToolbar4,
  CfDemoToolbar5,
  CfDemoToolbar6,
  CfDemoGauge1,
  CfDemoGauge2,
  CfDemoGauge3,
  CfDemoGauge4,
  CfDemoGoogleMaps1,
  CfDemoGoogleMaps2,
  CfDemoFileUploader1,
  CfDemoFileUploader2,
  CfDemoAutocomplete1,
  CfDemoAutocomplete2,
  CfDemoAutocomplete3,
  CfDemoAutocomplete4,
  CfDemoSidenav1,
  CfDemoSidenav2,
  CfDemoAvatar1,
  CfDemoAvatar2,
  CfDemoAvatar3,
  CfDemoAvatar4,
  CfDemoJsonEditor1,
  CfDemoJsonEditor2,
  CfDemoJsonEditor3,
  CfDemoWeather1,
  CfDemoNews1,
  CfDemoBPMList1 
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    CfModule,
    CfBusinessModule,
    CedrusDemoLoaderModule.forRoot(),
    NgxChartsModule,
    // ToastrModule.forRoot(),
    // TreeModule,
    // NgxDatatableModule,
    // GaugeModule.forRoot(),
    // AgmCoreModule.forRoot(),
    AppRoutingModule,
    // FileUploaderModule,
    // NgxGalleryModule,
  ],
  declarations: [
    AppComponent,
    CfUiLibraryComponent,
    CfBusinessLibraryComponent,
    BusinessDetailsComponent,
    HomePageComponent,
    GuideComponent,
    GetStartedComponent,
    TemplateGuideComponent,
    ThemingGuideComponent,
    FormGuideComponent,
    //CalendarComponent,
    ...DEMOS
  ],
  entryComponents: [
    ...DEMOS,
    CfDialogComponent,
    CfAlertComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
