import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit{

  personajes:any = null;

  personajeBuscar:string='';

  busqueda:boolean = false;

constructor(private servicio: ServicesService){}

  ngOnInit(): void{
    this.servicio.getAll().subscribe
    (res => this.personajes = res);
  }

}
