import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrl: './nuevo-libro.component.css'
})
export class NuevoLibroComponent implements OnInit{
  libroFormulario:FormGroup

  constructor(private fb:FormBuilder){
    this.libroFormulario = this.fb.group({})
  }
  ngOnInit(): void {
    this.libroFormulario=this.fb.group({
      nombre:["Prueba nombre",Validators.required,Validators.minLength(2)]
    })
  }
  
}
