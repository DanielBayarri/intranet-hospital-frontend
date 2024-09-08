import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TipoInterface } from '../../../../../shared/interfaces/tipo.interface'

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  constructor (private http: HttpClient) {}

  getTipos (): Observable<TipoInterface[]> {
    return this.http.get<TipoInterface[]>('http://localhost:3000/api/tipos')
  }

  getTipo (id: number): Observable<TipoInterface> {
    return this.http.get<TipoInterface>(`http://localhost:3000/api/tipos/${id}`)
  }
}
