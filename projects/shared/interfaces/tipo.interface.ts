import { SubtipoInterface } from './subtipo.interface';

export interface TipoInterface {
  id: number;
  nombre: string;
  subtipos: SubtipoInterface[];
}
