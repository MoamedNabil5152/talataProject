import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth-guards/auth.guard';
import { UsersComponent } from './users/users.component';
import { MainComponent } from '../main/main.component';
import { ConditionsComponent } from '../conditions/conditions.component';
import { PolicyComponent } from '../policy/policy.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'terms-conditions', component: ConditionsComponent },
  { path: 'privacy-policy', component: PolicyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
