import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CatalogoUsuarioComponent } from './modulos/catalogo/catalogo-usuario/catalogo-usuario.component';
import { CatalogoAdmiComponent } from './modulos/catalogo/catalogo-admi/catalogo-admi.component';
import { TablaReusableComponent } from './modulos/tabla-reusable/tabla-reusable.component';
import { ModalComponent } from './modulos/modal/modal.component';
import { FiltrosComponent } from './modulos/catalogo/filtros/filtros.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CatalogoUsuarioComponent,
    CatalogoAdmiComponent,
    TablaReusableComponent,
    ModalComponent,
    FiltrosComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
