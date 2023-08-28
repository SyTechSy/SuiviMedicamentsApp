import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouteMedicamentComponent } from './ajoute-medicament/ajoute-medicament.component';
import { ModifierMedicamentComponent } from './modifier-medicament/modifier-medicament.component';
import { AjouterRappelComponent } from './ajouter-rappel/ajouter-rappel.component';
import { DetailComponent } from './detail/detail.component';
import {ListeMedicamentsComponent} from "./liste-medicaments/liste-medicaments.component";


const routes: Routes = [
  {
    path : '' ,
    component : ListeMedicamentsComponent
  },
  {
    path : 'accueil' ,
    component : ListeMedicamentsComponent
  },
  {
    path : 'ajouter' ,
    component : AjouteMedicamentComponent
  },
  {
    path : 'modifier' ,
    component : ModifierMedicamentComponent
   },
   {
    path : 'rappel' ,
    component : AjouterRappelComponent
   },
   {
    path : 'detail/:id' ,
    component : DetailComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
