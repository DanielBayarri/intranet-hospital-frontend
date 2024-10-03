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
import { ListaGuardiasLocalizadasComponent } from './pages/usuarios/lista-guardias-localizadas/lista-guardias-localizadas.component';
import { GuardiasAdminComponent } from './pages/admin/guardias-admin/guardias-admin.component';
import { GuardiasSuperComponent } from './pages/superadmin/guardias-super/guardias-super.component';

export const REGIN_ROUTES: Routes = [
  { path: '', redirectTo: 'usuario/nueva-incidencia', pathMatch: 'full' },
  {
    path: 'usuario/nueva-incidencia',
    component: NuevaIncidenciaComponent,
  },
  {
    path: 'usuario/incidencias',
    component: ListaIncidenciasComponent,
  },
  {
    path: 'usuario/guardias-localizadas',
    component: ListaGuardiasLocalizadasComponent,
  },
  {
    path: 'administrador/usuarios',
    component: UsuariosAdminComponent,
  },
  {
    path: 'administrador/tipos-subtipos',
    component: TiposAdminComponent,
  },
  {
    path: 'administrador/incidencias',
    component: IncidenciasAdminComponent,
  },
  {
    path: 'administrador/guardias-localizadas',
    component: GuardiasAdminComponent,
  },
  {
    path: 'super/usuarios',
    component: UsuariosSuperComponent,
  },
  {
    path: 'super/tipos-subtipos',
    component: TiposSuperComponent,
  },
  {
    path: 'super/incidencias',
    component: IncidenciasSuperComponent,
  },
  {
    path: 'super/guardias-localizadas',
    component: GuardiasSuperComponent,
  },
];
