import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from './models/characters.model';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {



  constructor(private http: HttpClient) { }

  getAll(): Observable<Characters[]>{
    return this.http.get<Characters[]>('http://localhost:3000/characters');
  }

  getById(id:number): Observable<Characters[]>{
    return this.http.get<Characters[]>('http://localhost:3000/characters/'+id);
  }

  create(data:Characters[]): Observable<Characters[]>{
    return this.http.post<Characters[]>('http://localhost:3000/characters/',data);
  }

  update(id:number, data: Characters[]): Observable<Characters[]>{
    return this.http.put<Characters[]>('http://localhost:3000/characters/'+id,data);
  }

  delete(id:number): Observable<Characters[]>{
    return this.http.delete<Characters[]>('http://localhost:3000/characters/'+id);
  }

}
