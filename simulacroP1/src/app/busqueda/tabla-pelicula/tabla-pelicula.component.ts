import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { SrvPeliculasService } from 'src/app/Servicios/srv-peliculas.service';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { EliminarPeliculaComponent } from '../eliminar-pelicula/eliminar-pelicula.component';
import { ModificarPeliculaComponent } from '../modificar-pelicula/modificar-pelicula.component';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit 
{

  @Input() peliAfectada = false;
  @Output() public peliculaSeleccionada = new EventEmitter<any>();

  peliculasColumn1 = new Array();
  peliculasColumn2 = new Array();
  // dbPeliculas:Pelicula[];

  constructor(public srvPeliculas:SrvPeliculasService) 
  {
    // this.dbPeliculas = srvPeliculas.leerDB();
    this.cargarPeliculasATabla();
  }

  ngOnInit(): void {}

  cargarPeliculasATabla()
  {
    this.limpiarColumnas();

    console.log("LEYENDO PELICULAS DB");
    // console.log(this.dbPeliculas);

    this.srvPeliculas.databasePeliculas.forEach(peliculaActual => 
    {
        if (this.peliculasColumn1.length > this.peliculasColumn2.length)
        {
          this.peliculasColumn2.push(peliculaActual);
        }
        else if (this.peliculasColumn1.length < this.peliculasColumn2.length)
        {
          this.peliculasColumn1.push(peliculaActual);
        }
        else if (this.peliculasColumn1.length == this.peliculasColumn2.length)
        {
          this.peliculasColumn1.push(peliculaActual);
        }
    });

    console.log(this.peliculasColumn1);
    console.log(this.peliculasColumn2);
  }

  peliculaClickeada(peliculaRecibida:Pelicula)
  {
    console.log("UNA PELICULA EN LA TABLA FUE CLICKEADA");
    console.log(peliculaRecibida);
    
    // this.srvPeliculas.databasePeliculas.push(new Pelicula(10,"A","aux","aux","0/0/0",0,"../../../assets/assets-peliculas/cars1.jpg"));
    // this.cargarPeliculasATabla();
    // this.peliculaSeleccionada = peliculaRecibida;

    // DetallePeliculaComponent.prototype.cargarPeliculaSeleccionada(peliculaRecibida);
    // ModificarPeliculaComponent.prototype.cargarPeliculaSeleccionada(peliculaRecibida);
    // EliminarPeliculaComponent.prototype.cargarPeliculaSeleccionada(peliculaRecibida);

    this.peliculaSeleccionada.emit(peliculaRecibida);
  }

  limpiarColumnas()
  {
    do
    {
      this.peliculasColumn1.pop();

    }while(this.peliculasColumn1.length >= 1)

    do
    {
      this.peliculasColumn2.pop();

    }while(this.peliculasColumn2.length >= 1)
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    console.log("");
    console.log("");
    console.log("REFRESCANDO TABLA Y LIMPIANDO LOS 3 COMPONENTES AFECTORES");
    this.cargarPeliculasATabla();

    ModificarPeliculaComponent.prototype.descargarPeliculaSeleccionada();
    EliminarPeliculaComponent.prototype.descargarPeliculaSeleccionada();
    DetallePeliculaComponent.prototype.descargarPeliculaSeleccionada();
    this.setTrue();
  }

  setTrue()
  {
      this.peliAfectada = true;
  }

}
