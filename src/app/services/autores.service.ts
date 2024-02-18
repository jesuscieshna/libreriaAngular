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
  private baseUrl= "https://localhost:44329/api/";
  constructor(private http:HttpClient) { }
  public getAutores(){
    return this.http.get<Autor[]>(`${this.baseUrl}autor/autor-controller`,this.options)
  }
}

