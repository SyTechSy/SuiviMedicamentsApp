import { Component } from '@angular/core';
import { Rappel } from "../models/rappel.model";
import { ActivatedRoute } from '@angular/router';
import { RappelServiceService } from "../rappel-service.service";
import { MedicamentService } from "../mon-service/medicament.service";
import { HttpClient } from "@angular/common/http";

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
    private httpClient: HttpClient
  ) {}
  id = this.route.snapshot.params['id'];

  medicament = this.medicamentService.getMedicament(this.id);




  getRappelLength(): number {
    const rappelArray = this.rappelservice.getRappel() || [];
    return rappelArray.length + 1;
  }
  nouveauRappel : Rappel = new Rappel(this.getRappelLength(), new Date(), new Date(), this.medicament, '');
}
