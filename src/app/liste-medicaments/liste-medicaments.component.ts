import {Component, OnDestroy, OnInit} from '@angular/core';
import Imedicament from '../models/Imedicament';
import { MedicamentService } from '../mon-service/medicament.service';
import {RappelServiceService} from "../rappel-service.service";
import {Rappel} from "../models/rappel.model";
import {IgroupeDosage} from "../models/IgroupeDosage";
import {IgroupeFrequence} from "../models/IgroupeFrequence";

@Component({
  selector: 'app-liste-medicaments',
  templateUrl: './liste-medicaments.component.html',
  styleUrls: ['./liste-medicaments.component.css']
})
export class ListeMedicamentsComponent implements OnInit {

  // Pagination variables
  public currentPage = 1; // Initial page
  public itemsPerPage = 4; // Number of items per page
  public searchItem = ''; // Search item
  // public group: IgroupeDosage = {} as IgroupeDosage
  public frequency: IgroupeFrequence= {} as IgroupeFrequence

  public loading:boolean = false;
  public medicaments: Imedicament[] = [];
  public errorMessage: string | null  = null;
  private interval: any;
  private audio: HTMLAudioElement = new Audio('assets/alarm.mp3');

  constructor(
    private medicamentService: MedicamentService,
    private rappelservice: RappelServiceService
  ) {}


  ngOnInit(): void {
    this.loading = true;
    this.medicamentService.getAllMedicaments().subscribe((data: Imedicament[]) => {
      this.medicaments = data.reverse();
      this.medicaments.forEach((medicament: Imedicament) => {
        this.medicamentService.getFrequence(medicament).subscribe((medicament) => {
          this.frequency = medicament;
        });
        }
      );
      this.loading = false;
    }, (error: string | null) => {
      this.errorMessage = error;
      this.loading = false;
    });
    console.log("liste-medicaments.component.ts");
    this.startReminderInterval();
  }

  startReminderInterval(): void {
    const rappelArray = this.rappelservice.getRappel() || [];
    this.interval = setInterval(() => {
      const currentTime = new Date();
      rappelArray.forEach((rappel: Rappel) => {
        const rappelTimeParts = rappel.heure_de_signale.split(":");
        const rappelHours = parseInt(rappelTimeParts[0], 10);
        const rappelMinutes = parseInt(rappelTimeParts[1], 10);

        if (
          rappelHours === currentTime.getHours() &&
          rappelMinutes === currentTime.getMinutes()
        ) {
          this.triggerAlarm();
        }
      });
    }, 60000);
  }
  stopReminderInterval(): void {
    clearInterval(this.interval);
  }

  triggerAlarm(): void {
    // Play the audio
    this.audio.play().then(r => console.log('Rappel de médicament'));
  }

  filterMedicaments(): Imedicament[] {
    return this.medicaments.filter((medicament: Imedicament) => {
      return (
        medicament.nom.toLowerCase().includes(this.searchItem.toLowerCase())
      );
    });
  }
  public get filteredMedicaments(): Imedicament[] {
    return this.filterMedicaments();
  }
}
