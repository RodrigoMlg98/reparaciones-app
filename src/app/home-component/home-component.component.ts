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
  fadepl = true;
  fadepr = true;
  /* NOSOTROS */
  animate_nosotros = false;
  animate_nosotropl = false;
  animate_nosotropr =false;
  faden = true;
  fadenpl = true;
  fadenpr = true;

  


  @HostListener("document:scroll")
/*   SCROLL DE INICIO */

  scrollfunction(){
      if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
          this.animate_title=true;
          this.animate_parrafoL = true;
          this.animate_parrafoR = true;
          this.fade = false;
          this.fadepl = false;
          this.fadepr = false;
      }
      
      else{
          this.animate_title=false; 
          this.fade = true;
          this.fadepl = true;
          this.fadepr = true;
      }
    
/*     MARCAS */
if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
  this.animate_title=true;
}
else{
  this.animate_title=false; 
  this.fade = true;
}

  /* SCROLL DE NOSOTROS */

    if(document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700){
        this.animate_nosotros=true;
        this.animate_nosotropl =true;
        this.animate_nosotropr =true;
        this.faden = false;
        this.fadepl = false;
        this.fadepr = false;
    }
    
    else{
        this.animate_nosotros=false; 
        this.animate_nosotropl =false;
        this.faden = true;
        this.fadenpl = true;
        this.fadenpr = true;
    }
  }
}

