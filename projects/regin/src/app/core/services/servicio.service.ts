import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioInterface } from '../../../../../shared/interfaces/servicio.interface';
import { environment } from '../../../../../shared/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getServiciosList(): Observable<ServicioInterface[]> {
    return this.http.get<ServicioInterface[]>(`${this.baseUrl}/api/servicios`);
  }

  getServicioList(id: number): Observable<ServicioInterface> {
    return this.http.get<ServicioInterface>(
      `${this.baseUrl}/api/servicios/${id}`
    );
  }
}
