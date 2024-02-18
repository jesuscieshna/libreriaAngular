import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { LibrosComponent } from './libros/libros.component';
import { TemasComponent } from './temas/temas.component';
import { AutoresComponent } from './autores/autores.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BreadCrumComponent } from '../shared/bread-crum/bread-crum.component';
import { SharedModule } from '../shared/shared.module';

//prime-ng
import {CardModule} from 'primeng/card';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        MainPageComponent,
        LibrosComponent,
        TemasComponent,
        AutoresComponent,
        NuevoLibroComponent
    ], exports: [
    //MainPageComponent,
    //LibrosComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        ComponentsModule,
        ButtonModule,
        CardModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class PagesModule { }
