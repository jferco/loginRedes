import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { HomeComponent } from './home/home.component';

var firebaseConfig = {
  apiKey: 'AIzaSyAjkm5ni5-eUA1mQbB5slKephpHPJ_T8AI',
  authDomain: 'redesvpn-c8261.firebaseapp.com',
  projectId: 'redesvpn-c8261',
  storageBucket: 'redesvpn-c8261.appspot.com',
  messagingSenderId: '15243513407',
  appId: '1:15243513407:web:3556e52b434408c058728a',
};

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, VerifyEmailComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
