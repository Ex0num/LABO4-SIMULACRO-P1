import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Actor } from 'src/app/Entidades/actor';
import { SrvPeliculasService } from 'src/app/Servicios/srv-peliculas.service';

@Component({
  selector: 'app-peliculas-del-actor',
  templateUrl: './peliculas-del-actor.component.html',
  styleUrls: ['./peliculas-del-actor.component.css']
})
export class PeliculasDelActorComponent implements OnInit {

  constructor(public srvPeliculas:SrvPeliculasService) {}

  ngOnInit(): void {}

  @Input() actorSeleccionado:any;

  flagNGLoading = true;

  arrayPeliculasDelActor = new Array();

  ngOnChanges(changes: SimpleChanges): void
  {
    if (this.flagNGLoading == true)
    {
      this.flagNGLoading = false;
    }
    else
    {
      console.log("ACTOR CLICKEADO CAMBIO EN PELICULAS DEL ACTOR!!!!");
      this.cargarPeliculasDelActorSeleccionado(this.actorSeleccionado);
    }
  }

  cargarPeliculasDelActorSeleccionado(actorSeleccionado:Actor)
  {
    this.limpiarArrayPeliculasDelActor();

    this.srvPeliculas.databasePeliculas.forEach( (element)=> 
    {
        if (element.actorProtagonista?.nombre == actorSeleccionado.nombre && element.actorProtagonista?.apellido == actorSeleccionado.apellido)
        {
          this.arrayPeliculasDelActor.push(element);
        }
    })
  }

  limpiarArrayPeliculasDelActor()
  {
    do
    {
      this.arrayPeliculasDelActor.pop();
    }while(this.arrayPeliculasDelActor.length > 0)
  }

}
