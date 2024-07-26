import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { introGuard } from './guards/intro.guard';
import { loginGuard } from './guards/login.guard';
import { provideHttpClient } from '@angular/common/http'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [loginGuard, introGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sliders',
    loadChildren: () => import('./sliders/sliders.module').then( m => m.SlidersPageModule),
    canActivate: [loginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [provideHttpClient()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
