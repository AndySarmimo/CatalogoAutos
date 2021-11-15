import { Component, OnInit } from '@angular/core';
import * as miAuto from "../../../JSON/Autos.json";// This import style requires "esModuleInterop", see "side notes"

@Component({
  selector: 'app-catalogo-usuario',
  templateUrl: './catalogo-usuario.component.html',
  styleUrls: ['./catalogo-usuario.component.css']
})
export class CatalogoUsuarioComponent implements OnInit {

  constructor() { }
  auto: any;


  ngOnInit(): void {
    var listaAutos = miAuto; 
    this.auto = listaAutos[0];
    console.log(this.auto);
  }

}
