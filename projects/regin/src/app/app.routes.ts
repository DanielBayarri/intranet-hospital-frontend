import { Routes } from '@angular/router';
import { NuevaIncidenciaComponent } from './pages/usuarios/nueva-incidencia/nueva-incidencia.component';
import { ListaIncidenciasComponent } from './pages/usuarios/lista-incidencias/lista-incidencias.component';
import { UsuariosAdminComponent } from './pages/admin/usuarios-admin/usuarios-admin.component';
import { TiposAdminComponent } from './pages/admin/tipos-admin/tipos-admin.component';
import { IncidenciasAdminComponent } from './pages/admin/incidencias-admin/incidencias-admin.component';
import { UsuariosSuperComponent } from './pages/superadmin/usuarios-super/usuarios-super.component';
import { TiposSuperComponent } from './pages/superadmin/tipos-super/tipos-super.component';
import { IncidenciasSuperComponent } from './pages/superadmin/incidencias-super/incidencias-super.component';
import { isAuthenticatedGuard } from '../../../shared/guards/is-authenticated.guard';

export const REGIN_ROUTES: Routes = [
  { path: '', redirectTo: 'incidencias/nueva', pathMatch: 'full' },
  {
    path: 'incidencias/nueva',
    component: NuevaIncidenciaComponent, // Reemplaza con el componente correspondiente
  },
  {
    path: 'incidencias/lista',
    component: ListaIncidenciasComponent, // Reemplaza con el componente correspondiente
  },
  {
    path: 'administrador/usuarios',
    component: UsuariosAdminComponent, // Reemplaza con el componente correspondiente
  },
  {
    path: 'administrador/tipos-subtipos',
    component: TiposAdminComponent, // Reemplaza con el componente correspondiente
  },
  {
    path: 'administrador/incidencias',
    component: IncidenciasAdminComponent, // Reemplaza con el componente correspondiente
  },
  {
    path: 'super/usuarios',
    component: UsuariosSuperComponent, // Reemplaza con el componente correspondiente
  },
  {
    path: 'super/tipos-subtipos',
    component: TiposSuperComponent, // Reemplaza con el componente correspondiente
  },
  {
    path: 'super/incidencias',
    component: IncidenciasSuperComponent, // Reemplaza con el componente correspondiente
  },
];
