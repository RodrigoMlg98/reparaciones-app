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

  calentador: boolean = false;
  

  

  constructor(private actRoute: ActivatedRoute,) {
    this.servicio = this.actRoute.snapshot.params['id'];



    
  }



  ngOnInit() {
    if (this.servicio == 'calentador') {

      this.calentador = true;
    
    }
  }

}
