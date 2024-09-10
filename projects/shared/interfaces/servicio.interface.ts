import { GrupoInterface } from './grupo.interface';
import { TipoInterface } from './tipo.interface';

export interface ServicioInterface {
  id: number;
  nombre: string;
  tipos: TipoInterface[];
  grupos: GrupoInterface[];
}

export interface ServicioListInterface {
  id: number;
  nombre: string;
}
