import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reconocimiento',
    loadChildren: () =>
      import('./views/reconocimiento/reconocimiento.module').then(
        (m) => m.ReconocimientoModule
      ),
  },
  {
    path: '',
    redirectTo: '/reconocimiento',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
