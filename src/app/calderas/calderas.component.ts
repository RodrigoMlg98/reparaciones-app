import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calderas',
  templateUrl: './calderas.component.html',
  styleUrls: ['./calderas.component.css']
})
export class CalderasComponent implements OnInit {
  title = 'reparaciones-app';


  constructor() { }
  clickEvent(){
    var on = parseInt((<HTMLInputElement>document.getElementById("on")).value);
    var olor = parseInt((<HTMLInputElement>document.getElementById("olor")).value);
    var descripcion = ((<HTMLInputElement>document.getElementById("descripcion")).value); 

    var calienta = "no%20calienta,%20";
    var ruidos = "no%20presenta%20ruidos.%20";


    console.log(on);
    console.log(olor);
    console.log(descripcion);

    if(on == 1){
      calienta = "si%20calienta,%20";
    }
    if (olor == 1){
      ruidos = "si%20presenta%20ruidos.%20";
    }
    if(descripcion != "" || descripcion != null){
      var re = /%20/gi; 
      descripcion = descripcion.replace(re, " "); 
      descripcion = descripcion+".%20Sin%20mas%20por%20el%20momento%20espero%20su%20pronta%20respuesta."
    }


    window.open("https://wa.me/525545508452?text=Me%20gustaría%20contratar%20un%20servicio%20de%20reparación,%20mi%20caldera%20"+calienta+""+ruidos+""+descripcion,'_blank');
  }

  ngOnInit(): void {
  }

}
