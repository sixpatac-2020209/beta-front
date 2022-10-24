import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OrdenModel } from 'src/app/models/orden.model';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';
import { CredentialsRestService } from 'src/app/services/credentialsRest/credentials-rest.service';
import { AutorizationRestService } from 'src/app/services/autorizationRest/autorization-rest.service';
import Swal from 'sweetalert2';

import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { ProgramacionModel } from 'src/app/models/programacion.model';
import { ProgramacionRestService } from 'src/app/services/prgramacionRest/programacion-rest.service';

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
  selector: 'app-orden-fabricacion',
  templateUrl: './orden-fabricacion.component.html',
  styleUrls: ['./orden-fabricacion.component.css'],
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
export class OrdenFabricacionComponent implements OnInit {

   CVE_ORDEN: any;
  orden: OrdenModel;
  progamacion: ProgramacionModel
  detalles: any;
  detalle: any;
  programacionForm: any;
  datePiOne: any;
  datePiTwo: any;
  dateprueba: any

  constructor(
    public activatedRoute: ActivatedRoute,
    private autorizationRest: AutorizationRestService,
    private programacionRest: ProgramacionRestService,

  ) {
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

  Programar() {
    const { year, month, date } = this.datePiOne._i;
    const datePiOneNew = `${year}-${month + 1}-${date}`;
    const yearTwo = this.datePiTwo._i.year;
    const monthTwo = this.datePiTwo._i.month;
    const dateTwo = this.datePiTwo._i.date
    const datePiTwoNew = `${yearTwo}-${monthTwo + 1}-${dateTwo}`;

    let params = { FECHA_INGRESA: datePiOneNew, FECHA_TERMINA: datePiTwoNew, ID_SEDE: this.orden.ID_SEDE }
    this.programacionRest.programar(this.CVE_ORDEN, params).subscribe({
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
  }

}
