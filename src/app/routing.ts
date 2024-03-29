import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },


];

export { Routing };
