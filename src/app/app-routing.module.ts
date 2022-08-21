import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'client-register',
    loadChildren: () => import('./client-register/client-register.module').then( m => m.ClientRegisterPageModule)
  },
  {
    path: 'client-login',
    loadChildren: () => import('./client-login/client-login.module').then( m => m.ClientLoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'contractor-register',
    loadChildren: () => import('./contractor-register/contractor-register.module').then( m => m.ContractorRegisterPageModule)
  },

  {
    path: 'cdashboard',
    loadChildren: () => import('./cdashboard/cdashboard.module').then( m => m.CdashboardPageModule)
  },
  {
    path: 'cverify',
    loadChildren: () => import('./cverify/cverify.module').then( m => m.CverifyPageModule)
  },
  {
    path: 'contractor-login',
    loadChildren: () => import('./contractor-login/contractor-login.module').then( m => m.ContractorLoginPageModule)
  },
  {
    path: 'client-options',
    loadChildren: () => import('./client-options/client-options.module').then( m => m.ClientOptionsPageModule)
  },
  {
    path: 'contractor-options',
    loadChildren: () => import('./contractor-options/contractor-options.module').then( m => m.ContractorOptionsPageModule)
  },
  {
    path: 'capture-package',
    loadChildren: () => import('./capture-package/capture-package.module').then( m => m.CapturePackagePageModule)
  },



 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
