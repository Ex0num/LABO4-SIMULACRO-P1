import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SrvPaisesService } from 'src/app/Servicios/srv-paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit 
{
  constructor(public srvPaises:SrvPaisesService) {}

  arrayPaises:any[] = new Array();

  @Output() public paisClickeado = new EventEmitter<any>();

  ngOnInit(): void 
  {
    this.arrayPaises = this.srvPaises.apiPaises;
    console.log(this.arrayPaises);

    // console.log(this.arrayPaises[0]["flag"]);
    // console.log(this.arrayPaises[0]["name"]["common"]);

    this.arrayPaises.forEach(element => {
      console.log(""); 
      console.log(element["flag"]);
      console.log(element["name"]["common"]);
      console.log(element);
      console.log("");  
    });
  }

  paisClickeadoEvent(pais:any)
  {
    this.paisClickeado.emit(pais);
  }

}
