import { Component } from '@angular/core';
import { Rappel } from "../models/rappel.model";
import { ActivatedRoute, Router } from '@angular/router';
import { RappelServiceService } from "../rappel-service.service";
import { MedicamentService } from "../mon-service/medicament.service";
import { HttpClient } from "@angular/common/http";
import Imedicament from "../models/Imedicament";
import {Observable} from "rxjs";
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajouter-rappel',
  templateUrl: './ajouter-rappel.component.html',
  styleUrls: ['./ajouter-rappel.component.css']
})
export class AjouterRappelComponent {
  form: FormGroup;
  constructor (
    public rappelservice: RappelServiceService,
    private route: ActivatedRoute,
    private medicamentService: MedicamentService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      heure_de_signale: ['', Validators.required],
    }, {
      validators: [this.dateValidation('date_debut', 'date_fin')]
    });
  }
  id = this.route.snapshot.params['id'];
  medicament: Observable<Imedicament> | undefined;

  dateValidation(startDateKey: string, endDateKey: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const startDate = new Date(control.get(startDateKey)?.value);
      const endDate = new Date(control.get(endDateKey)?.value);

      if (startDate && endDate && startDate > endDate) {
        return { dateRangeInvalid: true };
      }

      return null;
    };
  }
  getRappelLength(): number {
    const rappelArray = this.rappelservice.getRappel() || [];
    return rappelArray.length + 1;
  }
  nouveauRappel : Rappel = new Rappel(this.getRappelLength(), '', '', '');

  createSubmit() {
    if (this.form.invalid) {
      alert('Date de début doit être inférieur à la date de fin');
      return;
    }
    const formData = this.form.value;
    this.medicamentService.getMedicament(this.id).subscribe((medicament: Imedicament) => {
      this.nouveauRappel.medicamentId = medicament.id;
      this.nouveauRappel.date_debut = formData.date_debut;
      this.nouveauRappel.date_fin = formData.date_fin;
      this.nouveauRappel.heure_de_signale = formData.heure_de_signale;
      medicament.prochaine_prise = this.nouveauRappel.heure_de_signale.toString();
      this.rappelservice.addRappel(this.nouveauRappel);
      this.medicamentService.updateMedicament(medicament, this.id).subscribe();
      this.router.navigate(['medicaments/detail/', this.id]).then(r => alert('Rappel ajouté avec succès'));
    });
  }
}
