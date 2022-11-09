import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OrdenModel } from 'src/app/models/orden.model';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';
import { CredentialsRestService } from 'src/app/services/credentialsRest/credentials-rest.service';
import { AutorizationRestService } from 'src/app/services/autorizationRest/autorization-rest.service';
import Swal from 'sweetalert2';
import { EmailModel } from 'src/app/models/email.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { Router } from '@angular/router';
import { EmailRestService } from 'src/app/services/emailRest/email-rest.service';

import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { ProgramacionModel } from 'src/app/models/programacion.model';
import { ProgramacionRestService } from 'src/app/services/prgramacionRest/programacion-rest.service';
import { ResultadosRestService } from 'src/app/services/resultadosRest/resultados-rest.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})


export class AutorizationComponent implements OnInit {
  CVE_ORDEN: any;
  orden: OrdenModel;
  progamacion: ProgramacionModel
  detalles: any;
  detalle: any;

  email: EmailModel
  user: UsuarioModel
  emailForm: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    private autorizationRest: AutorizationRestService,
    private programacionRest: ProgramacionRestService,
    public router: Router,
    private ordenRest: OrdenProduccionRestService,
    private emailRest: EmailRestService,
    private userRest: UserRestService,
    private credentialRest: CredentialsRestService,
    private resultadosRest: ResultadosRestService

  ) {
    this.orden = new OrdenModel('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
    this.email = new EmailModel('');
    this.user = new UsuarioModel('', '', '', '', '', '', '',)
    this.orden = new OrdenModel('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
    this.progamacion = new ProgramacionModel('', '', '', '');
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(ruta => {
      this.CVE_ORDEN = ruta.get('id');
    });

    this.getAutorizacion(this.CVE_ORDEN);
  }

  getAutorizacion(id: string) {

    this.autorizationRest.getAutorizacion(id).subscribe({
      next: (res: any) => {
        this.orden = res.returnAutorizacion;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.autorizationRest.getDetalleAutorizacion(id).subscribe({
      next: (res: any) => {
        this.detalles = res.returnDetalle;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.autorizationRest.getImporteAutorizacion(id).subscribe({
      next: (res: any) => {
        this.detalle = res.returnImporte;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  autorizar() {
    let params = { ID_USUARIO: `${this.credentialRest.getIdentity().name} ${this.credentialRest.getIdentity().surname}` }
    
    this.autorizationRest.autorizar(this.CVE_ORDEN, params).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 2000
        });
      }, error: (err) => Swal.fire({
        title: err.error.message,
        icon: 'error',
        position: 'center',
        timer: 3000
      })
    });

    this.emailRest.confirmarOrden(this.CVE_ORDEN, params).subscribe({
      error: (err) => Swal.fire({
        title: err.error.message,
        icon: 'error',
        position: 'center',
        timer: 3000
      })
    });
  }



  corregirEmail() {
    let params = { EMAIL: `${this.user.name} ${this.user.surname}`, razon: this.email.razon }
    this.emailRest.corregirOrden(this.CVE_ORDEN, params).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 2000
        });
        this.emailForm.reset()
      },
      error: (err) => Swal.fire({
        title: err.error.message,
        icon: 'error',
        position: 'center',
        timer: 3000
      })
    });

  }

  rechazarEmail() {
    let params = { EMAIL: `${this.user.name} ${this.user.surname}`, razon: this.email.razon }
    this.emailRest.rechazarOrden(this.CVE_ORDEN, params).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 2000
        });

      },
      error: (err) => Swal.fire({
        title: err.error.message,
        icon: 'error',
        position: 'center',
        timer: 3000
      })
    });
    this.autorizationRest.rechazar(this.CVE_ORDEN).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 2000
        })

      },
      error: (err) => Swal.fire({
        title: err.error.message,
        icon: 'error',
        position: 'center',
        timer: 3000
      })
    });
  }

  createResultados() {
    this.resultadosRest.createResultados(this.CVE_ORDEN).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: res.message,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 2000
        })
      },
      error: (err) => Swal.fire({
        title: err.error.message,
        icon: 'error',
        position: 'center',
        timer: 3000
      })
    })
  }

}
