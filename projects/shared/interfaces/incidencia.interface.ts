import { servicioInterface } from './servicio.interface';
import { SubtipoInterface } from './subtipo.interface';
import { TipoInterface } from './tipo.interface';
import { TurnoInterface } from './turno.interface';
import { UsuarioInterface } from './usuario.interface';

export interface IncidenciaInterface {
  id: number;
  titulo: string;
  fecha: Date;
  horaInicio: string;
  comentario: string;
  usuario: UsuarioInterface;
  servicio: servicioInterface;
  tipo: TipoInterface;
  subtipo: SubtipoInterface;
  turno: TurnoInterface;
}

export interface IncidenciaCrearInterface {
  id?: number;
  titulo: string;
  fecha: Date;
  horaInicio: string;
  comentario: string;
  usuarioId: number;
  servicioId: number;
  tipoId: number;
  subtipoId: number;
  turnoId: number;
}
