import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponet } from './/header/header.componet';
import { footerComponet } from './footer/footer.component';
import '~ngx-owl-carousel-o/lib/styles/scss/owl.carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    footerComponet
  ],
  imports: [
    BrowserModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
