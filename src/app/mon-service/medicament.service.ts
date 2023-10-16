import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import Imedicament from '../models/Imedicament';
import { IgroupeDosage } from '../models/IgroupeDosage';
import { IgroupeFrequence } from '../models/IgroupeFrequence';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  private serverURL:string = ` http://localhost:9000`; // URL de mon json server

  constructor(private httpClient : HttpClient) { }

  //  AFFICHE TOUT LES MEDICAMENTS
  public getAllMedicaments(): Observable<Imedicament[]> {
    let dataURL: string = `${this.serverURL}/medicaments`;
    return this.httpClient.get<Imedicament[]>(dataURL).pipe(catchError(this.handleError));
  }

  // AFFICHE SINGLE MEDICAMENT DETAILLE
  public getMedicament(medicamentID: string): Observable<Imedicament> {
    let dataURL: string = `${this.serverURL}/medicaments/${medicamentID}`;
    return this.httpClient.get<Imedicament>(dataURL).pipe(catchError(this.handleError));
  }

  // AJOUTER UN MEDICAMENT
  public createMedicament(medicament: Imedicament):Observable<Imedicament> {
    let dataURL: string = `${this.serverURL}/medicaments`;
    return this.httpClient.post<Imedicament>(dataURL, medicament).pipe(catchError(this.handleError));
  }

  // MODIFIER UN MEDICAMENT
  public updateMedicament(medicament: Imedicament, medicamentID: string):Observable<Imedicament> {
    let dataURL: string = `${this.serverURL}/medicaments/${medicamentID}`;
    return this.httpClient.put<Imedicament>(dataURL, medicament).pipe(catchError(this.handleError));
  }

  // SUPRIMER UN MEDICAMENT
  public deleteMedicament(medicamentID: string):Observable<{}> {
    let dataURL: string = `${this.serverURL}/medicaments/${medicamentID}`;
    return this.httpClient.delete<{ }>(dataURL).pipe(catchError(this.handleError));
  }


  // =================================== POUR LES DOSAGE =========================================


  //  GET ALL GROUPE DOSAGE
  public getAllGroupeDosage(): Observable<IgroupeDosage[]> {
    let dataURL: string = `${this.serverURL}/dosagees`;
    return this.httpClient.get<IgroupeDosage[]>(dataURL).pipe(catchError(this.handleError));
  }

  // AFFICHE SINGLE DOSAGE
  public getDosage(medicament: Imedicament): Observable<IgroupeDosage> {
    let dataURL: string = `${this.serverURL}/dosagees/${medicament.dosageId}`;
    return this.httpClient.get<IgroupeDosage>(dataURL).pipe(catchError(this.handleError));
  }

  // =================================== POUR LES FREQUENCE =========================================

    //  GET ALL GROUPE FREQUENCE
    public getAllGroupeFrequence(): Observable<IgroupeFrequence[]> {
      let dataURL: string = `${this.serverURL}/frequences`;
      return this.httpClient.get<IgroupeFrequence[]>(dataURL).pipe(catchError(this.handleError));
    }

    // AFFICHE SINGLE FREQUENCE
    public getFrequence(medicament: Imedicament): Observable<IgroupeFrequence> {
      let dataURL: string = `${this.serverURL}/frequences/${medicament.frequenceId}`;
      return this.httpClient.get<IgroupeFrequence>(dataURL).pipe(catchError(this.handleError));
    }


  //ERROR HANDLING
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // clienr Error
      errorMessage = `Error : ${error.error.message}`
    } else {
      // server Error
      errorMessage = `Status : ${error.status} \n Message : ${error.message}`;
    }
    return throwError(errorMessage);
  }

  ajouterMedicamentAvecImage(medicament: any): Observable<any> {
    // Enregistrez le médicament sur le serveur JSON
    return this.httpClient.post(`${this.serverURL}`, medicament);
  }
  
}
