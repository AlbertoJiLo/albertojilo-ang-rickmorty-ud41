import { Component,Input } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  @Input() personajeId: any = null;

  personajeDetalles: any = null;
  editando: boolean = false;
  click:boolean = false;
  ocultar:boolean = false;
  estasSeguro: any = false;

  constructor(private servicio: ServicesService){}

  ngOnInit(): void{
    this.servicio.getById(this.personajeId).subscribe
    (res => this.personajeDetalles = res);
  }


  editar(){
    this.editando = !this.editando;
  }


  borrar(){
    this.estasSeguro = window.confirm("¿Estás seguro?")
    if(this.estasSeguro){
          this.servicio.delete(this.personajeDetalles.id).subscribe
    (res => this.personajeDetalles = res);
    }
  }

}
