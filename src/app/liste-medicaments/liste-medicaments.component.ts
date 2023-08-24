import { Component } from '@angular/core';
import { MedicamentServiceService } from '../medicament-service.service';

// import {AjouteMedicamentComponent} from '../ajoute-medicament/ajoute-medicament.component';

@Component({
  selector: 'app-liste-medicaments',
  templateUrl: './liste-medicaments.component.html',
  styleUrls: ['./liste-medicaments.component.css']
})
export class ListeMedicamentsComponent {

  // donne : AjouteMedicamentComponent = new AjouteMedicamentComponent;
  // data = this.donne.medicaments;

constructor(public medicamentServiceService: MedicamentServiceService) {
  console.log(this.medicamentServiceService.getMedicament());

}

}
