import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input, OnInit } from '@angular/core';
import { PrimaryBarComponent } from '../../components/primary-bar/primary-bar.component';
import { SidemenuLinkComponent } from '../../components/sidemenu-link/sidemenu-link.component';
import { RouterModule } from '@angular/router';
import { FavouriteAppComponent } from '../../components/favourite-app/favourite-app.component';
import { AuthService } from '../../../auth/auth.service';

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
export class SidebarComponent implements OnInit {
  private authService = inject(AuthService);
  public user = computed(() => this.authService.currentUser());

  ngOnInit() {
    this.authService.checkAuthStatus().subscribe();
  }
}
