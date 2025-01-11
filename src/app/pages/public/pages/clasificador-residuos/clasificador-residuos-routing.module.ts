import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificadorResiduosComponent } from './clasificador-residuos.component';

const routes: Routes = [
  {
    path: '',
    component: ClasificadorResiduosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificadorResiduosRoutingModule { }
