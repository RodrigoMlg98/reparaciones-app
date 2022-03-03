import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-servicio-component',
  templateUrl: './servicio-component.component.html',
  styleUrls: ['./servicio-component.component.css']
})
export class ServicioComponentComponent implements OnInit {
  title = 'Servicio';

/*   constructor(
    private route: ActivatedRoute,
  ) {} */

  servicio: string;
  constructor(private actRoute: ActivatedRoute) {
    this.servicio = this.actRoute.snapshot.params['id'];
  }

  ngOnInit() {

  }

}
