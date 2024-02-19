import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  constructor(private router:Router){}
  ngOnInit(): void {
    this.navBar=
    [{
      label:"Libros",
      icon:"https://cdn-icons-png.flaticon.com/128/3532/3532104.png",
      command:()=>{
        this.router.navigateByUrl("main/libros")}
    },
    {
      label:"Autores",
      icon:"https://cdn-icons-png.flaticon.com/512/1995/1995562.png",
      command:()=>{
        this.router.navigateByUrl("main/autores")}
    },
    {
    label:"Temas",
      icon:"https://www.residenciauniversitariaindima.es/wp-content/uploads/2021/07/biblioteca.png.webp",
      command:()=>{
        this.router.navigateByUrl("main/temas")}
    },

    ]
  }
  navBar:MenuItem[]=[]
}
