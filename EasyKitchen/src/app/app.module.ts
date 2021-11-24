import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistroComponent } from './Component/registro/registro.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { MexicanaComponent } from './Component/mexicana/mexicana.component';
import { JaponesaComponent } from './Component/japonesa/japonesa.component';
import { ErrorComponent } from './Component/error/error.component';
import { ChilesComponent } from './Component/mexicanas/chiles/chiles.component';
import { PerfilComponent } from './Component/perfil/perfil.component';
import { CardRecetaComponent } from './Component/card-receta/card-receta.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    MexicanaComponent,
    JaponesaComponent,
    ErrorComponent,
    ChilesComponent,
    PerfilComponent,
    CardRecetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
