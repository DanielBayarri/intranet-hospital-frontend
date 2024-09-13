import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IncidenciaInterface } from '../../../../../../shared/interfaces/incidencia.interface';
import { UsuarioInterface } from '../../../../../../shared/interfaces/usuario.interface';
import { IncidenciaService } from '../../../core/services/incidencia.service';
import { AuthService } from '../../../../../../host/src/app/auth/auth.service';
import { BreadcrumbComponent } from '../../../assets/components/breadcrumb/breadcrumb.component';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-incidencias-admin',
  standalone: true,
  imports: [BreadcrumbComponent, TableModule, IconFieldModule, InputIconModule],
  templateUrl: './incidencias-admin.component.html',
  styles: `
    .custom-input {
      height: 2.5rem;
      width: 18.4rem;
      border-radius: 0.375rem;
      border: 1px solid #cbd5e0;
      outline: none;
      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      color: #4a5568;
      padding-left: 0.75rem;
    }

    .custom-input:hover {
      border-color: #a0aec0;
    }

    .custom-input:focus {
      border-color: #38b2ac;
    }
  `,
})
export class IncidenciasAdminComponent {
  public incidenciasList: IncidenciaInterface[] = [];
  public currentUser: UsuarioInterface | null = null;

  size: string = 'p-datatable-sm p-datatable-striped';

  constructor(
    private incidenciaService: IncidenciaService,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.currentUser();
  }

  ngOnInit(): void {
    this.getIncidencias();
  }

  getIncidencias() {
    if (this.currentUser) {
      const grupoId = this.currentUser.grupo.id;
      this.incidenciaService.getIncidenciasList().subscribe({
        next: (result) => {
          this.incidenciasList = result.filter(
            (incidencia) => incidencia.grupo.id === grupoId
          );
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
