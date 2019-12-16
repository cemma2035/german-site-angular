import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EinsteinComponent } from './einstein/einstein.component';
import { SearchNavbarComponent } from './search-navbar/search-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurGalleryComponent } from './our-gallery/our-gallery.component';
import { SlickModule } from 'ngx-slick';
import { FooterComponent } from './footer/footer.component';
import { OverallComponent } from './overall/overall.component';
import { GermanLangTabComponent } from './german-lang-tab/german-lang-tab.component';
import { EnrollTabComponent } from './enroll-tab/enroll-tab.component';
import { BlogTabComponent } from './blog-tab/blog-tab.component';
import { LoginTabComponent } from './login-tab/login-tab.component';
import { ResultsTabComponent } from './results-tab/results-tab.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService} from './services/api.service';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizDashboardComponent } from './quiz-dashboard/quiz-dashboard.component';
import { QuizViewSelectComponent } from './quiz-view-select/quiz-view-select.component';
import { QuizViewFillComponent } from './quiz-view-fill/quiz-view-fill.component';
import { QuizViewInputComponent } from './quiz-view-input/quiz-view-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    EinsteinComponent,
    SearchNavbarComponent,
    OurGalleryComponent,
    FooterComponent,
    OverallComponent,
    GermanLangTabComponent,
    EnrollTabComponent,
    BlogTabComponent,
    LoginTabComponent,
    ResultsTabComponent,
    AlertModalComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ProfileComponent,
    QuizComponent,
    QuizDashboardComponent,
    QuizViewSelectComponent,
    QuizViewFillComponent,
    QuizViewInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [QuizViewSelectComponent, QuizViewFillComponent, QuizViewInputComponent]
})
export class AppModule { }
