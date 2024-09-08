import { ChangeDetectorRef, Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  inputType = 'password'

  private fb = inject(FormBuilder)
  private authService = inject(AuthService)
  private cd = inject(ChangeDetectorRef)
  private router = inject(Router)

  public loginError = ''
  public myForm: FormGroup = this.fb.group({
    dni: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  login () {
    const { dni, password } = this.myForm.value
    this.authService.login(dni, password).subscribe({
      next: () => this.router.navigateByUrl('/home'),
      error: error => {
        console.log(error)
      }
    })
  }
}
