import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CfUiLibraryComponent } from './ui-library/ui-library.component';
import { CfBusinessLibraryComponent } from './business-library/business-library.component';
import { HomePageComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { GetStartedComponent } from './guide/getstarted.component';
import { TemplateGuideComponent } from './guide/template-guide.component';
import { ThemingGuideComponent } from './guide/theming-guide.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'components',  component: CfUiLibraryComponent },
  { path: 'business', component: CfBusinessLibraryComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'guide/getstarted', component: GetStartedComponent },
  { path: 'guide/template', component: TemplateGuideComponent },
  { path: 'guide/theming', component: ThemingGuideComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
