import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PrimaryBarComponent } from '../../components/primary-bar/primary-bar.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CardComponent, PrimaryBarComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent {}
