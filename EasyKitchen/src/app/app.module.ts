import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistroComponent } from './Component/registro/registro.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { MexicanaComponent } from './Component/mexicana/mexicana.component';
import { JaponesaComponent } from './Component/japonesa/japonesa.component';
import { ErrorComponent } from './Component/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    NavbarComponent,
    MexicanaComponent,
    JaponesaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
