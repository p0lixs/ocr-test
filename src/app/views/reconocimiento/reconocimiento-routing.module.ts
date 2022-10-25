import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReconocimientoComponent } from './reconocimiento.component';

const routes: Routes = [
  {
    path: '',
    component: ReconocimientoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReconocimientoRoutingModule {}
