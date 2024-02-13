import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { EmailVerificationComponent } from './component/email-verification/email-verification.component';
import { privateRoute } from './guard/private-route.guard';
import { publicRoute } from './guard/public-route.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent, canActivate: [publicRoute] },
  { path: 'register', component: RegisterComponent, canActivate: [publicRoute] },
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [privateRoute] },
  { path: '**', redirectTo: '/login' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
