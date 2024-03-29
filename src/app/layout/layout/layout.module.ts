import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { Routing } from '../../routing';
import { UsersModule } from 'src/app/pages/users/users.module';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [NavBarComponent, SideMenuComponent, LayoutComponent],
  imports: [
    CommonModule,
    // LayoutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class LayoutModule {}
