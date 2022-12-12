import { Component,Input } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  personajeDetalles: any = null;

  @Input() personajeId: any = null;

  click:boolean = false;
  ocultar:boolean = false;

  constructor(private servicio: ServicesService){}

  ngOnInit(): void{
    this.servicio.getById(this.personajeId).subscribe
    (res => this.personajeDetalles = res);
  }

  detalles(){
    this.ocultar= !this.ocultar;
    this.click= false;
  }

}
