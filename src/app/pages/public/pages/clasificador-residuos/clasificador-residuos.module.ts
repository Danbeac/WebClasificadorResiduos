import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasificadorResiduosRoutingModule } from './clasificador-residuos-routing.module';
import { ClasificadorResiduosComponent } from './clasificador-residuos.component';
import { FormImageComponent } from './components/form-image/form-image.component';
import { MaterialModule, SpinnerModule } from '../../../../shared';
import { BoxCollegeImagesComponent } from './components/box-college-images/box-college-images.component';


@NgModule({
  declarations: [
    ClasificadorResiduosComponent,
    FormImageComponent,
    BoxCollegeImagesComponent
  ],
  imports: [
    CommonModule,
    ClasificadorResiduosRoutingModule,
    MaterialModule,
    SpinnerModule
  ]
})
export class ClasificadorResiduosModule { }
