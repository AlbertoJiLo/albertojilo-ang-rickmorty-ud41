import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {


  @Input() personajeTarjeta: any = [];
  @Input() ocultado: boolean = false;
  @Input() clicar: boolean = false;


  constructor(){}

  detalles(){
    this.clicar= !this.clicar;
  }

  ngOnInit(){

  }
}
