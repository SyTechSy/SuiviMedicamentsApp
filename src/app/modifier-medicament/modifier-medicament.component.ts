import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IgroupeDosage } from '../models/IgroupeDosage';
import { IgroupeFrequence } from '../models/IgroupeFrequence';
import Imedicament from '../models/Imedicament';
import { MedicamentService } from '../mon-service/medicament.service';

@Component({
  selector: 'app-modifier-medicament',
  templateUrl: './modifier-medicament.component.html',
  styleUrls: ['./modifier-medicament.component.css']
})
export class ModifierMedicamentComponent {

  public loading : boolean = false;
  public medicamentID: string | null = null;
  public medicament : Imedicament = {} as Imedicament;
  public errorMessage : string | null = null;
  public dosagees: IgroupeDosage[] = [] as IgroupeDosage[];
  public frequences: IgroupeFrequence[] = [] as IgroupeFrequence[];

  constructor(private medicamentService : MedicamentService,
              private router : Router,
              private activatedRoute : ActivatedRoute) {


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

    // ==================================


    this.loading = true;
    this.activatedRoute.paramMap.subscribe( (param) => {
      this.medicamentID = param.get('medicamentID')
    })
    if (this.medicamentID) {
      this.medicamentService.getMedicament(this.medicamentID).subscribe( (data) => {
        this.medicament = data;
        this.loading = false;
        this.medicamentService.getAllGroupeDosage().subscribe( (data) => {
          this.dosagees = data;
        });
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
    }
  }

  public submitUpdate() {
    if (this.medicamentID) {
      this.medicamentService.updateMedicament(this.medicament, this.medicamentID ).subscribe( (data) => {
        this.router.navigate( ['/'] ).then();
      }, (error) => {
        this.errorMessage = error;
        this.router.navigate( [`/medicaments/edit/${this.medicamentID}`] ).then();
      });
    }
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




}
