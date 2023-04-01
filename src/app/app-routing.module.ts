import { ApplicationModule, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AccesoriosComponent } from './productos/accesorios/accesorios.component';
import { AsesoriaprofesionalComponent } from './productos/asesoriaprofesional/asesoriaprofesional.component';
import { SuplementosComponent } from './productos/suplementos/suplementos.component';
import { RopadeportivaComponent } from './productos/ropadeportiva/ropadeportiva.component';
import { CalculadoraimcComponent } from './productos/calculadoraimc/calculadoraimc.component';
import { InformacionalimentosComponent } from './productos/informacionalimentos/informacionalimentos.component';
import { OrientacionComponent } from './productos/orientacion/orientacion.component';
import { QuienComponent } from './quien/quien.component';
import { ContactoComponent } from './productos/contacto/contacto.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  {
    path: 'main',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/home']))
  },
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'orientacion', component: OrientacionComponent },
  { path: 'asesoria', component: AsesoriaprofesionalComponent },
  { path: 'suplementos', component: SuplementosComponent },
  { path: 'ropa', component: RopadeportivaComponent },
  { path: 'calculadora', component: CalculadoraimcComponent },
  { path: 'pqrs', component: ContactoComponent },
  { path: 'alimentos', component: InformacionalimentosComponent },
  { path: 'quien', component: QuienComponent },
  { path: '*', component: ContactoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
