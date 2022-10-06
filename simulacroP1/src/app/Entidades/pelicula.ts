import { Actor } from "./actor";

export class Pelicula 
{
    id:number = 0;
    public nombre:string = "aux";
    descripcion:string = "aux";
    tipo:string = "aux";
    fechaEstreno:string = "0/0/0";
    cantidadPublico:number = 0;
    fotoPelicula:string = "";
    actorProtagonista:Actor |  undefined;

    constructor(idRecibido:number, nombreRecibido:string, descripcionRecibida:string, tipoRecibido:string, fechaEstrenoRecibido:string, cantidadPublicoRecibido:number, pathfotoPeliculaRecibido:string) 
    {
        this.id = idRecibido;
        this.nombre = nombreRecibido;
        this.descripcion = descripcionRecibida;
        this.tipo = tipoRecibido;
        this.fechaEstreno = fechaEstrenoRecibido;
        this.cantidadPublico = cantidadPublicoRecibido;
        this.fotoPelicula = pathfotoPeliculaRecibido;
    }
}