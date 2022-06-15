import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignUpConfirmComponent } from './sign-up-confirm/sign-up-confirm.component';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    SignUpConfirmComponent,
    PageWelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
