
import { HeaderComponet } from './/header/header.componet';
import { footerComponet } from './footer/footer.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';






@NgModule({
  declarations: [AppComponent,
    HeaderComponet,
    footerComponet,],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }

