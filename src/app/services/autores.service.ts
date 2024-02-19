import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from '../../core/models/autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private options={
    headers:{
      'Content-Type':'application/json'
    }
  }
  constructor(private http:HttpClient) { }
  public getAutores(){
    return this.http.get<Autor[]>('http://localhost:3000/autores',this.options)
  }
}

