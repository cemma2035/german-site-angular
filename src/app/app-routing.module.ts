import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EinsteinComponent } from './einstein/einstein.component';
import { OverallComponent } from './overall/overall.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizDashboardComponent } from './quiz-dashboard/quiz-dashboard.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'einstein', component: EinsteinComponent },
  { path: 'overall', component: OverallComponent },
  { path: 'forgot', component: ForgotPasswordComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'quiz-dashboard', component: QuizDashboardComponent},
  { path: 'quiz', component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
