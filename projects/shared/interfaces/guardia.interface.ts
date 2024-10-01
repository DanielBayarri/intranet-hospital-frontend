import { UsuarioInterface } from './usuario.interface';

export interface GuardiaLocalizadaInterface {
  id: number;
  comentario: string;
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  usuario: UsuarioInterface;
}

export interface CrearGuardiaLocalizadaInterface {
  id?: number;
  comentario: string;
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  usuarioId: number;
}
