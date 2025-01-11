import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '../../master/skeleton/skeleton.component';
import { ClasificadorResiduosComponent } from './pages/clasificador-residuos/clasificador-residuos.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
        {
            path: 'clasificador-residuos',
            component: ClasificadorResiduosComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
