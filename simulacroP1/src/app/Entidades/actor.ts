export class Actor 
{
    nombre:string = "aux";
    apellido:string = "aux";
    edad:number = 0;
    sexo:string = "aux";
    paisNatal:string = "aux";

    constructor(nombreRecibido:string, apellidoRecibido:string, edadRecibida:number, sexoRecibido:string, paisRecibido:string)
    {
        this.nombre = nombreRecibido;
        this.apellido = apellidoRecibido;
        this.edad = edadRecibida;
        this.sexo = sexoRecibido;
        this.paisNatal = paisRecibido;
    }
}
