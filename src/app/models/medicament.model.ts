export default class Medicament {
  id: number;
  nom: string;
  dosage: string;
  frequence: number;
  prochaine_prise: string;
  description: string;

  constructor(id: number,nom: string, dosage: string, frequence: number, prochaine_prise: string, description: string) {
    this.id = id;
    this.nom = nom;
    this.dosage = dosage;
    this.frequence = frequence;
    this.prochaine_prise = prochaine_prise;
    this.description = description
  }
}
