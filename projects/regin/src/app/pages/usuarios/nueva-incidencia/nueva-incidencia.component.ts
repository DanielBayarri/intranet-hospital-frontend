import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { CalendarComponent } from '../../../shared/components/calendar/calendar.component';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { SelectComponent } from '../../../shared/ui/select/select.component';
import { Grupo } from '../../../core/interfaces/grupo.interface';
import { GrupoService } from '../../../core/services/grupo.service';

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
  public gruposList$!: Observable<Grupo[]>;

  constructor(private grupoService: GrupoService) {}

  ngOnInit(): void {
    this.gruposList$ = this.grupoService.getGrupoList();
  }

  onSelectionChange(selectedValue: string): void {
    console.log('Selected value:', selectedValue);
  }
}
