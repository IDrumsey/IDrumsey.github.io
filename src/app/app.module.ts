import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ------------------------- ANGULAR MATERIAL -------------------------
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './core/components/card/card.component';
import { ProfessionalComponent } from './core/pages/professional/professional.component';
import { PersonalComponent } from './core/pages/personal/personal.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProfessionalComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
