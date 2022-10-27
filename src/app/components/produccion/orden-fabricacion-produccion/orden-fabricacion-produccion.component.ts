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
  selector: 'app-orden-fabricacion-produccion',
  templateUrl: './orden-fabricacion-produccion.component.html',
  styleUrls: ['./orden-fabricacion-produccion.component.css'],
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
export class OrdenFabricacionProduccionComponent implements OnInit {
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

}