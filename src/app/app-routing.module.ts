import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpConfirmComponent } from './sign-up-confirm/sign-up-confirm.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const routes: Routes = [
  {path: 'sign-up-confirm', component: SignUpConfirmComponent},
  {path: 'welcome', component: PageWelcomeComponent},
  {path: '', component: SignUpFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
