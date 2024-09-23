import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  standalone: true,
  imports: [FormsModule, CalendarModule, InputOtpModule],
  styles: ``,
})
export class CalendarComponent {
  @Input() date: Date | undefined;
  @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
      firstDayOfWeek: 1,
      dayNames: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      monthNamesShort: [
        'E',
        'F',
        'Mz',
        'Ab',
        'My',
        'Jn',
        'Jl',
        'Ag',
        'S',
        'O',
        'N',
        'D',
      ],
      today: 'Hoy',
      clear: 'Reiniciar',
      dateFormat: 'dd/mm/yy',
      weekHeader: 'Semana',
    });
  }

  onDateSelect(event: any) {
    this.date = event;
    this.dateChange.emit(this.date); // Emitir el valor seleccionado al componente padre
  }
}
