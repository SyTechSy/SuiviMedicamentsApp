import {Medicament} from './medicament.model';
export class Rappel {
  id: number;
  date_debut: Date;
  date_fin: Date;
  medicament: Medicament;
  heure_de_signale: Date;

  constructor(id: number, date_debut: Date, date_fin: Date, medicament: Medicament, heure_de_signale: Date) {
    this.id = id;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
    this.medicament = medicament;
    this.heure_de_signale = heure_de_signale;
  }
}
