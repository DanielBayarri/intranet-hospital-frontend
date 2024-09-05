import { IncidenciaInterface } from './incidencia.interface';

export interface UsuarioInterface {
  nombre: string;
  apellidos: string;
  dni: string;
  email: string;
  grupoId: number;
  servicioIds?: number[];
  grupo?: {
    id: number;
    nombre: string;
  };
  indicencias?: IncidenciaInterface[];
}

export interface UsuarioCrearInterface {
  nombre: string;
  apellidos: string;
  dni: string;
  email: string;
  grupoId: number;
  servicioIds?: number[];
}
