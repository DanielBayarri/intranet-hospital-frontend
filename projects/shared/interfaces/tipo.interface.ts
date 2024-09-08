import { ServicioInterface } from './servicio.interface'

export interface TipoInterface {
  id: number
  nombre: string
  servicio?: ServicioInterface
}
