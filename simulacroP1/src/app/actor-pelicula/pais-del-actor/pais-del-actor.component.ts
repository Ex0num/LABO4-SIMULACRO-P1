import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Actor } from 'src/app/Entidades/actor';
import { SrvPaisesService } from 'src/app/Servicios/srv-paises.service';

@Component({
  selector: 'app-pais-del-actor',
  templateUrl: './pais-del-actor.component.html',
  styleUrls: ['./pais-del-actor.component.css']
})
export class PaisDelActorComponent implements OnInit {

  constructor(public srvPaises:SrvPaisesService) { }

  @Input() actorSeleccionado:any;
  dataPais:any;

  ngOnInit(): void {}

  flagNGLoading = true;

  nombreComunPaisActor:string = "";
  regionPaisActor:string = "";
  poblacionPaisActor:number | undefined;
  banderaPaisActor:string = "";

  ngOnChanges(changes: SimpleChanges): void
  {
    if (this.flagNGLoading == true)
    {
      this.flagNGLoading = false;
    }
    else
    {
      console.log("ACTOR CLICKEADO CAMBIO EN PAIS DEL ACTOR!!!!");
      this.cargarDetallesPaisDelActorSeleccionado(this.actorSeleccionado);
    }
  }

  cargarDetallesPaisDelActorSeleccionado(actorSeleccionado:Actor)
  {
    this.buscarDataPaisDelActor(actorSeleccionado.paisNatal); 
  }

  private buscarDataPaisDelActor(nombreComunPais:string)
  {
    let pais = this.srvPaises.obtenerPais(nombreComunPais).subscribe(val => 
    {
      this.dataPais = val;
      this.nombreComunPaisActor = this.dataPais[0]["name"]["common"];
      this.regionPaisActor = this.dataPais[0]["region"];
      this.poblacionPaisActor = this.dataPais[0]["population"];
      this.banderaPaisActor = this.dataPais[0]["flag"];
      pais.unsubscribe();
    });

    return pais;
  }
}
