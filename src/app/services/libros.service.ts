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
  private baseUrl= "https://localhost:44329/api/";
  constructor(private http:HttpClient) { }
  public getLibros(){
    return this.http.get<Libro[]>(`${this.baseUrl}libro/libro-controller`,this.options)
  }
}

