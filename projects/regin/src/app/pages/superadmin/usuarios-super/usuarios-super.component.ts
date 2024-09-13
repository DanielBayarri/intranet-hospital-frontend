import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsuarioInterface } from '../../../../../../shared/interfaces/usuario.interface';
import { UsuarioService } from '../../../core/services/usuario.service';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TableModule } from 'primeng/table';
import { BreadcrumbComponent } from '../../../assets/components/breadcrumb/breadcrumb.component';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-usuarios-super',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TagModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './usuarios-super.component.html',
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
export class UsuariosSuperComponent {
  public usuariosList: UsuarioInterface[] = [];

  size: string = 'p-datatable-sm p-datatable-striped';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuariosList().subscribe({
      next: (result) => {
        this.usuariosList = result;
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
