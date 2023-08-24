import { Injectable } from '@angular/core';
import Medicament from './models/medicament.model';

@Injectable({
  providedIn: 'root'
})
export class MedicamentServiceService {

  public medicaments: Medicament[] = [];

  addMedicament(medicament: Medicament) {
    this.medicaments.push(medicament);
  }

  getMedicament() {
    return this.medicaments;
  }
}
