import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { SidenavComponent } from '../layout/sidenav/sidenav.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidenavComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  currentUser = input<string>();
}
