import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponet } from './/header/header.componet';
import { footerComponet } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServiciosComponentComponent } from './servicios-component/servicios-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicioComponentComponent } from './servicio-component/servicio-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path: 'servicios', component:ServiciosComponentComponent},
{path: 'servicio/:id', component:ServicioComponentComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    footerComponet,
    ServiciosComponentComponent,
    HomeComponentComponent,
    ServicioComponentComponent,
  
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
