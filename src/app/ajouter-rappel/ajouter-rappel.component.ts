import { Component } from '@angular/core';
import { Rappel } from "../models/rappel.model";
import { ActivatedRoute, Router } from '@angular/router';
import { RappelServiceService } from "../rappel-service.service";
import { MedicamentService } from "../mon-service/medicament.service";
import { HttpClient } from "@angular/common/http";
import Imedicament from "../models/Imedicament";
import {Observable} from "rxjs";


@Component({
  selector: 'app-ajouter-rappel',
  templateUrl: './ajouter-rappel.component.html',
  styleUrls: ['./ajouter-rappel.component.css']
})
export class AjouterRappelComponent {
  constructor (
    public rappelservice: RappelServiceService,
    private route: ActivatedRoute,
    private medicamentService: MedicamentService,
    private httpClient: HttpClient,
    private router: Router
  ) {}
  id = this.route.snapshot.params['id'];
  medicament: Observable<Imedicament> | undefined;

  getRappelLength(): number {
    const rappelArray = this.rappelservice.getRappel() || [];
    return rappelArray.length + 1;
  }
  nouveauRappel : Rappel = new Rappel(this.getRappelLength(), '', '', '');

  createSubmit() {
    this.medicamentService.getMedicament(this.id).subscribe((medicament: Imedicament) => {
      this.nouveauRappel.medicamentId = medicament.id;
      medicament.prochaine_prise = this.nouveauRappel.heure_de_signale.toString();
      this.rappelservice.addRappel(this.nouveauRappel);
      this.medicamentService.updateMedicament(medicament, this.id).subscribe();
      this.router.navigate(['medicaments/detail/', this.id]);
    });
    }
}
