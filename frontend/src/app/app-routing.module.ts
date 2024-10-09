import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './components/layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './components/layouts/login-layout/login-layout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';

import { AuthGuard } from './services/auth.guard';
import { CallDetailComponent } from './components/pages/call-detail/call-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },

  {
    path: 'call-detail',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: CallDetailComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ],
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
