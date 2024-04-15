import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/login-gurad/login.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoginGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout/layout.module').then((m) => m.LayoutModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash : true} )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
