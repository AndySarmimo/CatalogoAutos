import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Input() infoTipos: Array<[string,number]> | [];

  constructor() { 
    this.infoTipos = [["Puertas",1],["Cilindrada",2],["Precio",3]];
  }

  ngOnInit(): void {
    this.filtroUsar();
  }


  filtroUsar(){

    this.infoTipos.forEach(elem => {
      console.log(elem)
      switch (elem[1]) {
        case 1:
          (<HTMLInputElement>document.getElementById("radioButton")).style.display = "inline";
          (<HTMLInputElement>document.getElementById("labelradioButton")).style.display = "inline";
          (<HTMLInputElement>document.getElementById("labelradioButton")).innerHTML = elem[0];         
          (<HTMLInputElement>document.getElementById("labelRangoInput")).style.display = "none";
          (<HTMLInputElement>document.getElementById("input1labelRangoInput")).style.display = "none";
          (<HTMLInputElement>document.getElementById("input2labelRangoInput")).style.display = "none";
          (<HTMLInputElement>document.getElementById("labelInput")).style.display = "none";
          (<HTMLInputElement>document.getElementById("inputIput")).style.display = "none";
          break;
        case 2:
          (<HTMLInputElement>document.getElementById("radioButton")).style.display = "none";
          (<HTMLInputElement>document.getElementById("labelradioButton")).style.display="none";
          (<HTMLInputElement>document.getElementById("labelRangoInput")).innerHTML = elem[0];  
          (<HTMLInputElement>document.getElementById("labelRangoInput")).style.display = "inline";
          (<HTMLInputElement>document.getElementById("input1labelRangoInput")).style.display = "inline";
          (<HTMLInputElement>document.getElementById("input2labelRangoInput")).style.display = "inline";
          (<HTMLInputElement>document.getElementById("labelInput")).style.display = "none";
          (<HTMLInputElement>document.getElementById("inputIput")).style.display = "none";
          break;
        case 3:
          (<HTMLInputElement>document.getElementById("radioButton")).style.display = "none";
          (<HTMLInputElement>document.getElementById("labelradioButton")).style.display="none";
          (<HTMLInputElement>document.getElementById("labelRangoInput")).style.display = "none";
          (<HTMLInputElement>document.getElementById("input1labelRangoInput")).style.display = "none";
          (<HTMLInputElement>document.getElementById("input2labelRangoInput")).style.display = "none";
          (<HTMLInputElement>document.getElementById("labelInput")).style.display = "inline";
          (<HTMLInputElement>document.getElementById("inputIput")).style.display = "inline";
          (<HTMLInputElement>document.getElementById("labelInput")).innerHTML = elem[0];  
          break;
      }
    });

    


  }


}
