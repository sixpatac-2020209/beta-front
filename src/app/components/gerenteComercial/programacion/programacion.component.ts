import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProgramacionModel } from 'src/app/models/programacion.model';
import { ProgramacionRestService } from 'src/app/services/prgramacionRest/programacion-rest.service';
import { OrdenModel } from 'src/app/models/orden.model';
import { ExportExcelOrdenService } from 'src/app/services/exportData/exportExcelOrden/export-excel-orden.service';
import { OrdenFabricacionRestService } from 'src/app/services/ordenFabricacionRest/orden-fabricacion-rest.service';
import { OrdenProduccionRestService } from 'src/app/services/ordenProduccionRest/orden-produccion-rest.service';
import Swal from 'sweetalert2';

import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

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
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css'],
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
export class ProgramacionComponent implements OnInit {

  CVE_ORDEN: any;
  orden: OrdenModel;
  ordenes: any;
  progamacion: ProgramacionModel
  detalles: any;
  detalle: any;
  programacionForm: any;
  datePiOne: any;
  datePiTwo: any;
  dateprueba: any;
  notFound: boolean = false;

  constructor(
    private programacionRest: ProgramacionRestService,
    private excelService: ExportExcelOrdenService,
    private ordenFabricacionRest: OrdenFabricacionRestService,
    private ordenRest: OrdenProduccionRestService,
  ) {
    this.orden = new OrdenModel('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
    this.progamacion = new ProgramacionModel('', '', '', '');
  }
  ngOnInit(): void {
    this.getOrdenes();
  }

  getOrdenes() {
    this.ordenFabricacionRest.getOrdenesFabricacion().subscribe({
      next: (res: any) => {
        this.ordenes = res.returnAuth;
        for (let orden of this.ordenes) {
          orden.position = this.ordenes.indexOf(orden) + 1;
        }
      },
      error: (err) => console.log(err),
    });
  }

  getOrden(id: string) {
    this.ordenRest.getOrden(id).subscribe({
      next: (res: any) => {
        this.orden = res.returnOrden;
      },
      error: (err) => {
        alert(err.error.message);
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

  exportExcel() {
    this.excelService.downloadExcel(this.ordenes);
  }

}
