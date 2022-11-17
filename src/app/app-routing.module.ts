import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './core/components/about-us/about-us.component';
import { AppLocalizationDetailComponent } from './core/components/app-localization-detail/app-localization-detail.component';
import { ContentWritingDetailComponent } from './core/components/content-writing-detail/content-writing-detail.component';
import { CopywritingDetailComponent } from './core/components/copywriting-detail/copywriting-detail.component';
import { IndexItSolutionComponent } from './core/components/index-it-solution/index-it-solution.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageContactOneComponent } from './core/components/page-contact-one/page-contact-one.component';
import { PagePrivacyComponent } from './core/components/page-privacy/page-privacy.component';
import { PageServicesComponent } from './core/components/page-services/page-services.component';
import { PageTermsComponent } from './core/components/page-terms/page-terms.component';
import { ProofredingServicesDetailComponent } from './core/components/proofreding-services-detail/proofreding-services-detail.component';
import { TranscreationDetailComponent } from './core/components/transcreation-detail/transcreation-detail.component';
import { TranscriptionDetailComponent } from './core/components/transcription-detail/transcription-detail.component';
import { TranslationDetailComponent } from './core/components/translation-detail/translation-detail.component';
import { WebsiteLocalizationDetailComponent } from './core/components/website-localization-detail/website-localization-detail.component';
const routes: Routes = [ 
  {
    path: '',
component: MasterPageComponent,
children: [
  { path: '', component: IndexItSolutionComponent },
{path:'contact-us',component:PageContactOneComponent},
{path:'terms',component:PageTermsComponent},
{path:'privacy',component:PagePrivacyComponent},
{path:'services',component:PageServicesComponent},
{path:'content-writing-detail',component:ContentWritingDetailComponent},
{path:'translation-detail',component:TranslationDetailComponent},
{path:'website-localization-detail',component:WebsiteLocalizationDetailComponent},
{path:'app-localization-detail',component:AppLocalizationDetailComponent},
{path:'transcription-detail',component:TranscriptionDetailComponent},
{path:'proofreading-services-detail',component:ProofredingServicesDetailComponent},
{path:'copywriting-detail',component:CopywritingDetailComponent},
{path:'transcreation-detail',component:TranscreationDetailComponent},
{path:'about-us',component:AboutUsComponent}]
},
{path:"**",redirectTo:"''"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
