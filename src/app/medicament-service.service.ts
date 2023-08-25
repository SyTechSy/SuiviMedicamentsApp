import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicamentServiceService {

  private medicaments: any[] = [];

  setMedicamentData(data: any) {
    this.medicaments.push(data);
  }

  getMedicamentData() {
    return this.medicaments;
  }
}
