import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MedicamentService } from '../mon-service/medicament.service';
import Imedicament from '../models/Imedicament';
import { IgroupeDosage } from '../models/IgroupeDosage';
import { IgroupeFrequence } from '../models/IgroupeFrequence';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  
  public medicaments: Imedicament[] = [];
  public loading : boolean = false
  public medicamentID: string | null = null;
  public medicament:Imedicament = {} as Imedicament;
  public errorMessage: string | null = null;
  public group: IgroupeDosage = {} as IgroupeDosage
  public frequency: IgroupeFrequence= {} as IgroupeFrequence

  constructor(private activatedRoute : ActivatedRoute,
              private medicamentService: MedicamentService,
              private router : Router) {

  }

  // les recuperation des donnee sur detaille
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.medicamentID = param.get('medicamentID');
    });
    if (this.medicamentID) {
      this.loading = true;
      this.medicamentService.getMedicament(this.medicamentID).subscribe((data) => {
        this.medicament = data;
        this.loading = false;
        this.medicamentService.getDosage(data).subscribe((data) => {
          this.group = data;
        });

        this.medicamentService.getFrequence(data).subscribe((data) => {
          this.frequency = data;
        });
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
    }

    this.getAllMedicamentFormServer();
  }

  public getAllMedicamentFormServer() {
    this.loading = true;
    this.medicamentService.getAllMedicaments().subscribe((data: Imedicament[]) => {
      this.medicaments = data;
      this.loading = false;
    }, (error: string | null) => {
      this.errorMessage = error;
      this.loading = false;
    });
  }

  public clickDeleteMedicament(medicamentID: string | undefined) {
    if (medicamentID) {
      this.medicamentService.deleteMedicament(medicamentID).subscribe( (data) => {
        // Suppression réussie, maintenant redirigez vers la page de liste des médicaments        this.getAllMedicamentFormServer
        this.router.navigate(['/medicaments']);
      },  (error) => {
        this.errorMessage = error;
      });
    }
  }
  
  // =============== animation de boutton supprimer =============

  confirmBox(medicamentID: string | undefined) {
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer?',
      text: 'Vous ne pourrez plus le récupérer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui Supprimez-le',
      // cancelButtonText: 'Non, gardez-le',
    }).then((result) => {
      if (result.value) {
        this.clickDeleteMedicament(medicamentID); // Appeler la fonction de suppression ici
        Swal.fire('Supprimé!', 'Médicament supprimé avec succès.', 'success');
      } 
      // else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire('Annulé', 'Médicament n\'a pas été modifié.)', 'error');
      // }
    });
  }
  






  public isNotEmpty() {
    return Object.keys(this.medicament).length > 0 && Object.keys(this.group).length > 0 ; //
  }

  public isNotEmptys() {
    return Object.keys(this.medicament).length > 0 && Object.keys(this.frequency).length > 0 ; //
  }








}
