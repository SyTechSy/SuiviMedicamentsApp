import Imedicament from './Imedicament';
import {Observable} from "rxjs";
export class Rappel {
  id: number;
  date_debut: String;
  date_fin: String;
  heure_de_signale: String;
  medicamentId: number | undefined;

  constructor(id: number, date_debut: String, date_fin: String, heure_de_signale: String, medicamentId?: number) {
    this.id = id;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
    this.heure_de_signale = heure_de_signale;
    this.medicamentId = medicamentId;
  }
}
