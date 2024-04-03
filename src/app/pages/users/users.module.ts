import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { MainComponent } from '../main/main.component';
import { ConditionsComponent } from '../conditions/conditions.component';
import { PolicyComponent } from '../policy/policy.component';


@NgModule({
  declarations: [
    UsersComponent,
    MainComponent,
    PolicyComponent,
    ConditionsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
