import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  tituloPelicula:any = "3 Metros sobre el cielo";
  descripcionPelicula:any = "Es una pelicula muy larga, y entretenida";
  tipoPeliculaDetalle:any = "Amor";
  fechaEstreno:any = "09/12/2018";
  cantidadPublico:any = 900000;

  constructor() {}
  ngOnInit(): void {}

  flagNGLoading = true;

  @Input() peliClickeada:any;

  @Output() public peliculaAfectada = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void
  {
      if (this.flagNGLoading == true)
      {
        this.flagNGLoading = false;
      }
      else
      {
        // console.log("PELI CLICKEADA CAMBIO EN DETALLE!!!!");
        this.cargarPeliculaSeleccionada(this.peliClickeada);
      }
  }

  limpiarPelicula()
  {
    let dataMostrable = document.getElementById("col1-detalle");
    dataMostrable?.setAttribute("hidden","true");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-detalle");
    txtMensajeTemporal?.removeAttribute("hidden");

    this.refrescarTodo();
  }

  cargarPeliculaSeleccionada(peliculaRecibida:Pelicula) 
  {
    // console.log("CARGANDO DETALLES DE PELICULA");

    let dataMostrable = document.getElementById("col1-detalle");
    dataMostrable?.removeAttribute("hidden");

    //-- DATA ----------------------------------------------------------
    this.tituloPelicula = peliculaRecibida.nombre;
    this.descripcionPelicula = peliculaRecibida.descripcion;
    this.tipoPeliculaDetalle = peliculaRecibida.tipo;
    this.fechaEstreno = peliculaRecibida.fechaEstreno;
    this.cantidadPublico = peliculaRecibida.cantidadPublico;

    let imgPelicula = document.getElementById("card-img-detalle");
    imgPelicula?.setAttribute("src",peliculaRecibida.fotoPelicula);
    // -----------------------------------------------------------------

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-detalle");
    txtMensajeTemporal?.setAttribute("hidden","true");
  }

  descargarPeliculaSeleccionada()
  {
    let btnLimpiar = document.getElementById("col1-detalle");
    btnLimpiar?.setAttribute("hidden","true");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-detalle");
    txtMensajeTemporal?.removeAttribute("hidden");
  }

  refrescarTodo()
  {
    this.descargarPeliculaSeleccionada();
    this.peliculaAfectada.emit();
  }
}
