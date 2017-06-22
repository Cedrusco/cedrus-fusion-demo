import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CfUiLibraryComponent } from './ui-library/ui-library.component';
import { CfBusinessLibraryComponent } from './business-library/business-library.component';

const routes: Routes = [
  { path: '', redirectTo: '/components', pathMatch: 'full' },
  { path: 'components',  component: CfUiLibraryComponent },
  { path: 'business', component: CfBusinessLibraryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
