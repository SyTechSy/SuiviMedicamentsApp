import { Component } from '@angular/core';
import Medicament from '../models/medicament.model';
import * as fs from 'fs-extra';

import { MedicamentServiceService } from '../medicament-service.service';

@Component({
  selector: 'app-ajoute-medicament',
  templateUrl: './ajoute-medicament.component.html',
  styleUrls: ['./ajoute-medicament.component.css']
})
export class AjouteMedicamentComponent {

  selectedValues = '1';

  selectedValue = '1';

  selectedcomprime = 'Comprimé';

  onSelectChanges(event: any) {
    this.selectedValues = event.target.value;
  }

  onSelectChange(event: any) {
    this.selectedValue = event.target.value;
  }

  onSelectChangecomprime(event: any) {
    this.selectedcomprime = event.target.value;
  }


  // Côte de mon image pour que l'utilisateur ajouter une photo

  urllink: string = "assets/image/avatar1.png";

  selectFiles(event: any) { // Changez "event:any" en "event: any"
    if (event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.urllink = event.target.result;
      }
    }
  }

  selectedFile : File | undefined;

  photo(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0]
  }

  nouveauMedicament : Medicament = new Medicament(this.getMedicamentLength(), '', '', 0, '', '');
  // injection de dependence
  constructor(public medicamentServiceService: MedicamentServiceService) {}
  getMedicamentLength(): number {
    const medicamentArray = this.medicamentServiceService.getMedicament() || [];
    return medicamentArray.length + 1;
  }
  submitForm() {
    // console.log('Nouveau medicament :', this.nouveauMedicament);
    this.medicamentServiceService.addMedicament(this.nouveauMedicament);
    console.log(this.medicamentServiceService.getMedicament());
    this.nouveauMedicament = new Medicament(0, '', '', 0, '', '')
  }
}
