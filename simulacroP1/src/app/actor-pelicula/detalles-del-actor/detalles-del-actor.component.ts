import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Actor } from 'src/app/Entidades/actor';

@Component({
  selector: 'app-detalles-del-actor',
  templateUrl: './detalles-del-actor.component.html',
  styleUrls: ['./detalles-del-actor.component.css']
})
export class DetallesDelActorComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}

  @Input() actorSeleccionado:any;

  flagNGLoading = true;

  nombreActor = "";
  apellidoActor = "";
  edadActor:number | undefined;
  paisNatalActor = "";
  sexoActor = "";

  ngOnChanges(changes: SimpleChanges): void
  {
    if (this.flagNGLoading == true)
    {
      this.flagNGLoading = false;
    }
    else
    {
      console.log("ACTOR CLICKEADO CAMBIO EN DETALLES!!!!");  
      this.cargarDetallesPaisDelActorSeleccionado(this.actorSeleccionado);
    }
  }

  cargarDetallesPaisDelActorSeleccionado(actorSeleccionado:Actor)
  {
    this.nombreActor = actorSeleccionado.nombre;
    this.apellidoActor = actorSeleccionado.apellido;
    this.edadActor = actorSeleccionado.edad;
    this.paisNatalActor = actorSeleccionado.paisNatal;
    this.sexoActor = actorSeleccionado.sexo;
  }

}
