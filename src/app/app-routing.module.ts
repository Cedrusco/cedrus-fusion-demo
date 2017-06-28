import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CfUiLibraryComponent } from './ui-library/ui-library.component';
import { CfBusinessLibraryComponent } from './business-library/business-library.component';
import { HomePageComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'components',  component: CfUiLibraryComponent },
  { path: 'business', component: CfBusinessLibraryComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'guide', component: GuideComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
