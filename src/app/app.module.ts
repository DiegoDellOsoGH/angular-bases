import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CounterComponent } from './counter/counter.component'; // Se pasa a modulo
import { CounterModule } from './counter/counter.module';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component'; // Se define el nuevo componente
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    //CounterComponent, // Se pasa a modulo
    //HeroComponent,
    //ListComponent // Se define el nuevo componente
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
