import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/login-gurad/login.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) ,  canActivate: [LoginGuard],
},
  { path: 'users', loadChildren: () => import('./users/users/users.module').then((m) => m.UsersModule) },
  {path : 'home' , component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
