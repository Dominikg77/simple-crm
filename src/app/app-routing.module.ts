import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserComponent} from "./user/user.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {LoginComponent} from "./login/login.component";
import {LandingComponent} from "./landing/landing.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {canActivate, redirectUnauthorizedTo,redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectToLogin = ()=>redirectUnauthorizedTo(['login']);
const redirectToHome = ()=>redirectLoggedInTo(['/user']);

const routes: Routes = [

  { path: '', component: LandingComponent  },
  { path: 'login', component: LoginComponent, ...canActivate(redirectToHome) },
  { path: 'login/sign-up', component: SignUpComponent, ...canActivate(redirectToHome) },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'user', component: UserComponent , ...canActivate(redirectToLogin) },
  { path: 'user/:id', component: UserDetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
