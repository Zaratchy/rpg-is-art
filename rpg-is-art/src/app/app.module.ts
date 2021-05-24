import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PseudoComponent } from './register/pseudo/pseudo.component';
import { EmailComponent } from './register/email/email.component';
import { Routes, RouterModule } from '@angular/router';
import { PasswordRegisterComponent } from './register/password-register/password-register.component';
import { AvatarRegisterComponent } from './register/avatar-register/avatar-register.component';
import { CguRegisterComponent } from './register/cgu-register/cgu-register.component';
import { EndRegisterComponent } from './register/end-register/end-register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [ 
  { path: 'pseudo', component: PseudoComponent },
  { path: 'email', component: EmailComponent },
  { path: 'password-register', component: PasswordRegisterComponent },
  { path: 'avatar-register', component: AvatarRegisterComponent },
  { path: 'cgu-register', component: CguRegisterComponent },
  { path: 'end-register', component: EndRegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'nav-bar', component: NavBarComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PseudoComponent,
    EmailComponent,
    PasswordRegisterComponent,
    AvatarRegisterComponent,
    CguRegisterComponent,
    EndRegisterComponent,
    LoginComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
