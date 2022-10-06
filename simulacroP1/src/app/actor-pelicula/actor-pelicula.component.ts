import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  actorClickeado:any;

  onActorSeleccionado(event:any)
  {
    console.log("ME LLEGO EL EVENTO!! - DISTRIBUYENDO...");
    this.actorClickeado = event;
  }
}
