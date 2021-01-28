import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//rutas
import { APP_ROUTING } from './app.routes';


//Servicios

import {HeroesService} from './Services/heroes.service';


//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { BuscaheroesComponent } from './Components/buscaheroes/buscaheroes.component';
import { HeroeTarjetaComponent } from './Components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscaheroesComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
