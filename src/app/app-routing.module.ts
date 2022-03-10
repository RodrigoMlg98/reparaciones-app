import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosComponentComponent } from './servicios-component/servicios-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ServicioComponentComponent } from './servicio-component/servicio-component.component';
import { AppComponent } from './app.component';
import { CalderasComponent } from './calderas/calderas.component';
import { HidroneumaticoComponent } from './hidroneumatico/hidroneumatico.component';
import { JacuzziComponent } from './jacuzzi/jacuzzi.component';
import { VaporComponent } from './vapor/vapor.component';
import { BombaguaComponent } from './bombagua/bombagua.component';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponentComponent},
  {path: 'servicios', component:ServiciosComponentComponent},
  {path: 'servicio/:id', component:ServicioComponentComponent}, 
  {path: 'servicios/calderas', component:CalderasComponent},
  {path: 'servicios/hidroneumatico', component:HidroneumaticoComponent},
  {path: 'servicios/jacuzzi', component:JacuzziComponent},
  {path: 'servicios/vapor', component:VaporComponent},
  {path: 'servicios/bombagua', component:BombaguaComponent},










];
@NgModule({

declarations: [
    ServiciosComponentComponent,
    HomeComponentComponent,
    ServicioComponentComponent,
    CalderasComponent,
    HidroneumaticoComponent,
    JacuzziComponent,
    VaporComponent,
    BombaguaComponent
    
                ],
/*   imports: [BrowserModule, AppRoutingModule,RouterModule.forRoot(routes)], */
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {}