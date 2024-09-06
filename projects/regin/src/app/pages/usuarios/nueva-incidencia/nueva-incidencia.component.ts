import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { GrupoService } from '../../../core/services/grupo.service';
import { BreadcrumbComponent } from '../../../assets/components/breadcrumb/breadcrumb.component';
import { CalendarComponent } from '../../../assets/components/calendar/calendar.component';
import { InputComponent } from '../../../assets/ui/input/input.component';
import { GrupoInterface } from '../../../../../../shared/interfaces/grupo.interface';
import { SelectComponent } from '../../../assets/ui/select/select.component';

@Component({
  selector: 'app-nueva-incidencia',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FormsModule,
    CalendarComponent,
    InputComponent,
    SelectComponent,
  ],
  templateUrl: './nueva-incidencia.component.html',
})
export class NuevaIncidenciaComponent implements OnInit {
  public gruposList$!: Observable<GrupoInterface[]>;

  constructor(private grupoService: GrupoService) {}

  ngOnInit(): void {
    this.gruposList$ = this.grupoService.getGrupoList();
  }

  onSelectionChange(selectedValue: string): void {
    console.log('Selected value:', selectedValue);
  }
}
