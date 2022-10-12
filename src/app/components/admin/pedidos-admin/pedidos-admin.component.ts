import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderRestService } from 'src/app/services/ordersRest/order-rest.service';
import { PedidoModel } from 'src/app/models/pedido.model';
import { ExportExcelPedidoService } from '../../../services/exportData/exportExcelPedido/export-excel-pedido.service';
import { VendedorRestService } from '../../../services/vendedorRest/vendedor-rest.service';
import { VendedorModel } from '../../../models/vendedor.model';
import { ClienteRestService } from 'src/app/services/clienteRest/cliente-rest.service';
import { ClienteModel } from 'src/app/models/cliente.model';
import Swal from 'sweetalert2';

import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import { Moment } from 'moment';
import * as moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports

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


/** @title Datepicker emulating a Year and month picker */

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: [
    './pedidos-admin.component.css',
    '../../../../assets/others/assets/scss/style.scss',
  ],
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


export class PedidosAdminComponent implements OnInit {
  pedido: PedidoModel;
  vendedor: VendedorModel;
  cliente: ClienteModel
  pedidos: any;
  position: any;
  searchPedido: any;
  pedidosY: any;
  pedidosPorMes: any;

  normalizedYear: any
  normalizedMonth: any
  datepicker: any
  monthForm: any;

  constructor(
    private pedidoRest: OrderRestService,
    private excelService: ExportExcelPedidoService,
    private clienteRest: ClienteRestService,
    private vendedorRest: VendedorRestService

  ) {
    this.pedido = new PedidoModel('', '', '', '', '', '', '', '', '','');
    this.vendedor = new VendedorModel('', '', '');
    this.cliente = new ClienteModel('', '','','')
  }

  ngOnInit(): void {
    this.getPedidos();
    this.chosenYearHandler(this.normalizedYear);
    this.chosenMonthHandler(this.normalizedMonth, this.datepicker, this.getPedidosPorMes)
  }

  date = new FormControl(moment());

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    if (ctrlValue !== null) {
      ctrlValue.year(normalizedYear.year());
      this.date.setValue(ctrlValue);
      this.getPedidosPorMes(this.monthForm);
    }
    this.getPedidosPorMes(this.monthForm);
  }

  async chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>, getPedidoPorMes: any) {
    const ctrlValue = this.date.value;
    if (ctrlValue !== null) {
      ctrlValue.month(normalizedMonth.month());
      this.date.setValue(ctrlValue);
      this.getPedidosPorMes(this.monthForm);
      await datepicker.close();

    }
  }

  //Variables - Mostrar | Ocultar DOM//
  showTableUsers: boolean = false;
  notFound: boolean = false;

  //Botones de Acciones//
  buttonActions: boolean = false;
  controloClick: number = 0;

  getPedidos() {
    this.pedidoRest.getPedidos().subscribe({
      next: (res: any) => {
        this.pedidos = res.returnPedidos;
        for (let pedido of this.pedidos) {
          pedido.position = this.pedidos.indexOf(pedido) + 1;
        }
        if (this.showTableUsers === true) {
          for (let pedido of this.pedidos) {
            pedido.checked = true;
          }
          this.pedidos = this.pedidos
        }
      },
      error: (err) => console.log(err),
    });
  }

  getPedido(id: string) {
    this.pedidoRest.getPedido(id).subscribe({
      next: (res: any) => {
        this.pedido = res.returnPedido;
        console.log(this.pedido);
      },
      error: (err) => {
        alert(err.error.message);
      },
    });

    this.vendedorRest.getVendedorPedidoCorreo(id).subscribe({
      next: (res: any) => {
        this.vendedor = res.returnVendedor;
        console.log(this.vendedor.CORREOE);
      },
      error: (err) => {
        alert(err.error.message);
      },
    });

    this.clienteRest.getClientePedido(id).subscribe({
      next: (res: any) => {
        this.cliente = res.returnCliente;
        console.log(this.cliente)
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.vendedorRest.getVendedorPedido(id).subscribe({
      next: (res: any) => {
        this.vendedor = res.returnVendedor;
      },
      error: (err) => {
        console.log(err);
      },
    });

  }

  //Exportar Datos a Excel//
  exportExcel() {
    this.excelService.downloadExcel(this.pedidos);
  }

  getPedidosPorMes(monthForm: any) {
    this.pedidoRest.getPedidoPorMes(this.pedido).subscribe({
      next: (res: any) => {
        this.pedidosPorMes = res.returnPedidosPorMes;
        if (this.pedidosPorMes.length === 0) {
          this.notFound = !this.notFound;
        };
        monthForm.reset()
      },
      error: (err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
        monthForm.reset()
      },
    });
  }

}

