import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MasterModule } from '../../master/master.module';
import { ClasificadorResiduosModule } from './pages/clasificador-residuos/clasificador-residuos.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MasterModule,
    ClasificadorResiduosModule
  ]
})
export class PublicModule { }
