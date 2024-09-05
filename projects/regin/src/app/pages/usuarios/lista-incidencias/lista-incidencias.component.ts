import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { IncidenciaService } from '../../../core/services/incidencia.service';
import { IncidenciaInterface } from '../../../core/interfaces/incidencia.interface';
import { Observable } from 'rxjs';
import { Grupo } from '../../../core/interfaces/grupo.interface';
import { GrupoService } from '../../../core/services/grupo.service';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-lista-incidencias',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    AsyncPipe,
    CommonModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './lista-incidencias.component.html',
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
export class ListaIncidenciasComponent implements OnInit {
  public incidenciasList: IncidenciaInterface[] = [];
  public gruposList$!: Observable<Grupo[]>;
  size: string = 'p-datatable-sm';

  constructor(
    private incidenciaService: IncidenciaService,
    private grupoService: GrupoService,
  ) {}

  ngOnInit(): void {
    this.gruposList$ = this.grupoService.getGrupoList();
    this.getIncidencias();
  }

  getIncidencias() {
    this.incidenciaService.getIncidenciaList().subscribe({
      next: (result) => {
        this.incidenciasList = result;
        console.log(this.incidenciasList);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
