import { IncidenciaInterface } from './incidencia.interface'
import { ServicioInterface } from './servicio.interface'

export interface UsuarioInterface {
  nombre: string
  apellidos: string
  dni: string
  email: string
  servicio: ServicioInterface[]
  grupo: {
    id: number
    nombre: string
  }
  indicencias: IncidenciaInterface[]
}

export interface UsuarioCrearInterface {
  nombre: string
  apellidos: string
  dni: string
  email: string
  grupoId: number
  servicioIds?: number[]
}
