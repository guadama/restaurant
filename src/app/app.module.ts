import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuestoComponent } from './components/puesto/puesto.component';
import { ScreenSaverComponent } from './components/screen-saver/screen-saver.component';

@NgModule({
  declarations: [
    AppComponent,
    PuestoComponent,
    ScreenSaverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
