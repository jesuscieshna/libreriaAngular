import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../../core/models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private options={
    headers:{
      'Content-Type':'application/json'
    }
  }
  constructor(private http:HttpClient) { }
  public getLibros(){
    return this.http.get<Libro[]>('http://localhost:3000/libros',this.options)
  }
}

