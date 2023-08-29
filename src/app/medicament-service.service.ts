import {Injectable} from '@angular/core';
import Medicament from './models/medicament.model';
import {ILocalStorageService} from 'angular-local-storage';


@Injectable({
  providedIn: 'root'
})
export class MedicamentServiceService {

  public medicaments: Medicament[] = [];

  addMedicament(medicament: Medicament) {
    this.medicaments = this.getMedicament() || [];
    this.medicaments.push(medicament);
    let medicamentJson = JSON.stringify(this.medicaments);
    sessionStorage.setItem('medicaments', medicamentJson);
  }

  getMedicament() {
    const data = sessionStorage.getItem('medicaments');
    return JSON.parse(data || '[]');
  }
}
