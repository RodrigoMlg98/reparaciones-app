import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosComponentComponent } from './servicios-component/servicios-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ServicioComponentComponent } from './servicio-component/servicio-component.component';
import { AppComponent } from './app.component';
import { CalderasComponent } from './calderas/calderas.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponentComponent},
  {path: 'servicios', component:ServiciosComponentComponent},
  {path: 'servicio/:id', component:ServicioComponentComponent}, 
  {path: 'servicios/calderas', component:CalderasComponent}

];
@NgModule({

declarations: [
    ServiciosComponentComponent,
    HomeComponentComponent,
    ServicioComponentComponent,
    CalderasComponent
                ],
/*   imports: [BrowserModule, AppRoutingModule,RouterModule.forRoot(routes)], */
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {}