import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { BreadcrumbComponent } from '../../../assets/components/breadcrumb/breadcrumb.component';
import { IncidenciaInterface } from '../../../../../../shared/interfaces/incidencia.interface';
import { IncidenciaService } from '../../../core/services/incidencia.service';
import { UsuarioInterface } from '../../../../../../shared/interfaces/usuario.interface';
import { AuthService } from '../../../../../../host/src/app/auth/auth.service';
import { CalendarComponent } from '../../../assets/components/calendar/calendar.component';
import { PdfService } from '../../../core/pdf/pdf.service';
import { ButtonModule } from 'primeng/button';

// Necesario para que pdfMake funcione correctamente

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
    CalendarComponent,
    ButtonModule,
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
  public currentUser: UsuarioInterface | null = null;
  public fecha: Date | undefined;
  public comentariosExpandidos: Set<number> = new Set<number>(); // Para los comentarios largos

  size: string = 'p-datatable-sm p-datatable-striped';
  @ViewChild('dt2') dt2!: Table;

  constructor(
    private incidenciaService: IncidenciaService,
    private authService: AuthService,
    private pdfService: PdfService
  ) {
    this.currentUser = this.authService.currentUser();
  }

  ngOnInit(): void {
    this.getIncidencias();
  }

  getIncidencias(fecha?: boolean) {
    if (this.currentUser) {
      const userId = this.currentUser.id;
      this.incidenciaService.getIncidenciasList().subscribe({
        next: (result) => {
          if (fecha) {
            this.incidenciasList = result.filter(
              (incidencia) =>
                incidencia.usuario.id === userId &&
                this.fecha?.toLocaleDateString('en-CA') ===
                  incidencia.fecha.toString()
            );
          } else {
            this.incidenciasList = result.filter(
              (incidencia) => incidencia.usuario.id === userId
            );
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  onDateChanged(date: Date) {
    this.getIncidencias(true);
    this.fecha = date;
    console.log('Fecha seleccionada:', this.fecha.toLocaleDateString('en-CA'));
  }
  clearDate() {
    this.getIncidencias();
    this.fecha = undefined;
  }

  // Este método controla la expansión o contracción del comentario
  mostrarComentarioCompleto(id: number) {
    if (this.comentariosExpandidos.has(id)) {
      this.comentariosExpandidos.delete(id); // Si está expandido, lo contrae
    } else {
      this.comentariosExpandidos.add(id); // Si está contraído, lo expande
    }
  }

  // Este método comprueba si el comentario está expandido
  isComentarioExpandido(id: number): boolean {
    return this.comentariosExpandidos.has(id);
  }

  generarPDF() {
    const filteredRows = this.dt2.filteredValue || this.incidenciasList;

    console.log('Resultados filtrados:', filteredRows);

    this.pdfService.generatePDF(filteredRows);
  }
}
