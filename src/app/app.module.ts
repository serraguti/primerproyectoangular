import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponent } 
from 'src/components/primercomponent/primercomponent.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { Deportes } from 'src/components/deportes/deportes.component';
import { FormularioBindingModel } from 'src/components/formulariobindingmodel/formulariobindingmodel.component';
import { FormulariosReferencia } from 'src/components/formulariosreferencia/formulariosreferencia.component';
import { FormsModule } from '@angular/forms';
import { TablaMultiplicar } from 'src/components/tablamultiplicar/tablamultiplicar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    Deportes, 
    FormularioBindingModel,
    FormulariosReferencia,
    TablaMultiplicar
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
