import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouteMedicamentComponent } from './ajoute-medicament/ajoute-medicament.component';
import { ModifierMedicamentComponent } from './modifier-medicament/modifier-medicament.component';
import { AjouterRappelComponent } from './ajouter-rappel/ajouter-rappel.component';
import { DetailComponent } from './detail/detail.component';
import {ListeMedicamentsComponent} from "./liste-medicaments/liste-medicaments.component";


const routes: Routes = [
  { path : '' ,redirectTo : 'medicaments', pathMatch: 'full' },

  { path : 'medicaments', component : ListeMedicamentsComponent },

  { path : 'medicaments/add', component : AjouteMedicamentComponent },

  { path : 'medicaments/edit/:medicamentID', component : ModifierMedicamentComponent },

  { path : 'medicaments/rappel/:id', component : AjouterRappelComponent },

  { path : 'medicaments/detail/:medicamentID', component : DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
