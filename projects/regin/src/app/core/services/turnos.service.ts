import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TurnoInterface } from '../../../../../shared/interfaces/turno.interface'

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  constructor (private http: HttpClient) {}

  getTurnosList (): Observable<TurnoInterface[]> {
    return this.http.get<TurnoInterface[]>('http://localhost:3000/api/turnos')
  }

  getTurnoList (id: number): Observable<TurnoInterface> {
    return this.http.get<TurnoInterface>(
      `http://localhost:3000/api/turnos/${id}`
    )
  }
}
