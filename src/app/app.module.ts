import { AppComponent } from './app.component';
import { HeaderComponet } from './/header/header.componet';
import { footerComponet } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    footerComponet
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }

