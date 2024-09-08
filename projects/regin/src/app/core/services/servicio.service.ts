import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ServicioInterface } from '../../../../../shared/interfaces/servicio.interface'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor (private http: HttpClient) {}

  getServiciosList (): Observable<ServicioInterface[]> {
    return this.http.get<ServicioInterface[]>(
      'http://localhost:3000/api/servicios'
    )
  }

  getServicioList (id: number): Observable<ServicioInterface> {
    return this.http.get<ServicioInterface>(
      `http://localhost:3000/api/servicios/${id}`
    )
  }
}
