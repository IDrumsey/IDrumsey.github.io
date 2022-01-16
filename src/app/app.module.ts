import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ------------------------- ANGULAR MATERIAL -------------------------
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

import { CardComponent } from './core/components/card/card.component';
import { ProfessionalComponent } from './core/pages/professional/professional.component';
import { PersonalComponent } from './core/pages/personal/personal.component';
import { SafeURLPipe } from './core/pipes/safe-url.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProfessionalComponent,
    PersonalComponent,
    SafeURLPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
