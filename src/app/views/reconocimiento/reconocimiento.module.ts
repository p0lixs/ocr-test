import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReconocimientoRoutingModule } from './reconocimiento-routing.module';
import { ReconocimientoComponent } from './reconocimiento.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [ReconocimientoComponent],
  imports: [
    ReconocimientoRoutingModule,
    SharedModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class ReconocimientoModule {}
