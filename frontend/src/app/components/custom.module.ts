import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CallDetailComponent } from './pages/call-detail/call-detail.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    LoginLayoutComponent,
    HeaderComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    CallDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    HomeLayoutComponent,
    LoginLayoutComponent,
    HeaderComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    DatePipe
  ]
})
export class CustomModule {
  constructor() {}
}
