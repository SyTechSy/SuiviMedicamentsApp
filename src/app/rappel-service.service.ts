import { Injectable } from '@angular/core';
import {Rappel} from "./models/rappel.model";

@Injectable({
  providedIn: 'root'
})
export class RappelServiceService {
  public rappels: Rappel[] = [];

  addRappel(rappel: Rappel) {
    this.rappels = this.getRappel() || [];
    this.rappels.push(rappel);
    let rappelJson = JSON.stringify(this.rappels);
    sessionStorage.setItem('rappels', rappelJson);
  }

  getRappel() {
    const data = sessionStorage.getItem('rappels');
    // console.log(data);
    return JSON.parse(data || '[]');
  }
}
