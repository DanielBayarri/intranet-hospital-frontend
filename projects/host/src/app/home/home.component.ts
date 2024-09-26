import { Component, inject } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LinksnavComponent } from './layout/linksnav/linksnav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponent, NavbarComponent, LinksnavComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
