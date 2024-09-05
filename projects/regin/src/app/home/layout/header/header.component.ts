import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { UsuarioInterface } from '../../core/interfaces/usuario.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private authService = inject(AuthService);
  public user: UsuarioInterface | null;

  nombre = input<string>();

  constructor() {
    this.user = this.authService.currentUser();
    effect(() => {
      this.user = this.authService.currentUser();
      console.log(this.user);
    });
  }

  ngOnInit(): void {}
  onLogout() {
    this.authService.logout();
  }
}
