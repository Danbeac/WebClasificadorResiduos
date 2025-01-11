import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from './paginator/paginator.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginatorModule
  ],
  exports: [
    PaginatorModule
  ]
})
export class AppComponentsModule { }
