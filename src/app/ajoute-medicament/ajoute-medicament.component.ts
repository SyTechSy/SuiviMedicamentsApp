import { Component, OnInit } from '@angular/core';
import Imedicament from '../models/Imedicament';
import { IgroupeDosage } from '../models/IgroupeDosage';
import { IgroupeFrequence } from '../models/IgroupeFrequence';
import { MedicamentService } from '../mon-service/medicament.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// import Medicament from '../models/medicament.model';
// import * as fs from 'fs-extra';
// import { MedicamentServiceService } from '../medicament-service.service';

@Component({
  selector: 'app-ajoute-medicament',
  templateUrl: './ajoute-medicament.component.html',
  styleUrls: ['./ajoute-medicament.component.css']
})
export class AjouteMedicamentComponent implements OnInit{
  public loading : boolean = false;
  public medicament : Imedicament = {} as Imedicament;
  public errorMessage : string | null = null;
  public dosagees: IgroupeDosage[] = [] as IgroupeDosage[];
  public frequences: IgroupeFrequence[] = [] as IgroupeFrequence[];

  // La creation de l'image 
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  

  constructor(private medicamentService : MedicamentService,
              private router : Router,
              private http: HttpClient) {

  }

  ngOnInit(): void {
    this.medicamentService.getAllGroupeDosage().subscribe((data) => {
      this.dosagees = data;
      // this.frequences = data;
    }, (error) => {
      this.errorMessage = error;
    })

    this.medicamentService.getAllGroupeFrequence().subscribe((frequenceData) => {
    this.frequences = frequenceData;
    }, (frequenceError) => {
      this.errorMessage = frequenceError;
    });
  }

  public createSubmit() {
    this.medicamentService.createMedicament(this.medicament).subscribe( (data) => {
      this.router.navigate( ['/'] ).then();
    }, (error) => {
      this.errorMessage = error;
      this.router.navigate( [`/medicaments/add`] ).then();
    });
  }



  // =========================== Pour limage +++++++++++++++++++++

  

  // addUserPhoto() {
  //   if (this.selectedFile) {
  //     // Créez une instance de FormData et ajoutez-y le fichier
  //     const formData = new FormData();
  //     formData.append('photo', this.selectedFile);
  
  //     // Envoyez le FormData au serveur JSON via une requête POST
  //     this.http.post('/assets/image/', formData).subscribe(
  //       (response) => {
  //         // Traitez la réponse du serveur, qui peut inclure des informations sur la photo ajoutée
  //         console.log('Réponse du serveur :', response);
  //       },
  //       (error) => {
  //         // Gérez les erreurs en cas d'échec de l'ajout de la photo
  //         console.error('Erreur lors de l\'ajout de la photo :', error);
  //       }
  //     );
  //   } else {
  //     console.error('Aucun fichier sélectionné.');
  //   }
  // }
  
// handleFileInput(event: any) {
  //   this.selectedFile = event.target.files[0];

  //   // Afficher l'image instantanément
  //   if (this.selectedFile) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(this.selectedFile);

  //     reader.onload = () => {
  //       this.selectedFileDataUrl = reader.result as string;
  //     };
  //   }
  // }

  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];

    // Afficher l'image instantanément
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);

      reader.onload = () => {
        this.selectedFileDataUrl = reader.result as string
        this.medicament.photo = reader.result as string; // Stockez les données d'image
      };
    }
  }

  ajouterMedicamentAvecImage() {
    if (this.medicament && this.medicament.photo) {
      // Appelez le service pour ajouter le médicament avec image
      this.medicamentService.ajouterMedicamentAvecImage(this.medicament).subscribe(
        (response) => {
          // Traitez la réponse du serveur, qui peut inclure des informations sur le médicament ajouté
          console.log('Réponse du serveur :', response);
        },
        (error) => {
          // Gérez les erreurs en cas d'échec de l'ajout du médicament
          console.error('Erreur lors de l\'ajout du médicament :', error);
        }
      );
    } else {
      console.error('Veuillez sélectionner un fichier image.');
    }
  }




}
