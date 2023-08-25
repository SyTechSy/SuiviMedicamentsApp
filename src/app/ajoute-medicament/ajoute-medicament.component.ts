import { Component, OnInit } from '@angular/core';
import { AddMedicament } from './addMedicament';
import { NgForm } from '@angular/forms';
import { MedicamentServiceService } from '../medicament-service.service';

@Component({
  selector: 'app-ajoute-medicament',
  templateUrl: './ajoute-medicament.component.html',
  styleUrls: ['./ajoute-medicament.component.css']
})
export class AjouteMedicamentComponent implements OnInit{


  // =========================== Pour les champs 1 ou comprimer +++++++++++++++++++++

  
  selectedValues = '1';

  selectedValue = '1';

  selectedcomprime = 'Comprimé';
  private selectedFile: File | undefined;

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

  //selectedFile : File | undefined;

  photo(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0]
  }


  // =========================== CRUD POUR AJOUTER UN MEDI +++++++++++++++++++++

   public addMedicament : AddMedicament = new AddMedicament;

   ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  public saveData(ajouteForm: NgForm) {
    console.log(ajouteForm.form);
    // stringify pour convertir et transferer le fichier
    console.log('valeurs: ', JSON.stringify(ajouteForm.value))
    console.log("hello");
  }


  // ================= Appel apour stocker les donneee du formulaire ============

  medicamentData: any = {} // Vous devez définir votre modèle de données ici

  constructor(private medicamentServiceService: MedicamentServiceService) {}

  onSubmit() {
    // Soumettez le formulaire, effectuez les validations nécessaires
    // Si les données sont valides, stockez-les dans le service
    if (this.validateMedicamentData()) {
      this.medicamentServiceService.setMedicamentData(this.medicamentData);
      this.resetMedicamentData();
      console.log('Données du formulaire stockées avec succès dans le service.');
    }
  }
    
  private validateMedicamentData(): boolean {
    // Implémentez ici votre logique de validation
    // Retournez true si les données sont valides, sinon false
    return (
      !!this.medicamentData.nom &&
      !!this.medicamentData.dosage &&
      !!this.medicamentData.frequence &&
      !!this.medicamentData.prochaine_prise &&
      !!this.medicamentData.description
    );
  }

    private resetMedicamentData() {
      // Réinitialisez le modèle de données du formulaire après la soumission
      this.medicamentData = {};
    }
  }




