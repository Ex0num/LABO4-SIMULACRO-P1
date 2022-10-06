import { Injectable } from '@angular/core';
import { Actor } from '../Entidades/actor';
import { Pelicula } from '../Entidades/pelicula';

@Injectable({
  providedIn: 'root'
})
export class SrvPeliculasService 
{

  databasePeliculas:Pelicula[];

  constructor() {

    this.databasePeliculas = 
    [
      new Pelicula(0, "Cars", "El primer lanzamiento de Cars, El primer lanzamiento de Cars, El primer lanzamiento de Cars","Otros", new Date(2018,11,26).toLocaleDateString(), 5500000, "../../../assets/assets-peliculas/cars1.jpg"),
      new Pelicula(1, "Cars 2", "El primer lanzamiento de Cars,El primer lanzamiento de Cars El primer lanzamiento de Cars", "Otros", new Date(2011,7,6).toLocaleDateString(), 45000000, "../../../assets/assets-peliculas/cars2.jpg"), 
      new Pelicula(2, "Michael Myers", "El primer lanzamiento de Cars,El primer lanzamiento de Cars,El primer lanzamiento de Cars", "Terror", new Date(1978,10,31).toLocaleDateString(), 5000000, "../../../assets/assets-peliculas/michael-myers.jpg"), 
      new Pelicula(3, "3 Metros sobre el cielo", "El primer lanzamiento de Cars, El primer lanzamiento de Cars, El primer lanzamiento de Cars", "Amor", new Date(2020,2,7).toDateString(), 9000000, "../../../assets/assets-peliculas/3-metros-sobre-el-cielo.jpg"), 
      new Pelicula(4, "Navidades bien o en familia", "El primer lanzamiento de Cars,El primer lanzamiento de CarsEl primer lanzamiento de Cars", "Comedia", new Date(2018,11,26).toLocaleDateString(), 2000000, "../../../assets/assets-peliculas/navidades-bien-o-en-familia.jpg"), 
    ];

    this.databasePeliculas[0].actorProtagonista = new Actor("Tom","Hanks",45,"Masculino","Estados Unidos");
    this.databasePeliculas[1].actorProtagonista = new Actor("Robert","Downey Jr",67,"Masculino","Estados Unidos");
    this.databasePeliculas[2].actorProtagonista =  new Actor("Elle","Fanning",25,"Femenino","Russia");
    this.databasePeliculas[3].actorProtagonista =  new Actor("Jennifer","Lawrence",55,"Femenino","Argentina");
    this.databasePeliculas[4].actorProtagonista =  new Actor("Saorirse","Ronan",25,"Femenino","Australia");
  }



  // leerDB()
  // {
  //   return this.databasePeliculas;
  // }
}
