import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CfUiLibraryComponent } from './ui-library/ui-library.component';
import { CfBusinessLibraryComponent } from './business-library/business-library.component';
import { BusinessDetailsComponent } from './business-library/business-details.component';
import { HomePageComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { GetStartedComponent } from './guide/getstarted.component';
import { TemplateGuideComponent } from './guide/template-guide.component';
import { ThemingGuideComponent } from './guide/theming-guide.component';
import { FormGuideComponent } from './guide/form-guide.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'components',  component: CfUiLibraryComponent },
  { path: 'business', component: CfBusinessLibraryComponent },
  { path: 'business/:type', component: BusinessDetailsComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'guide/getstarted', component: GetStartedComponent },
  { path: 'guide/template', component: TemplateGuideComponent },
  { path: 'guide/theming', component: ThemingGuideComponent },
  { path: 'guide/forms', component: FormGuideComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
