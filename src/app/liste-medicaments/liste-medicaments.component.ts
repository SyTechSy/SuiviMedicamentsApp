import {Component, OnDestroy, OnInit} from '@angular/core';
import Imedicament from '../models/Imedicament';
import { MedicamentService } from '../mon-service/medicament.service';
import {RappelServiceService} from "../rappel-service.service";
import {Rappel} from "../models/rappel.model";

@Component({
  selector: 'app-liste-medicaments',
  templateUrl: './liste-medicaments.component.html',
  styleUrls: ['./liste-medicaments.component.css']
})
export class ListeMedicamentsComponent implements OnInit, OnDestroy {

  public loading:boolean = false;
  public medicaments: Imedicament[] = [];
  public errorMessage: string | null  = null;
  private interval: any;
  private audio: HTMLAudioElement = new Audio('assets/alarm.mp3');

  // ==============================
  // recherche 
  
  termeRecherche: string = '';
  resultats: Imedicament[] = [];

  constructor(
    private medicamentService: MedicamentService,
    private rappelservice: RappelServiceService
  ) {}


  ngOnInit(): void {
    this.loading = true;
    this.medicamentService.getAllMedicaments().subscribe((data: Imedicament[]) => {
      this.medicaments = data.reverse();
      this.loading = false;
    }, (error: string | null) => {
      this.errorMessage = error;
      this.loading = false;
    });
    console.log("liste-medicaments.component.ts");
    this.startReminderInterval();
  }

  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed
    // this.stopReminderInterval();
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


  // =========================================================================

  
}
