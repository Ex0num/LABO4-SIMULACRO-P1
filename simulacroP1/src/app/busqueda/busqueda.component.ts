import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  peliSeleccionada:any;
  peliAfectada = false;
  

  onPeliSeleccionada(event:any)
  {
    // console.log("ME LLEGO EL EVENTO!!");
    // console.log(event);
    this.peliSeleccionada = event;
  }

  peliculaAfectada(event:any)
  {
    // console.log("ACCIONAR ME LLEGÓ!!!!");
    // console.log(this.peliAfectada);
    // console.log(event);
    
    if (this.peliAfectada == true)
    {
      this.peliAfectada = false;
    }
    else
    {
      this.peliAfectada = true;
    }
  }
    
}
