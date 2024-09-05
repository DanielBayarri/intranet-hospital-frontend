import { Routes } from '@angular/router';
// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'regin',
    loadComponent: () =>
      loadRemoteModule('regin', './Component').then((m) => m.AppComponent),
  },
];
