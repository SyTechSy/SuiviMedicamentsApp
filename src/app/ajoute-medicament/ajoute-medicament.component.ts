import { Component, OnInit } from '@angular/core';
import Imedicament from '../models/Imedicament';
import { IgroupeDosage } from '../models/IgroupeDosage';
import { IgroupeFrequence } from '../models/IgroupeFrequence';
import { MedicamentService } from '../mon-service/medicament.service';
import { Router } from '@angular/router';
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

  constructor(private medicamentService : MedicamentService,
              private router : Router) {

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



  // =========================== Pour les champs 1 ou comprimer +++++++++++++++++++++


  selectedValues = '1';

  selectedValue = '1';

  selectedcomprime = 'Comprimé';
  private selectedFile: File | undefined;

  onSelectChanges(event: any) {
    this.selectedValues = event.target.value;
    // console.log(this.selectedValues)
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

  //selectedFile : File | undefined;

  photo(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0]
  }
}
