import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { EliminarPeliculaComponent } from './busqueda/eliminar-pelicula/eliminar-pelicula.component';
import { ModificarPeliculaComponent } from './busqueda/modificar-pelicula/modificar-pelicula.component';
import { DetallePeliculaComponent } from './busqueda/detalle-pelicula/detalle-pelicula.component';
import { TablaPeliculaComponent } from './busqueda/tabla-pelicula/tabla-pelicula.component';
import { TablaPaisesComponent } from './actor-alta/tabla-paises/tabla-paises.component';
import { TablaActoresComponent } from './pelicula-alta/tabla-actores/tabla-actores.component';
import { FormsModule } from '@angular/forms';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { PeliculasDelActorComponent } from './actor-pelicula/peliculas-del-actor/peliculas-del-actor.component';
import { PaisDelActorComponent } from './actor-pelicula/pais-del-actor/pais-del-actor.component';
import { DetallesDelActorComponent } from './actor-pelicula/detalles-del-actor/detalles-del-actor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    EliminarPeliculaComponent,
    ModificarPeliculaComponent,
    DetallePeliculaComponent,
    TablaPeliculaComponent,
    TablaPaisesComponent,
    TablaActoresComponent,
    ActorPeliculaComponent,
    PeliculasDelActorComponent,
    PaisDelActorComponent,
    DetallesDelActorComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
