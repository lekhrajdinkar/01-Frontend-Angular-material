import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './course-app/home/home.component';

//Child route for Course Application
const courseAppRoutes: Routes = [
  { path: "", component: HomeComponent},
  //{ path: "about", component: AboutComponent },
  //{ path: 'courses/:id', component: CourseComponent, resolve: { course: CourseResolver } },
  { path: "**", redirectTo: '/course/' }
];

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard]},
  { path: 'course', children : courseAppRoutes}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
