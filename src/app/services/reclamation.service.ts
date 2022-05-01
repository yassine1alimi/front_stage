import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Reclamation } from '../model/reclamation.model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  auth_api = 'http://localhost:8087/api/auth';

  constructor(private http: HttpClient) { }




  listeReclamations(): Observable<Reclamation[]>{

    return this.http.get<Reclamation[]>(this.auth_api + '/reclamations');
  }


}
