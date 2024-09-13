import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrupoInterface } from '../../../../../shared/interfaces/grupo.interface';
import { environment } from '../../../../../shared/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class GrupoService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getGrupoList(): Observable<GrupoInterface[]> {
    return this.http.get<GrupoInterface[]>(`${this.baseUrl}/api/grupos`);
  }

  getGrupo(id: number): Observable<GrupoInterface> {
    return this.http.get<GrupoInterface>(`${this.baseUrl}/api/grupos/${id}`);
  }
}
