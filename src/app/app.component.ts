import { Component } from '@angular/core';
import Medicament from './models/medicament.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuiviMedicamentsApp';
  // nouveauMedicament: Medicament = new Medicament(0, "", "", 0, "", "");
}
