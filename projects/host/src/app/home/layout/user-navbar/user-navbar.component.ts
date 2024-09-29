import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-navbar.component.html',
})
export class UserNavbarComponent { }
