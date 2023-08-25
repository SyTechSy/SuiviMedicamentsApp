import { Component, OnInit } from '@angular/core';
import { MedicamentServiceService } from '../medicament-service.service';

@Component({
  selector: 'app-liste-medicaments',
  templateUrl: './liste-medicaments.component.html',
  styleUrls: ['./liste-medicaments.component.css']
})
export class ListeMedicamentsComponent implements OnInit {

  medicaments: any[] = []; // Utilisez un tableau pour stocker plusieurs médicaments

  constructor(private medicamentServiceService: MedicamentServiceService) {}

  ngOnInit() {
    // Récupérez les données du service lors de l'initialisation du composant
    this.medicaments = this.medicamentServiceService.getMedicamentData();
  }
}
