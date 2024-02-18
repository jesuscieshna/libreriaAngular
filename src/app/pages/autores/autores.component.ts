import { Autor } from '../../../core/models/autor';
import { AutoresService } from '../../services/autores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.css'
})
export class AutoresComponent implements OnInit{
  autores:Autor[]=[]

  constructor(private AutoresService: AutoresService) {  }
  ngOnInit(): void {
    this.AutoresService.getAutores().subscribe((autores:Autor[])=>{
      this.autores=autores
      console.log(this.autores)
    })
  }
}