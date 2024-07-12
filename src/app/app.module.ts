import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DirettiveComponent } from './direttive/direttive.component';
import { PassareDatiComponent } from './passare-dati/passare-dati.component';
import { VariabiliTemplateComponent } from './variabili-template/variabili-template.component';
import { CreaDirettiveDirective } from './crea-direttive.directive';
import { FunzioniPipeComponent } from './funzioni-pipe/funzioni-pipe.component';
import { ServiceProvaComponent } from './service-prova/service-prova.component';
import { HomeComponent } from './routing/home/home.component';
import { ContattiComponent } from './routing/contatti/contatti.component';
import { ContattoComponent } from './routing/contatto/contatto.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
// import { ObservableComponent } from './observable/observable.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirettiveComponent,
    PassareDatiComponent,
    VariabiliTemplateComponent,
    CreaDirettiveDirective,
    FunzioniPipeComponent,
    ServiceProvaComponent,
    HomeComponent,
    ContattiComponent,
    ContattoComponent,
    NotFoundComponent,
    DrivenFormComponent,
    // ObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, // 2 way binding
    MatSelectModule,
    ReactiveFormsModule, // rective form
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
