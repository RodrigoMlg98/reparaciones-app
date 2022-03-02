import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponet } from './/header/header.componet';
import { footerComponet } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiciosComponentComponent } from './servicios-component/servicios-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path: 'servicios', component:ServiciosComponentComponent},
/*   {path: 'servicios', component:HomeComponentComponent} */
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    footerComponet,
    ServiciosComponentComponent,
    HomeComponentComponent,
  
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
