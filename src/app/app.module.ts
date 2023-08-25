import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouteMedicamentComponent } from './ajoute-medicament/ajoute-medicament.component';
import { ModifierMedicamentComponent } from './modifier-medicament/modifier-medicament.component';
import { AjouterRappelComponent } from './ajouter-rappel/ajouter-rappel.component';
import { DetailComponent } from './detail/detail.component';
import { ListeMedicamentsComponent } from './liste-medicaments/liste-medicaments.component';
import {NgOptimizedImage} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { MedicamentServiceService } from './medicament-service.service'; // Importez le service
import { ListeMedicamentsModule } from './liste-medicaments/liste-medicaments.module';


@NgModule({
  declarations: [
    AppComponent,
    ListeMedicamentsComponent,
    AppComponent,
    AjouteMedicamentComponent,
    ModifierMedicamentComponent,
    AjouterRappelComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ListeMedicamentsModule,
  ],
  providers: [MedicamentServiceService], // Ajoutez le service aux providers
  bootstrap: [AppComponent]
})
export class AppModule { }
