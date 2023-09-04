import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouteMedicamentComponent } from './ajoute-medicament/ajoute-medicament.component';
import { ModifierMedicamentComponent } from './modifier-medicament/modifier-medicament.component';
import { AjouterRappelComponent } from './ajouter-rappel/ajouter-rappel.component';
import { DetailComponent } from './detail/detail.component';
import { ListeMedicamentsComponent } from './liste-medicaments/liste-medicaments.component';
import { NgOptimizedImage } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SpinnerComponent } from './spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeMedicamentsComponent,
    AppComponent,
    AjouteMedicamentComponent,
    ModifierMedicamentComponent,
    AjouterRappelComponent,
    DetailComponent,
    SpinnerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
