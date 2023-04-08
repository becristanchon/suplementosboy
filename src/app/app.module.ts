import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BarrasuComponent } from './barrasu/barrasu.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';
import { AccesoriosComponent } from './productos/accesorios/accesorios.component';
import { RopadeportivaComponent } from './productos/ropadeportiva/ropadeportiva.component';
import { SuplementosComponent } from './productos/suplementos/suplementos.component';
import { OrientacionComponent } from './productos/orientacion/orientacion.component';
import { InformacionalimentosComponent } from './productos/informacionalimentos/informacionalimentos.component';
import { CalculadoraimcComponent } from './productos/calculadoraimc/calculadoraimc.component';
import { AsesoriaprofesionalComponent } from './productos/asesoriaprofesional/asesoriaprofesional.component';
import { QuienComponent } from './quien/quien.component';
import { ContactoComponent } from './productos/contacto/contacto.component';

import { HttpClientModule } from '@angular/common/http';
import { BotonPQRSComponent } from './boton-pqrs/boton-pqrs.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { VentanaEComponent } from './productos/ventana-e/ventana-e.component';
import { FormulariopqrsComponent } from './formulariopqrs/formulariopqrs.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    HomeComponent,
    MenuComponent,
    BarrasuComponent,
    FooterComponent,
    InicioComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    AccesoriosComponent,
    RopadeportivaComponent,
    SuplementosComponent,
    OrientacionComponent,
    InformacionalimentosComponent,
    CalculadoraimcComponent,
    AsesoriaprofesionalComponent,
    QuienComponent,
    ContactoComponent,
    BotonPQRSComponent,
    BuscadorComponent,
    VentanaEComponent,
    FormulariopqrsComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
