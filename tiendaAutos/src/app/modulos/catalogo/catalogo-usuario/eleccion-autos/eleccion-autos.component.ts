import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-eleccion-autos',
  templateUrl: './eleccion-autos.component.html',
  styleUrls: ['./eleccion-autos.component.css']
})
export class EleccionAutosComponent implements OnInit {

  @Input() auto: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.auto);
  }

}
