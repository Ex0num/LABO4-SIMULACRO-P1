import { Injectable } from '@angular/core';
import { Actor } from '../Entidades/actor';

@Injectable({
  providedIn: 'root'
})
export class SrvActoresService {

  constructor() {

    this.cargarData();
  }

  dbActores = new Array();

  cargarData()
  {
    this.dbActores = [
      new Actor("Tom","Hanks",45,"Masculino","Estados Unidos"),
      new Actor("Robert","Downey Jr",67,"Masculino","Estados Unidos"),
      new Actor("Elle","Fanning",25,"Femenino","Russia"),
      new Actor("Jennifer","Lawrence",55,"Femenino","Argentina"),
      new Actor("Saorirse","Ronan",25,"Femenino","Australia"),
  ]
  }
}
