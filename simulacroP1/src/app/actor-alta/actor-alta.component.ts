import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Actor } from '../Entidades/actor';
import { SrvActoresService } from '../Servicios/srv-actores.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  nombre:string = "";
  apellido:string = "";
  edad:number = 0;
  pais:string = "";

  @Input() paisClickeado:any;

  constructor(public srvActores:SrvActoresService) {}
  ngOnInit(): void {}

  flagNGLoading = true;

  paisClickeadoEvent(a:any)
  {
    this.pais = a["name"]["common"];
  }

  crearActor()
  {
    
    let opcionesSexo:any = document.querySelectorAll('input[name="sexo"]');
    let sexo = "";        
    
    if (opcionesSexo[0]["checked"] == true)
    {
      console.log("check 0");
      sexo = "Masculino";
    }
    else if (opcionesSexo[1]["checked"] == true)
    {
      console.log("check 1");
      sexo = "Femenino";
    }

    let actorCreado = new Actor(this.nombre,this.apellido,this.edad,sexo,this.pais);
    this.srvActores.dbActores.push(actorCreado);
    console.log(this.srvActores.dbActores);
  }

}
