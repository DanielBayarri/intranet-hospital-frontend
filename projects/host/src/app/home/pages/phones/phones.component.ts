import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TelefonosList } from '../../shared/telefonos';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-phones',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './phones.component.html',
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
export class PhonesComponent {
  public telefonosList = TelefonosList;

  getSeverity(
    departamento: string
  ):
    | 'success'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'contrast'
    | undefined {
    switch (departamento) {
      // Azul claro para información general
      case 'INFORMACIÓN':
      case 'COMUNICACIÓN':
      case 'CAFETERÍA':
      case 'DIETÉTICA':
      case 'SERVICIOS GENERALES':
      case 'SEGURIDAD':
      case 'SINDICATOS':
        return 'info'; // Azul claro

      // Verde para administración y gestión
      case 'ADMINISTRACIÓN':
      case 'CALIDAD':
      case 'GERENCIA':
      case 'DIRECCIÓN':
      case 'PREVENCIÓN DE RIESGOS LABORALES':
      case 'SERVICIOS JURÍDICOS':
        return 'success'; // Verde

      // Amarillo para departamentos relacionados con salud o procesos críticos no emergentes
      case 'ADMISIONES':
      case 'FARMACIA':
      case 'MEDICINA LEGAL':
      case 'MEDICINA DEPORTIVA':
      case 'ONCOLOGÍA - CONSULTAS':
      case 'REHABILITACIÓN - CONSULTAS':
      case 'REHABILITACIÓN - FISIOTERAPIA':
      case 'RESIDENCIA S.M. CARDENAL COSTA':
      case 'UNIDAD DE CONDUCTAS ADICTIVAS (UCA)':
      case 'UNIDAD DE HOSPITALIZACIÓN DOMICILIARIA':
        return 'warning'; // Amarillo

      // Rojo para departamentos críticos o médicos de alta prioridad
      case 'ARCHIVO (U.D.C.A.)':
      case 'BRAQUITERAPIA':
      case 'CIRUGÍA - CONSULTAS':
      case 'CIRUGÍA - PLANTA':
      case 'CIRUGÍA PLÁSTICA Y RECONSTRUCTIVA':
      case 'MEDICINA NUCLEAR':
      case 'LABORATORIOS':
      case 'MEDICINA INTERNA':
      case 'ONCOLOGÍA - PLANTA':
      case 'ONCOLOGÍA RT':
      case 'URGENCIAS':
      case 'RADIODIAGNÓSTICO':
      case 'UNIDAD DE CRÍTICOS':
      case 'RESONANCIA MAGNÉTICA':
      case 'QUIRÓFANO':
      case 'UROLOGÍA':
        return 'danger'; // Rojo

      default:
        return 'info'; // Color por defecto si no se encuentra el departamento
    }
  }
}
