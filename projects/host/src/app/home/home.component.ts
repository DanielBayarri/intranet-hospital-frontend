import { Component, inject } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponent, NavbarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
