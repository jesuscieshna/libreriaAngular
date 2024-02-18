import { Libro } from '../../../core/models/libro';
import { LibrosService } from '../../services/libros.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {

  //libro: Libro = {id:0, isbn: '',nombre:'',autor:'',tema:'',precio:0, edicion:'',formato:'',cantidad:0,imgname:null}
  libros:Libro[] = []

  constructor(private LibrosService: LibrosService) {  }
  ngOnInit(): void {
    this.LibrosService.getLibros().subscribe((libros:Libro[])=>{
      this.libros=libros
      console.log(this.libros)
    })
  }
}
