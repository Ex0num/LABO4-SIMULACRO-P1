import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from '../Entidades/actor';
import { SrvActoresService } from '../Servicios/srv-actores.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  constructor(public srvActores:SrvActoresService) 
  {
    this.cargarActoresATabla();
  }

  ngOnInit(): void {}

  actoresColumn1 = new Array();
  actoresColumn2 = new Array();

  @Output() public actorSeleccionado = new EventEmitter<any>();

  cargarActoresATabla()
  {
    this.limpiarColumnas();

    console.log("LEYENDO ACTORES DB");

    this.srvActores.dbActores.forEach(actorActual => 
    {
        if (this.actoresColumn1.length > this.actoresColumn2.length)
        {
          this.actoresColumn2.push(actorActual);
        }
        else if (this.actoresColumn1.length < this.actoresColumn2.length)
        {
          this.actoresColumn1.push(actorActual);
        }
        else if (this.actoresColumn1.length == this.actoresColumn2.length)
        {
          this.actoresColumn1.push(actorActual);
        }
    });

    console.log(this.actoresColumn1);
    console.log(this.actoresColumn2);
  }

  actorClickeado(actorRecibido:Actor)
  {
    console.log("UN ACTOR EN LA TABLA FUE CLICKEADO");
    console.log(actorRecibido);

    this.actorSeleccionado.emit(actorRecibido);
  }

  limpiarColumnas()
  {
    do
    {
      this.actoresColumn1.pop();

    }while(this.actoresColumn1.length >= 1)

    do
    {
      this.actoresColumn2.pop();

    }while(this.actoresColumn2.length >= 1)
  }
}
