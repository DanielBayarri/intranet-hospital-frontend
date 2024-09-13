import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IncidenciaInterface } from '../../../../../../shared/interfaces/incidencia.interface';
import { IncidenciaService } from '../../../core/services/incidencia.service';
import { BreadcrumbComponent } from '../../../assets/components/breadcrumb/breadcrumb.component';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-incidencias-super',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TableModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
  ],
  templateUrl: './incidencias-super.component.html',
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
export class IncidenciasSuperComponent {
  public incidenciasList: IncidenciaInterface[] = [];

  size: string = 'p-datatable-sm p-datatable-striped';

  constructor(private incidenciaService: IncidenciaService) {}

  ngOnInit(): void {
    this.getIncidencias();
  }

  getIncidencias() {
    this.incidenciaService.getIncidenciasList().subscribe({
      next: (result) => {
        this.incidenciasList = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getSeverity(idGrupo: number) {
    switch (idGrupo) {
      case 1:
        return 'info';
      case 2:
        return 'warning';
      case 3:
        return 'success';
      default:
        return 'contrast';
    }
  }
}
