import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TelefonosList } from '../../shared/telefonos';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-phones',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule],
  templateUrl: './phones.component.html',
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
