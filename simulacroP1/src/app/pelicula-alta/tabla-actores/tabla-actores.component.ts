import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/Entidades/actor';
import { SrvActoresService } from 'src/app/Servicios/srv-actores.service';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {

  arrayActores:any;

  @Output() public actorClickeado = new EventEmitter<any>();

  constructor(public srvActores:SrvActoresService) 
  {
    this.arrayActores = srvActores.dbActores;
  }

  ngOnInit(): void {}

  actorClickeadoEvent(actorClickeado:Actor)
  {
    this.actorClickeado.emit(actorClickeado);
  }

}
