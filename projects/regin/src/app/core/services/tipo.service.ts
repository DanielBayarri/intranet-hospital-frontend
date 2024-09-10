import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoInterface } from '../../../../../shared/interfaces/tipo.interface';
import { environment } from '../../../../../shared/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class TipoService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getTipos(): Observable<TipoInterface[]> {
    return this.http.get<TipoInterface[]>(`${this.baseUrl}/api/tipos`);
  }

  getTipo(id: number): Observable<TipoInterface> {
    return this.http.get<TipoInterface>(`${this.baseUrl}/api/tipos/${id}`);
  }
}
