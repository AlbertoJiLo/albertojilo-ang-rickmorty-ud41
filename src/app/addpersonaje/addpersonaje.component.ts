import { Component, Input, OnInit } from '@angular/core';
import { DetallesComponent } from '../detalles/detalles.component';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-addpersonaje',
  templateUrl: './addpersonaje.component.html',
  styleUrls: ['./addpersonaje.component.css']
})
export class AddpersonajeComponent implements OnInit{


@Input() personaje: any = [];
@Input() editando:boolean = false;

personajeActualizado: any = [];

constructor(private servicio: ServicesService){}

  ngOnInit(): void{
    console.log(this.personajeActualizado.id);

  }

enviar(){

  this.personajeActualizado=this.personaje;
  this.servicio.update(this.personajeActualizado.id, this.personajeActualizado).subscribe
  (res => this.personajeActualizado = res);
  this.editando = !this.editando;

}

}
