import { ServicioInterface } from './servicio.interface';
import { UsuarioInterface } from './usuario.interface';

export interface GrupoInterface {
  id: number;
  nombre: string;
}
export interface GrupoListInterface {
  id: number;
  nombre: string;
  servicios: ServicioInterface[];
  usuarios: UsuarioInterface[];
}
