import Imedicament from './Imedicament';
import {Observable} from "rxjs";
export class Rappel {
  id: number;
  date_debut: Date;
  date_fin: Date;
  medicament: Observable<Imedicament>;
  heure_de_signale: String;

  constructor(id: number, date_debut: Date, date_fin: Date, medicament: Observable<Imedicament>, heure_de_signale: String) {
    this.id = id;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
    this.medicament = medicament;
    this.heure_de_signale = heure_de_signale;
  }
}
