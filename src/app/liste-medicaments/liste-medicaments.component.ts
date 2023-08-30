import { Component, OnInit } from '@angular/core';
import Imedicament from '../models/Imedicament';
import { MedicamentService } from '../mon-service/medicament.service';

@Component({
  selector: 'app-liste-medicaments',
  templateUrl: './liste-medicaments.component.html',
  styleUrls: ['./liste-medicaments.component.css']
})
export class ListeMedicamentsComponent implements OnInit {

  public loading:boolean = false;
  public medicaments: Imedicament[] = [];
  public errorMessage: string | null  = null;



  constructor( private medicamentService: MedicamentService) {}


  ngOnInit(): void {
    this.loading = true;
    this.medicamentService.getAllMedicaments().subscribe((data: Imedicament[]) => {
      this.medicaments = data;
      this.loading = false;
    }, (error: string | null) => {
      this.errorMessage = error;
      this.loading = false;
    });
  }


}
