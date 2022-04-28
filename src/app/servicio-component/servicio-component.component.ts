import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-servicio-component',
  templateUrl: './servicio-component.component.html',
  styleUrls: ['./servicio-component.component.css']
})
export class ServicioComponentComponent {
  title = 'Servicio';

/*   constructor(
    private route: ActivatedRoute,
  ) {} */



  servicio: string;
  

  

  

  constructor(private actRoute: ActivatedRoute,) {
    this.servicio = this.actRoute.snapshot.params['id'];
  }

  clickEvent(){
    var on = parseInt((<HTMLInputElement>document.getElementById("on")).value);
    var olor = parseInt((<HTMLInputElement>document.getElementById("olor")).value);
    var descripcion = ((<HTMLInputElement>document.getElementById("descripcion")).value); 

    var enciende = "no%20enciende,%20";
    var fuga = "no%20presenta%20fugas.%20";


    console.log(on);
    console.log(olor);
    console.log(descripcion);

    if(on == 1){
      enciende = "si%20enciende,%20";
    }
    if (olor == 1){
      fuga = "si%20presenta%20fugas.%20";
    }
    if(descripcion != "" || descripcion != null){
      var re = /%20/gi; 
      descripcion = descripcion.replace(re, " "); 
      descripcion = descripcion+".%20Sin%20mas%20por%20el%20momento%20espero%20su%20pronta%20respuesta."
    }


    window.open("https://wa.me/525545508452?text=Me%20gustaría%20contratar%20un%20servicio%20de%20reparación,%20mi%20calentador%20"+enciende+""+fuga+""+descripcion,'_blank');
  }



  ngOnInit() {
    if (this.servicio == 'calentador') {
    
    }
  }

}
