import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs';
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

  constructor(private servicio: ServicesService,
    private router: Router){}

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

  borradologico(): void{
    this.servicio.update(this.personajeDetalles.id, this.personajeDetalles).subscribe
    (res  => {
      this.personajeDetalles.logicstatus = 0
      console.log(res);
    });
    alert("Borrado lógico con éxito. El personaje " +this.personajeDetalles.name+ " ha sido borrado")
  }

}
