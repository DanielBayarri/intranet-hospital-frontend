import { GrupoInterface } from './grupo.interface';
import { IncidenciaInterface } from './incidencia.interface';
import { RoleInterface } from './role.interface';
import { ServicioInterface } from './servicio.interface';

export interface UsuarioInterface {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  email: string;
  role: RoleInterface;
  servicio: ServicioInterface[];
  grupo: GrupoInterface;
  incidencias: IncidenciaInterface[];
}

export interface UsuariosListInterface {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  email: string;
  role: RoleInterface;
  servicio: ServicioInterface;
  grupo: GrupoInterface[];
  incidencias: IncidenciaInterface[];
}

export interface UsuarioCrearInterface {
  nombre: string;
  apellidos: string;
  dni: string;
  email: string;
  roleId: number;
  grupoId: number;
  servicioIds?: number[];
}
