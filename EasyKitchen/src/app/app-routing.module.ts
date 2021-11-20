import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './Component/error/error.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { JaponesaComponent } from './Component/japonesa/japonesa.component';
import { LoginComponent } from './Component/login/login.component';
import { MexicanaComponent } from './Component/mexicana/mexicana.component';
import { ChilesComponent } from './Component/mexicanas/chiles/chiles.component';
import { NavVerticalComponent } from './Component/nav-vertical/nav-vertical.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { RegistroComponent } from './Component/registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'inicio', component:InicioComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'nav', component:NavVerticalComponent},
  {path:'mexicana', component:MexicanaComponent},
  {path:'japonesa', component:JaponesaComponent},
  {path:'chiles', component:ChilesComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
