import { Component } from '@angular/core';

@Component({
  selector: 'app-modifier-medicament',
  templateUrl: './modifier-medicament.component.html',
  styleUrls: ['./modifier-medicament.component.css']
})
export class ModifierMedicamentComponent {
  
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
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.urllink = event.target.result;
      }
    }
  }
}
