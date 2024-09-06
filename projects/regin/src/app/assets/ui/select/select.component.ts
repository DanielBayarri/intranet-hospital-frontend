import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { GrupoInterface } from '../../../../../../shared/interfaces/grupo.interface';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './select.component.html',
  styles: `
    .custom-select {
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

    .custom-select:hover {
      border-color: #a0aec0;
    }

    .custom-select:focus {
      border-color: #38b2ac;
    }
  `,
})
export class SelectComponent {
  @Input() options!: Observable<GrupoInterface[]>;
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  selectedOption: string = '';

  onOptionSelected(): void {
    this.selectionChange.emit(this.selectedOption);
  }
}
