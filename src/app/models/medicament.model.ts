export class Medicament {
  id: number;
  nom: string;
  dosage: number;
  frequence: number;
  prochaine_prise: string;

  constructor(id: number,nom: string, dosage: number, frequence: number, prochaine_prise: string) {
    this.id = id;
    this.nom = nom;
    this.dosage = dosage;
    this.frequence = frequence;
    this.prochaine_prise = prochaine_prise;
  }
}
