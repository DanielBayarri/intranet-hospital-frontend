import { TipoInterface } from './tipo.interface'

export interface ServicioInterface {
  id: number
  nombre: string
  tipos: TipoInterface[]
}
