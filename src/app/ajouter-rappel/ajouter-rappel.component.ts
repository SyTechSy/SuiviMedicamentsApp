import { Component } from '@angular/core';
import {Rappel} from "../models/rappel.model";
import { ActivatedRoute } from '@angular/router';
import {RappelServiceService} from "../rappel-service.service";
import {MedicamentServiceService} from "../medicament-service.service";

@Component({
  selector: 'app-ajouter-rappel',
  templateUrl: './ajouter-rappel.component.html',
  styleUrls: ['./ajouter-rappel.component.css']
})
export class AjouterRappelComponent {
  constructor (
    public rappelservice: RappelServiceService,
    private route: ActivatedRoute,
    public medicamentServiceService: MedicamentServiceService
  ) {}
  id = this.route.snapshot.params['id'];

  medicament = this.medicamentServiceService.getMedicament().find((medicament: { id: any; }) => medicament.id === this.id);




  getRappelLength(): number {
    const rappelArray = this.rappelservice.getRappel() || [];
    return rappelArray.length + 1;
  }
  nouveauRappel : Rappel = new Rappel(this.getRappelLength(), new Date(), new Date(), this.medicament, new  Date());
}
