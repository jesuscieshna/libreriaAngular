import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LibrosComponent } from './libros/libros.component';
import { MainPageComponent } from './main-page.component';
import { TemasComponent } from './temas/temas.component';
import { AutoresComponent } from './autores/autores.component';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
//import { CommonModule } from '@angular/common';
//import { PagesModule } from './pages.module';

const routes: Routes = [
  {
    path:'main', component: MainPageComponent, children:[
      {path: 'libros', component: LibrosComponent, data:{title:"Libros"}},
      {path: 'temas', component: TemasComponent, data:{title:"Temas"}},
      {path: 'autores', component: AutoresComponent, data:{title:"Autores"}},
      {path: 'nuevo-libro',component: NuevoLibroComponent,data:{title:"Nuevo Libro"}}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
