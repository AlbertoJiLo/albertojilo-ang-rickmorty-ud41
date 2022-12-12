import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5');
  }

  getById(id:number){
    return this.http.get('https://rickandmortyapi.com/api/character/'+id);
  }
}
