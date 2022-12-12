import { Component, Input } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-crearpersonaje',
  templateUrl: './crearpersonaje.component.html',
  styleUrls: ['./crearpersonaje.component.css']
})
export class CrearpersonajeComponent {

  personaje: any =
  {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "gender": "Male",
  "origin": "Earth",
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  };



  creado: boolean = false;

  constructor(private servicio: ServicesService){}

    ngOnInit(): void{

    }

  enviar(){

    this.servicio.create(this.personaje).subscribe
    (res => this.personaje = res);
    this.creado=true;
  }

  }
