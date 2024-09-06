import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncidenciaInterface } from '../../../../../shared/interfaces/incidencia.interface';

@Injectable({
  providedIn: 'root',
})
export class IncidenciaService {
  API_URL = 'http://localhost:3000/api/incidencias';

  constructor(private http: HttpClient) {}

  getIncidenciaList(): Observable<any> {
    return this.http.get<IncidenciaInterface[]>(this.API_URL);
  }
}
