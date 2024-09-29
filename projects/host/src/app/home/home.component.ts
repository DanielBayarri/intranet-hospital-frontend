import { Component, inject } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { UserNavbarComponent } from './layout/user-navbar/user-navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FaqComponent } from './layout/faq/faq.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    UserNavbarComponent,
    SidebarComponent,
    HeaderComponent,
    FaqComponent,
    MenuComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
