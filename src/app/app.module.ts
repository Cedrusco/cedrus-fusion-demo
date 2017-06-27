import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
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

import { AppComponent }  from './app.component';
import { CfUiLibraryComponent } from './ui-library/ui-library.component';
import { CfBusinessLibraryComponent } from './business-library/business-library.component';
import { AppRoutingModule }  from './app-routing.module';

import { CfAlertComponent } from 'cedrus-fusion';
import { CfDialogComponent } from 'cedrus-fusion';
import { CfDemoButton1 } from './demos/button/demo.button-1';
import { CfDemoButton2 } from './demos/button/demo.button-2';
import { CfDemoButton3 } from './demos/button/demo.button-3';
import { CfDemoButton4 } from './demos/button/demo.button-4';
import { CfDemoIcon1 } from './demos/icon/demo.icon-1';
import { CfDemoIcon2 } from './demos/icon/demo.icon-2';
import { CfDemoIcon3 } from './demos/icon/demo.icon-3';
import { CfDemoIcon4 } from './demos/icon/demo.icon-4';
import { CfDemoImage1 } from './demos/image/demo.image-1';
import { CfDemoImage2 } from './demos/image/demo.image-2';
import { CfDemoMenu1 } from './demos/menu/demo.menu-1';
import { CfDemoMenu2 } from './demos/menu/demo.menu-2';
import { CfDemoButtonMenu1 } from './demos/button-menu/demo.button-menu-1';
import { CfDemoButtonMenu2 } from './demos/button-menu/demo.button-menu-2';
import { CfDemoInput1 } from './demos/input/demo.input-1';
import { CfDemoInput2 } from './demos/input/demo.input-2';
import { CfDemoInput3 } from './demos/input/demo.input-3';
import { CfDemoSelect1 } from './demos/select/demo.select-1';
import { CfDemoSelect2 } from './demos/select/demo.select-2';
import { CfDemoSelect3 } from './demos/select/demo.select-3';
import { CfDemoCheckbox1 } from './demos/checkbox/demo.checkbox-1';
import { CfDemoCheckbox2 } from './demos/checkbox/demo.checkbox-2';
import { CfDemoCheckbox3 } from './demos/checkbox/demo.checkbox-3';
import { CfDemoRadio1 } from './demos/radio/demo.radio-1';
import { CfDemoRadio2 } from './demos/radio/demo.radio-2';
import { CfDemoRadio3 } from './demos/radio/demo.radio-3';
import { CfDemoSwitch1 } from './demos/switch/demo.switch-1';
import { CfDemoSwitch2 } from './demos/switch/demo.switch-2';
import { CfDemoSwitch3 } from './demos/switch/demo.switch-3';
import { CfDemoCard1 } from './demos/card/demo.card-1';
import { CfDemoDatatable1 } from './demos/datatable/demo.datatable-1';
import { CfDemoList1 } from './demos/list/demo.list-1';
import { CfDemoList2 } from './demos/list/demo.list-2';
import { CfDemoCore1 } from './demos/core/demo.core-1';
import { CfDemoCore2 } from './demos/core/demo.core-2';
import { CfDemoCore3 } from './demos/core/demo.core-3';
import { CfDemoForm1 } from './demos/form/demo.form-1';
import { CfDemoTabs1 } from './demos/tabs/demo.tabs-1';
import { CfDemoTabs2 } from './demos/tabs/demo.tabs-2';
import { CfDemoTabs3 } from './demos/tabs/demo.tabs-3';
import { CfDemoWizard1 } from './demos/wizard/demo.wizard-1';
import { CfDemoWizard2 } from './demos/wizard/demo.wizard-2';
import { CfDemoWizard3 } from './demos/wizard/demo.wizard-3';
import { CfDemoRating1 } from './demos/rating/demo.rating-1';
import { CfDemoRating2 } from './demos/rating/demo.rating-2';
import { CfDemoRating3 } from './demos/rating/demo.rating-3';
import { CfDemoTreeview1 } from './demos/treeview/demo.treeview-1';
import { CfDemoTreeview2 } from './demos/treeview/demo.treeview-2';
import { CfDemoFab1 } from './demos/fab/demo.fab-1';
import { CfDemoFab2 } from './demos/fab/demo.fab-2';
import { CfDemoFab3 } from './demos/fab/demo.fab-3';
import { CfDemoAlerts1 } from './demos/alerts/demo.alerts-1';
import { CfDemoDialog1 } from './demos/dialog/demo.dialog-1';
import { CfDemoDialog2 } from './demos/dialog/demo.dialog-2';
import { CfDemoDialog3 } from './demos/dialog/demo.dialog-3';
import { CfDemoBarChart1 } from './demos/bar-chart/demo.bar-chart-1';
import { CfDemoLineChart1 } from './demos/line-chart/demo.line-chart-1';
import { CfDemoAreaChart1 } from './demos/area-chart/demo.area-chart-1';
import { CfDemoPieChart1 } from './demos/pie-chart/demo.pie-chart-1';
import { CfDemoCalendar1 } from './demos/calendar/demo.calendar-1';
import { CfDemoGallery1 } from './demos/gallery/demo.gallery-1';
import { CfDemoGallery2 } from './demos/gallery/demo.gallery-2';
import { CfDemoToolbar1 } from './demos/toolbar/demo.toolbar-1';
import { CfDemoGauge1 } from './demos/gauge/demo.gauge-1';
import { CfDemoGauge2 } from './demos/gauge/demo.gauge-2';
import { CfDemoGauge3 } from './demos/gauge/demo.gauge-3';
import { CfDemoGoogleMaps1 } from './demos/google-maps/demo.google-maps-1';
import { CfDemoGoogleMaps2 } from './demos/google-maps/demo.google-maps-2';
import { CfDemoFileUploader1 } from './demos/file-uploader/demo.file-uploader-1';
import { CfDemoFileUploader2 } from './demos/file-uploader/demo.file-uploader-2';
// import { CfDemoSocket1 } from './demos/sockets/demo.socket-1';
import { CfDemoAutocomplete1 } from './demos/autocomplete/demo.autocomplete-1';
import { CfDemoAutocomplete2 } from './demos/autocomplete/demo.autocomplete-2';
import { CfDemoAutocomplete3 } from './demos/autocomplete/demo.autocomplete-3';
import { CedrusDemoLoaderModule } from './assets/cedrus-demo-loader/index';

const DEMOS = [
  CfDemoButton1,
  CfDemoButton2,
  CfDemoButton3,
  CfDemoButton4,
  CfDemoButtonMenu1,
  CfDemoButtonMenu2,
  CfDemoIcon1,
  CfDemoIcon2,
  CfDemoIcon3,
  CfDemoIcon4,
  CfDemoMenu1,
  CfDemoMenu2,
  CfDemoInput1,
  CfDemoInput2,
  CfDemoInput3,
  CfDemoSelect1,
  CfDemoSelect2,
  CfDemoSelect3,
  CfDemoCheckbox1,
  CfDemoCheckbox2,
  CfDemoCheckbox3,
  CfDemoRadio1,
  CfDemoRadio2,
  CfDemoRadio3,
  CfDemoSwitch1,
  CfDemoSwitch2,
  CfDemoSwitch3,
  CfDemoCard1,
  CfDemoDatatable1,
  CfDemoList1,
  CfDemoList2,
  CfDemoImage1,
  CfDemoImage2,
  CfDemoCore1,
  CfDemoCore2,
  CfDemoCore3,
  CfDemoDialog1,
  CfDemoDialog2,
  CfDemoDialog3,
  CfDemoForm1,
  CfDemoTabs1,
  CfDemoTabs2,
  CfDemoTabs3,
  CfDemoWizard1,
  CfDemoWizard2,
  CfDemoWizard3,
  CfDemoRating1,
  CfDemoRating2,
  CfDemoRating3,
  CfDemoTreeview1,
  CfDemoTreeview2,
  CfDemoFab1,
  CfDemoFab2,
  CfDemoFab3,
  CfDemoAlerts1,
  CfDemoBarChart1,
  CfDemoLineChart1,
  CfDemoAreaChart1,
  CfDemoPieChart1,
  CfDemoCalendar1,
  CfDemoGallery1,
  CfDemoGallery2,
  CfDemoToolbar1,
  CfDemoGauge1,
  CfDemoGauge2,
  CfDemoGauge3,
  CfDemoGoogleMaps1,
  CfDemoGoogleMaps2,
  CfDemoFileUploader1,
  CfDemoFileUploader2,
  CfDemoAutocomplete1,
  CfDemoAutocomplete2,
  CfDemoAutocomplete3,
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    CfModule,
    CedrusDemoLoaderModule.forRoot(),
    // NgxChartsModule,
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
