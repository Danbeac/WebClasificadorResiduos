import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { MaterialModule } from '../shared';
import { RouterModule } from '@angular/router';
import { SideNavModule } from './side-nav/side-nav.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SkeletonComponent,

  ],
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule,
    SideNavModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SkeletonComponent,
  ]
})

export class MasterModule { }
