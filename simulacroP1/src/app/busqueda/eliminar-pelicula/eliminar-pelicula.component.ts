import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { SrvPeliculasService } from 'src/app/Servicios/srv-peliculas.service';

@Component({
  selector: 'app-eliminar-pelicula',
  templateUrl: './eliminar-pelicula.component.html',
  styleUrls: ['./eliminar-pelicula.component.css']
})
export class EliminarPeliculaComponent implements OnInit {

  constructor(public srvPeliculas:SrvPeliculasService) {}
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
      // console.log("PELI CLICKEADA CAMBIO EN ELIMINACION!!!!");
      this.cargarPeliculaSeleccionada(this.peliClickeada);
    }
  }

  cargarPeliculaSeleccionada(peliculaRecibida:Pelicula) 
  {
    // console.log("CARGANDO BORRADO DE PELICULA");

    let btnEliminar = document.getElementById("col1-eliminar");
    btnEliminar?.removeAttribute("hidden");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-eliminar");
    txtMensajeTemporal?.setAttribute("hidden","true");
  }

  descargarPeliculaSeleccionada()
  {
    let btnEliminar = document.getElementById("col1-eliminar");
    btnEliminar?.setAttribute("hidden","true");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-eliminar");
    txtMensajeTemporal?.removeAttribute("hidden");
  }

  eliminarPelicula() 
  {
    //ELIMINACION
    // let peliculasRef = this.srvPeliculas.databasePeliculas;
    console.log(this.srvPeliculas.databasePeliculas);

    // let arrayFiltrado = new Array();
    this.srvPeliculas.databasePeliculas = this.srvPeliculas.databasePeliculas.filter( (value) => 
    { 
      if (value.id == this.peliClickeada.id)
      { 
        return false;
      }
      else
      {
        return true;
      }
    });

    console.log("ELIMINADA");
    // console.log(arrayFiltrado);

    console.log(this.srvPeliculas.databasePeliculas);
    this.refrescarTodo();
  }

  refrescarTodo()
  {
    this.descargarPeliculaSeleccionada();
    this.peliculaAfectada.emit();
  }

}
