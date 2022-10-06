import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { SrvPeliculasService } from 'src/app/Servicios/srv-peliculas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {
  
  descripcion:string = "";
  titulo:string = "";
  fechaEstreno:string = "";
  cantidadPublico:number = 0;

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
      // console.log("PELI CLICKEADA CAMBIO EN MODIFICACION!!!!");
      this.cargarPeliculaSeleccionada(this.peliClickeada);
    }
  }

  cargarPeliculaSeleccionada(peliculaRecibida:Pelicula) 
  {
    let dataModificable = document.getElementById("col1-modificar");
    dataModificable?.removeAttribute("hidden");

    // let tituloPelicula = document.getElementById("titulo");
    // tituloPelicula?.setAttribute("value",peliculaRecibida.nombre);

    this.titulo = peliculaRecibida.nombre;
    this.descripcion = peliculaRecibida.descripcion;
    this.fechaEstreno = peliculaRecibida.fechaEstreno;
    this.cantidadPublico = peliculaRecibida.cantidadPublico;

    let imgPelicula = document.getElementById("card-img-modificar");
    imgPelicula?.setAttribute("src",peliculaRecibida.fotoPelicula);

    // let opcionesTipo = document.querySelectorAll(".tipo-opcion");

    let opcionesTipo:any = document.querySelectorAll('input[name="tipoPelicula"]');
              
    if (peliculaRecibida.tipo == "Amor")
    {
      console.log("checked 0");
      opcionesTipo[0]["checked"] = true;
      opcionesTipo[1]["checked"] = false;
      opcionesTipo[2]["checked"] = false;
      opcionesTipo[3]["checked"] = false;
    }
    else if (peliculaRecibida.tipo == "Comedia")
    {
      console.log("checked 0");
      opcionesTipo[0]["checked"] = false;
      opcionesTipo[1]["checked"] = true;
      opcionesTipo[2]["checked"] = false;
      opcionesTipo[3]["checked"] = false;
    }
    else if (peliculaRecibida.tipo == "Terror")
    {
      console.log("checked 0");
      opcionesTipo[0]["checked"] = false;
      opcionesTipo[1]["checked"] = false;
      opcionesTipo[2]["checked"] = true;
      opcionesTipo[3]["checked"] = false;
    }
    else if (peliculaRecibida.tipo == "Otros")
    {
      console.log("checked 0");
      opcionesTipo[0]["checked"] = false;
      opcionesTipo[1]["checked"] = false;
      opcionesTipo[2]["checked"] = false;
      opcionesTipo[3]["checked"] = true;
    }

    let fechaEstrenoPelicula = document.getElementById("fechaEstreno");
    fechaEstrenoPelicula?.setAttribute("value",peliculaRecibida.fechaEstreno);

    let cantidadPublicoPelicula = document.getElementById("cantidadPublico");
    cantidadPublicoPelicula?.setAttribute("value",peliculaRecibida.cantidadPublico.toString());

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-modificar");
    txtMensajeTemporal?.setAttribute("hidden","true");
  }

  descargarPeliculaSeleccionada()
  {
    let btnModificar = document.getElementById("col1-modificar");
    btnModificar?.setAttribute("hidden","true");

    let txtMensajeTemporal = document.getElementById("lbl-mensaje-temporal-modificar");
    txtMensajeTemporal?.removeAttribute("hidden");
  }

  modificarPelicula()
  {
    //MODIFICACION
    console.log("");
    console.log("");
    console.log(this.descripcion);

    this.srvPeliculas.databasePeliculas.forEach(element => 
    {
        if (element.id == this.peliClickeada.id)
        {
            console.log("PISANDO DATA");
            element.nombre = this.titulo;
            element.descripcion = this.descripcion;
          
            let selectedType;

            let opcionesTipo:any = document.querySelectorAll('input[name="tipoPelicula"]');
              
            if (opcionesTipo[0]["checked"] == true)
            {
              console.log("check 0");
              selectedType = "Amor";
            }
            else if (opcionesTipo[1]["checked"] == true)
            {
              console.log("check 1");
              selectedType = "Comedia";
            }
            else if (opcionesTipo[2]["checked"] == true)
            {
              console.log("check 2");
              selectedType = "Terror";
            }
            else if (opcionesTipo[3]["checked"] == true)
            {
              console.log("check 3");
              selectedType = "Otros";
            }

            switch (selectedType) 
            {
              case "Amor":
              {
                element.tipo = "Amor";
                break;
              }
              case "Comedia":
              {
                element.tipo = "Comedia";
                break;
              }
              case "Terror":
              {
                element.tipo = "Terror";
                break;
              }
              case "Otros":
              {
                element.tipo = "Otros";
                break;
              }
            }

            element.fechaEstreno = this.fechaEstreno;
            element.cantidadPublico = this.cantidadPublico;
        }
    });

    this.refrescarTodo();
  }

  refrescarTodo()
  {
    this.descargarPeliculaSeleccionada();
    this.peliculaAfectada.emit();
  }

}
