import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrimaryBarComponent } from '../../components/primary-bar/primary-bar.component';
import { SidemenuLinkComponent } from '../../components/sidemenu-link/sidemenu-link.component';
import { RouterModule } from '@angular/router';
import { FavouriteAppComponent } from '../../components/favourite-app/favourite-app.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    PrimaryBarComponent,
    SidemenuLinkComponent,
    RouterModule,
    FavouriteAppComponent,
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
