import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrupoInterface } from '../../../../../shared/interfaces/grupo.interface';

@Injectable({
  providedIn: 'root',
})
export class GrupoService {
  constructor(private http: HttpClient) {}

  getGrupoList(): Observable<GrupoInterface[]> {
    return this.http.get<GrupoInterface[]>('http://localhost:3000/api/grupos');
  }
}
