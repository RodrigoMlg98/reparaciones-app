import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  title = 'reparaciones-app';
  constructor() {}

  ngOnInit(): void {}

  /* VARIABLES */
/* INICIO */
  animate_title = false;
  animate_parrafoL = false;
  animate_parrafoR = false;
  fade = true;


  @HostListener("document:scroll")
/*   SCROLL DE INICIO */

  scrollfunction(){
      if(document.body.scrollTop > 500|| document.documentElement.scrollTop > 500){
          this.animate_title=true;
/*           animate_parrafoL = true;
          animate_parrafoR = true; */
          this.fade = false;
      }
      else{
          this.animate_title=false; 
          this.fade = true;
      }
  }

  /* SCROLL DE NOSOTROS */
  
}
