import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../Entidades/pelicula';
import { SrvPeliculasService } from '../Servicios/srv-peliculas.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  constructor(public srvPeliculas:SrvPeliculasService) { }

  titulo:string = "";
  descripcion:string = "";
  fechaEstreno:string = "";
  cantidadPublico:number = 0;
  actorProtagonista:string = "";
  tipo:string = "";

  @Input() actorClickeado:any;

  ngOnInit(): void {}

  actorClickeadoEvent(a:any)
  {
    this.actorProtagonista = a.nombre + " " + a.apellido;
  }

  crearPelicula()
  {

    let opcionesTipoPeli:any = document.querySelectorAll('input[name="tipo"]');        

    if (opcionesTipoPeli[0]["checked"] == true)
    {
      console.log("check 1");
      this.tipo = "Amor";
    }
    else if (opcionesTipoPeli[1]["checked"] == true)
    {
      console.log("check 2");
      this.tipo = "Terror";
    }
    else if (opcionesTipoPeli[2]["checked"] == true)
    {
      console.log("check 3");
      this.tipo = "Comedia";
    }
    else if (opcionesTipoPeli[3]["checked"] == true)
    {
      console.log("check 4");
      this.tipo = "Otros";
    }

    let nuevaPeli = new Pelicula(10,this.titulo,this.descripcion,this.tipo,this.fechaEstreno,this.cantidadPublico,"a");
    this.srvPeliculas.databasePeliculas.push(nuevaPeli);
    console.log(this.srvPeliculas.databasePeliculas);
    this.refrescarControles();
  }

  refrescarControles()
  {
    this.titulo = "";
    this.descripcion = "";
    this.cantidadPublico = 0;
    this.actorProtagonista = "";
    this.fechaEstreno = "";
    this.tipo = "";
  
    //Falta resetear el archivo seleccionado. 
  }

}
