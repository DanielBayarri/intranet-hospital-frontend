import { Component, inject, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { map, Observable } from 'rxjs'
import { GrupoService } from '../../../core/services/grupo.service'
import { BreadcrumbComponent } from '../../../assets/components/breadcrumb/breadcrumb.component'
import { CalendarComponent } from '../../../assets/components/calendar/calendar.component'
import { InputComponent } from '../../../assets/ui/input/input.component'
import { GrupoInterface } from '../../../../../../shared/interfaces/grupo.interface'
import { SelectComponent } from '../../../assets/ui/select/select.component'
import { PanelModule } from 'primeng/panel'
import { CommonModule } from '@angular/common'
import { InputTextModule } from 'primeng/inputtext'
import { DropdownModule } from 'primeng/dropdown'
import { ButtonModule } from 'primeng/button'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { TipoInterface } from '../../../../../../shared/interfaces/tipo.interface'
import { UsuarioInterface } from '../../../../../../shared/interfaces/usuario.interface'
import { AuthService } from '../../../../../../host/src/app/auth/auth.service'
import { TipoService } from '../../../core/services/tipo.service'
import { ServicioService } from '../../../core/services/servicio.service'
import { SubtipoInterface } from '../../../../../../shared/interfaces/subtipo.interface'

@Component({
  selector: 'app-nueva-incidencia',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    PanelModule,
    InputTextareaModule,
    FormsModule
  ],
  templateUrl: './nueva-incidencia.component.html'
})
export class NuevaIncidenciaComponent implements OnInit {
  public myForm: FormGroup
  // public gruposList$: Observable<GrupoInterface[]>
  public gruposList: GrupoInterface[] = []
  public tiposList: TipoInterface[] = []
  public subtiposList: SubtipoInterface[] = []
  public currentUser: UsuarioInterface | null = null
  subtipoDisabled = true

  constructor (
    private fb: FormBuilder,
    private grupoService: GrupoService,
    private servicioService: ServicioService,
    private tipoService: TipoService,
    private authService: AuthService
  ) {
    this.myForm = this.fb.group({
      titulo: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      subtipo: ['', [Validators.required]],
      comentario: ['', [Validators.required]]
    })
    this.currentUser = this.authService.currentUser()
  }

  ngOnInit (): void {
    this.grupoService.getGrupoList().subscribe(grupos => {
      this.gruposList = grupos ?? []
    })
    this.initSelectValues()
  }

  onSelectionChange (selectedValue: any): void {
    console.log('Selected value:', selectedValue)
    this.tipoService.getTipo(selectedValue.id).subscribe(servicio => {
      this.subtiposList = servicio.tipos
    })
  }

  initSelectValues () {
    if (this.currentUser) {
      let serviceId = this.currentUser.servicio[0].id
      this.servicioService.getServicioList(serviceId).subscribe(servicio => {
        this.tiposList = servicio.tipos
      })
    }
  }

  login (): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value)
    }
  }
}
