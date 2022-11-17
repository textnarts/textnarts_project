import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgxMasonryModule } from 'ngx-masonry';
import { ScrollspyDirective } from './shared/scrollspy.directive';
import { FeatherModule } from 'angular-feather';

import { allIcons } from 'angular-feather/icons';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexItSolutionComponent } from './core/components/index-it-solution/index-it-solution.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageContactOneComponent } from './core/components/page-contact-one/page-contact-one.component';
import { PagePrivacyComponent } from './core/components/page-privacy/page-privacy.component';
import { PageTermsComponent } from './core/components/page-terms/page-terms.component';
import { PageServicesComponent } from './core/components/page-services/page-services.component';
import { ContentWritingDetailComponent } from './core/components/content-writing-detail/content-writing-detail.component';
import { TranslationDetailComponent } from './core/components/translation-detail/translation-detail.component';
import { WebsiteLocalizationDetailComponent } from './core/components/website-localization-detail/website-localization-detail.component';
import { AppLocalizationDetailComponent } from './core/components/app-localization-detail/app-localization-detail.component';
import { TranscriptionDetailComponent } from './core/components/transcription-detail/transcription-detail.component';
import { ProofredingServicesDetailComponent } from './core/components/proofreding-services-detail/proofreding-services-detail.component';
import { CopywritingDetailComponent } from './core/components/copywriting-detail/copywriting-detail.component';
import { TranscreationDetailComponent } from './core/components/transcreation-detail/transcreation-detail.component';
import { AboutUsComponent } from './core/components/about-us/about-us.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SwitcherComponent,
    ScrollspyDirective,
    IndexItSolutionComponent,
    MasterPageComponent,
    PageContactOneComponent,
    PagePrivacyComponent,
    PageTermsComponent,
    PageServicesComponent,
    ContentWritingDetailComponent,
    TranslationDetailComponent,
    WebsiteLocalizationDetailComponent,
    AppLocalizationDetailComponent,
    TranscriptionDetailComponent,
    ProofredingServicesDetailComponent,
    CopywritingDetailComponent,
    TranscreationDetailComponent,
    AboutUsComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
    NgxYoutubePlayerModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    SwiperModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgxMasonryModule
  ],
  exports: [
    FeatherModule,
    ScrollspyDirective
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
