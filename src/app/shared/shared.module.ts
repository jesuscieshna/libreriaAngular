import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumComponent } from './bread-crum/bread-crum.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';

//PRIME-NG
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DockModule } from 'primeng/dock'

@NgModule({
  declarations: [
    BreadCrumComponent,
    BarraNavegacionComponent
  ],
  exports:[
    BreadCrumComponent,
    BarraNavegacionComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BreadcrumbModule,
    DockModule
  ]
})
export class SharedModule { }
