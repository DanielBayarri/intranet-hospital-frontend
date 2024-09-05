import { Routes } from '@angular/router';
// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';
import { LoginComponent } from './auth/login/login.component';
import { isNotAuthenticatedGuard } from '../../../shared/guards/is-not-authenticated.guard';
import { isAuthenticatedGuard } from '../../../shared/guards/is-authenticated.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    canActivate: [isAuthenticatedGuard],
    path: 'regin',
    loadComponent: () =>
      loadRemoteModule('regin', './Component').then((m) => m.AppComponent),
  },
  {
    canActivate: [isNotAuthenticatedGuard],
    path: 'login',
    component: LoginComponent,
  },
  {
    canActivate: [isAuthenticatedGuard],
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
